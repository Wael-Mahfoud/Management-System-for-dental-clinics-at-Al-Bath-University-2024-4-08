<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\PatientRecord;
use App\Models\Operations;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;
use PhpParser\Node\Expr\Cast\String_;
use PHPUnit\Framework\Constraint\Operator;

class PatientRecordController extends Controller
{


    //انشاء سجل مرضي
    public function create_patient_record(Request $request)
    {

        try {
            $validatedData = $request->validate([
                "patient_id" => "required",
                "global_information" => "required",
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }

        $pendingCount = PatientRecord::where('patient_id', $request->patient_id)
            ->where('state', 'waiting')
            ->count();

        // التحقق من عدد السجلات
        if ($pendingCount >= 2) {
            return response()->json([
                'success' => false,
                'data' => "You have reached the maximum number of waiting records. You cannot add any more.",
            ]);
        }

        $record = PatientRecord::create($validatedData);
        return response()->json([
            'success' => true,
            'data' => "The patient record has been successfully created",
        ]);
    }

    //حذف سجل مرضي
    public function delete_patient_record(Request $request)
    {

        $record = PatientRecord::find($request->id);
        if ($record->state == "waiting") {
            $record->delete();
            return response()->json([
                'success' => true,
                'data' => "The patient record has been successfully deleted.",
            ]);
        } else {
            return response()->json([
                'success' => false,
                'data' => "You can only delete records that are in 'waiting' status.",
            ]);
        }
    }



    //الغاء تاكيد سجل مرضي
    public function cancel_patient_record(Request $request)
    {

        $record = PatientRecord::find($request->id);
        $opertaionCount = Operations::where(['record_id' => $request->id])->count();
        if ($opertaionCount == 0) {
            PatientRecord::where(['id' => $request->id])->update(['student_id' => null, "state" => "waiting", "confirm_date" => null]);
            return response()->json([
                'success' => true,
                'data' => "The patient record has been canceld successfully .",
            ]);
        } else {
            return response()->json([
                'success' => false,
                'data' => "You can not cancel record that has treatment operations.",
            ]);
        }
    }



    // get patient records with status "waiting"
    public function get_waited_patient_records(Request $request)
    {
        $records = PatientRecord::where(["state" => "waiting"])->with(['patient'])->get()->all();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }

    // get patient records by id
    public function get_patient_record_by_id(Request $request)
    {
        $records = PatientRecord::where(["id" => $request->record_id])->with(['patient', 'student', 'doctor', 'operations'])->get()->first();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }

    // get all patient record informations
    public function get_all_patient_records(Request $request)
    {
        $records = PatientRecord::where([])->with(['patient', 'student', 'doctor', 'operations'])->get()->all();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }



    // get  patient records informations
    public function get_patient_records(Request $request)
    {
        $records = PatientRecord::where(['patient_id' => $request->patient_id])->with(['patient', 'student', 'doctor', 'operations'])->get()->all();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }

    // get all student  patient record informations
    public function get_all_student_patient_records(Request $request)
    {
        $records = PatientRecord::where(["student_id" => $request->user_id])->with(['patient', 'student', 'doctor', 'operations'])->get()->all();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }


    // get all doctor  patient record informations
    public function get_all_doctor_patient_records(Request $request)
    {
        $records = PatientRecord::where(["doctor_id" => $request->user_id])->with(['patient', 'student', 'doctor', 'operations'])->get()->all();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }

    // confirm waited record
    public function confirm_patient_records(Request $request)
    {


        $pendingCount = PatientRecord::where('student_id', $request->student_id)
            ->where('state', 'confirmed')
            ->count();

        // التحقق من عدد السجلات
        if ($pendingCount >= 2) {
            return response()->json([
                'success' => false,
                'data' => "You have reached the maximum number of confirmed records. You cannot add any more.",
            ]);
        }
        PatientRecord::where(["id" => $request->id])->update(
            [
                'student_id' => $request->student_id,
                'doctor_id' => $request->doctor_id,
                'confirm_date' => Carbon::now(),
                'state' => 'confirmed'
            ]
        );

        return response()->json([
            'success' => true,
            'data' => 'medical record cofirmed successfuly.',
        ]);
    }



    // called by doctor when student finish confirmed record
    public function finish_patient_records(Request $request)
    {

        $opertaionCount = Operations::where([['state', '!=', "closed"]])->where(['record_id' => $request->id])->count();


        if ($opertaionCount) {
            return response()->json([
                'success' => false,
                //'data' => $opertaionCount,
                'data' => "Sorry doctor you can not close record , you must evaluate all student operation on it..",
            ]);
        }

        $result = intval(Operations::where('record_id', $request->id)->avg('result'));

        $records = PatientRecord::where(["id" => $request->id])->update(
            [
                'close_date' => Carbon::now(),
                'final_result' => $result,
                'state' => 'closed'
            ]
        );
        return response()->json([
            'success' => true,
            'data' => "patient record closed successfully,student result is :" .  strval($result),
        ]);
    }
}
