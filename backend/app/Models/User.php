<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    public $timestamps = false;
    use HasFactory;
    protected $fillable = [
        'name', 'phone', 'image',
        'address', 'gender', 'age', 'global_information', 'type', 'email', 'password'
    ];


    protected $hidden = ['password'];



    //get patient record infotmation
    public function patient_records()
    {
        return $this->hasMany('App\Models\PatientRecord', 'patient_id', 'id');
    }
}
