<?php

namespace App\Http\Controllers;

use App\Models\Classroom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    public function index()
    {
        $classrooms = Classroom::all();
        return Inertia::render('Classrooms/Index', ['classrooms' => $classrooms]);
    }

    public function create()
    {
        return Inertia::render('Classrooms/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Classroom::create($request->all());
        return redirect()->route('classrooms.index');
    }

    public function edit($id)
    {
        $classroom = Classroom::find($id);
        return Inertia::render('Classrooms/Edit', ['classroom' => $classroom]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $classroom = Classroom::find($id);
        $classroom->update($request->all());
        return redirect()->route('classrooms.index');
    }

    public function destroy($id)
    {
        $classroom = Classroom::find($id);
        $classroom->delete();
        return redirect()->route('classrooms.index');
    }
}