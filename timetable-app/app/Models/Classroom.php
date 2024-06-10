<?php
// app/Models/Classroom.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function timetables()
    {
        return $this->hasMany(Timetable::class);
    }
}
