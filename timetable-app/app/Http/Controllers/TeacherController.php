<?php

// app/Http/Controllers/TeacherController.php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index()
    {
        $teachers = Teacher::all();
        return Inertia::render('Teachers/Index', ['teachers' => $teachers]);
    }

    public function create()
    {
        return Inertia::render('Teachers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'max_hours_per_day' => 'required|integer',
            'max_hours_per_week' => 'required|integer',
        ]);

        Teacher::create($validated);

        return redirect()->route('teachers.index');
    }

    public function edit($id)
    {
        $teacher = Teacher::find($id);
        return Inertia::render('Teachers/Edit', ['teacher' => $teacher]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'max_hours_per_day' => 'required|integer',
            'max_hours_per_week' => 'required|integer',
        ]);

        $teacher = Teacher::find($id);
        $teacher->update($validated);

        return redirect()->route('teachers.index');
    }

    public function destroy($id)
    {
        $teacher = Teacher::find($id);
        $teacher->delete();
        return redirect()->route('teachers.index');
    }
}
