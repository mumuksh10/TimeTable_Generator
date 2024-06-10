<?php
// app/Models/Teacher.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'max_hours_per_day',
        'max_hours_per_week',
    ];

    public function timetables()
    {
        return $this->hasMany(Timetable::class);
    }
}
