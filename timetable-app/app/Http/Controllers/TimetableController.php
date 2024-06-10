<?php

// app/Http/Controllers/TimetableController.php

namespace App\Http\Controllers;

use App\Models\Classroom;
use App\Models\Teacher;
use App\Models\Subject;
use App\Models\Timetable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

class TimetableController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::all();
        return Inertia::render('Timetables/Index', ['classrooms' => $classrooms, 'timetables' => []]);
    }

    public function generate(Request $request)
    {
        $classroomId = $request->input('classroom_id');
        $days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        $periods = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];
        $teachers = Teacher::all();
        $subjects = Subject::all();

        if ($teachers->isEmpty() || $subjects->isEmpty()) {
            return redirect()->route('timetable.index')->with('error', 'No teachers or subjects available to generate timetable.');
        }

        // Delete previous timetable entries for this classroom
        Timetable::where('classroom_id', $classroomId)->delete();

        foreach ($days as $day) {
            $usedSubjects = [];

            foreach ($periods as $period) {
                $teacher = $teachers->random();

                // Rotate subjects if all have been used
                if (count($usedSubjects) >= $subjects->count()) {
                    $usedSubjects = [];
                }

                $availableSubjects = $subjects->whereNotIn('id', $usedSubjects);

                if ($availableSubjects->isEmpty()) {
                    $subject = $subjects->random();
                } else {
                    $subject = $availableSubjects->random();
                }

                if ($this->canAssignTeacher($teacher, $day, $period)) {
                    Timetable::create([
                        'classroom_id' => $classroomId,
                        'teacher_id' => $teacher->id,
                        'subject_id' => $subject->id,
                        'day' => $day,
                        'time' => $period,
                    ]);

                    $usedSubjects[] = $subject->id; // Mark subject as used for this day
                }
            }
        }

        // Retrieve the generated timetable for display
        $timetables = Timetable::with(['classroom', 'teacher', 'subject'])
                               ->where('classroom_id', $classroomId)
                               ->get();

        $classrooms = Classroom::all();
        return Inertia::render('Timetables/Index', ['classrooms' => $classrooms, 'timetables' => $timetables]);
    }

    public function generatePDF(Request $request)
    {
        $classroomId = $request->query('classroom_id');
        $timetables = Timetable::with(['classroom', 'teacher', 'subject'])
                               ->where('classroom_id', $classroomId)
                               ->get();

        $pdf = Pdf::loadView('timetables.pdf', compact('timetables'));

        return $pdf->download('timetable.pdf');
    }

    private function canAssignTeacher($teacher, $day, $period)
    {
        $dailyCount = Timetable::where('teacher_id', $teacher->id)->where('day', $day)->count();
        $weeklyCount = Timetable::where('teacher_id', $teacher->id)->count();
        $isBooked = Timetable::where('teacher_id', $teacher->id)->where('day', $day)->where('time', $period)->exists();

        if ($isBooked) {
            return false; // Teacher is already booked for the period
        }

        if ($dailyCount >= $teacher->max_hours_per_day) {
            return false; // Teacher exceeds daily limit
        }

        if ($weeklyCount >= $teacher->max_hours_per_week) {
            return false; // Teacher exceeds weekly limit
        }

        return true; // Teacher can be assigned
    }
}
