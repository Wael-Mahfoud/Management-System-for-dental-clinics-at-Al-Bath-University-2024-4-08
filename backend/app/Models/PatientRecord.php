<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientRecord extends Model
{
    protected $table = 'patient_records';
    use HasFactory;
    protected $fillable = ['patient_id', 'global_information'];

    public $timestamps = false;



    //get student information
    public function student()
    {
        return $this->belongsTo('App\Models\User', 'student_id', 'id');
    }

    //get doctor information
    public function doctor()
    {
        return $this->belongsTo('App\Models\User', 'doctor_id', 'id');
    }

    //get patient information
    public function patient()
    {
        return $this->belongsTo('App\Models\User', 'patient_id', 'id');
    }



    // get Operations list
    public function operations()
    {
        return $this->hasMany('App\Models\Operations', 'record_id', 'id');
    }
}


























 /*  public function orders(){
        return $this->hasMany(Order::class);
    }*/
