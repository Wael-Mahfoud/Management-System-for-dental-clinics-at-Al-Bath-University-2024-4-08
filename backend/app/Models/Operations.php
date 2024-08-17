<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Operations extends Model
{
    protected $table = 'opertations';
    use HasFactory;
    protected $fillable = [
        'record_id',
        'work_1', 'date',
        'image_before'

    ];

    public $timestamps = false;

    //get manager information
    public function patient_record()
    {
        return $this->belongsTo('App\Models\PatientRecord', 'record_id', 'id')->with(['patient', 'student', 'doctor']);
    }
}
