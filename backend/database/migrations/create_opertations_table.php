<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $timestamps = null;
    public function up(): void
    {
        Schema::create('opertations', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('record_id');
            $table->string('image_before')->nullable();
            $table->string('date');
            $table->string('tools')->nullable();
            $table->string('work_1')->nullable();
            $table->string('work_2')->nullable();
            $table->string('image_after')->nullable();
            $table->string('student_note')->nullable();
            $table->integer('result')->nullable();
            $table->string('doctor_note')->nullable();
            $table->string('state')->default('waiting');
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('opertations');
    }
};
