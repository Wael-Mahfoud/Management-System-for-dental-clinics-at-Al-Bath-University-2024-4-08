<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $timestamps = null;
    public function up(): void
    {
        Schema::create('patient_records', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('patient_id');
            $table->unsignedInteger('student_id')->nullable();
            $table->unsignedInteger('doctor_id')->nullable();
            $table->string('state')->default('waiting');
            $table->string('global_information');
            $table->timestamp('open_date')->useCurrent();
            $table->timestamp('confirm_date')->nullable();
            $table->timestamp('close_date')->nullable();
            $table->integer('final_result')->nullable();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('patient_records');
    }
};
