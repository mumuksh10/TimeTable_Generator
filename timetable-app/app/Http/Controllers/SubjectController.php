<?php

// app/Http/Controllers/SubjectController.php

namespace App\Http\Controllers;

use App\Models\Subject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    public function index()
    {
        $subjects = Subject::all();
        return Inertia::render('Subjects/Index', ['subjects' => $subjects]);
    }

    public function create()
    {
        return Inertia::render('Subjects/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Subject::create($request->only('name'));

        return redirect()->route('subjects.index');
    }

    public function edit($id)
    {
        $subject = Subject::find($id);
        return Inertia::render('Subjects/Edit', ['subject' => $subject]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $subject = Subject::find($id);
        $subject->update($request->only('name'));

        return redirect()->route('subjects.index');
    }

    public function destroy($id)
    {
        $subject = Subject::find($id);
        $subject->delete();
        return redirect()->route('subjects.index');
    }
}
