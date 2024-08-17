<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    private $timestamps = null;
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('phone');
            $table->string('image')->nullable();
            $table->string('address');
            $table->string('gender');
            $table->integer('age');
            $table->string('global_information');
            $table->string('type'); //doctor,student,patient,manager
            $table->string('email');
            $table->string('password');
            $table->boolean('enabled')->default(true);
            $table->timestamp('date')->useCurrent();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
