<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('timetables', function (Blueprint $table) {
        $table->id();
        $table->foreignId('classroom_id')->constrained();
        $table->foreignId('teacher_id')->constrained();
        $table->foreignId('subject_id')->constrained();
        $table->string('day');
        $table->string('time');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('timetables');
    }
};
