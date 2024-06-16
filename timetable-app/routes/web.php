<?php

// routes/web.php

use Inertia\Inertia;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TimetableController;

Route::redirect('/', '/dashboard');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::resource('teachers', TeacherController::class);
Route::resource('classrooms', ClassroomController::class);
Route::resource('subjects', SubjectController::class);
Route::get('/timetable', [TimetableController::class, 'index'])->name('timetable.index');
Route::post('/timetable/generate', [TimetableController::class, 'generate'])->name('timetable.generate');
Route::get('/timetable/pdf', [TimetableController::class, 'generatePDF'])->name('timetable.pdf');

Route::get('/teachers/create', function () {
    return Inertia::render('Teachers/Create');
})->name('teachers.create');
Route::get('/classrooms/create', function () {
    return Inertia::render('Classrooms/Create');
})->name('classrooms.create');
Route::get('/subjects/create', function () {
    return Inertia::render('Subjects/Create');
})->name('subjects.create');