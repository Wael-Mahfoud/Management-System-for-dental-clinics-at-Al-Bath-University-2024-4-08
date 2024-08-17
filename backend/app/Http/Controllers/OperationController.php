<?php

namespace App\Http\Controllers;

use App\Models\Analysis;
use Illuminate\Http\Request;
use Hash;
use Session;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use App\Models\PatientRecord;
use App\Models\Operations;
use Carbon\Carbon;
use Illuminate\Validation\ValidationException;


class OperationController extends Controller
{


    //انشاء عملية جيدة
    public function add_opertaion(Request $request)
    {

        try {
            $validatedData = $request->validate([
                "record_id" => "required",
                "date" => "required",
                "work_1" => "required",
                "image_before" => "required",
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            //return response()->json(['errors' => $errors], 422);
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        //check if there is any waiting operation for same record before add another
        $waitingOperationCount = Operations::where(["record_id" => $request->record_id])->where(['state' => 'waiting'])->count();
        if ($waitingOperationCount > 1) {
            return response()->json([
                'success' => false,
                'data' => "you must finish last treatment to add new operation",
            ]);
        }

        if ($request->has('image_before') && $request->image_before != null) {
            $imageName = time()  . "." . $request->image_before->extension();
            $request->file('image_before')->move(public_path('images/operation_images/'), $imageName);
            $validatedData['image_before'] = $imageName;
        }

        Operations::create($validatedData);

        //save  a new Operation to database
        //        Operations::create($validatedData);
        return response()->json([
            'success' => true,
            'data' => "New Treatment has been added successfuly ",
        ]);
    }


    // get operation by id
    public function get_opertaion_by_id(Request $request)
    {
        $records = Operations::where(["id" => $request->operation_id])->with(['patient_record'])->get()->first();
        return response()->json([
            'success' => true,
            'data' => $records,
        ]);
    }


    //تعديل عملية سابقة
    public function edit_opertaion(Request $request)
    {

        try {
            $validatedData = $request->validate([
                "id" => "required",
                "image_before" => "required",
                "work_1" => "required",

            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            //return response()->json(['errors' => $errors], 422);
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        $record = Operations::where(['id' => $request->id])->update([
            'image_before' => $request->image_before,
            'work_1' => $request->work_1,
            'state' => "working",
        ]);
        return response()->json([
            'success' => true,
            'data' => $record,
        ]);
    }





    //اغلاق عملية سابقة
    public function close_opertaion(Request $request)
    {

        try {
            $validatedData = $request->validate([
                "operation_id" => "required|numeric",
                "image_after" => "required",
                "work_2" => "required",
                "student_note" => "required",
                "tools" => "required",
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            //return response()->json(['errors' => $errors], 422);
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        if ($request->has('image_after') && $request->image_after != null) {
            $imageName = time()  . "." . $request->image_after->extension();
            $request->file('image_after')->move(public_path('images/operation_images/'), $imageName);
        }

        $record = Operations::where(['id' => $request->operation_id])->update([
            'image_after' => $imageName,
            'work_2' => $request->work_2,
            'student_note' => $request->student_note,
            'tools' => $request->tools,
            'state' => "waiting docotor result"

        ]);
        return response()->json([
            'success' => true,
            'data' => "Operation has been closed successfully. ",
        ]);
    }


    // تقييم عملية سابقة بواسطة الطبيب
    public function evaluating_operatoin(Request $request)
    {

        try {
            $validatedData = $request->validate([
                "operation_id" => "required",
                "result" => "required",
                "doctor_note" => "required",
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            //return response()->json(['errors' => $errors], 422);
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        $record = Operations::where(['id' => $request->operation_id])->update([
            'result' => $request->result,
            'doctor_note' => $request->doctor_note,
            'state' => "closed"

        ]);
        return response()->json([
            'success' => true,
            'data' => "The operaion was evaluated successfully.",
        ]);
    }

    //احضار العمليات للطلاب المشرف عليهم الطبيب لجميع المرضى
    public function getDoctorOperations(Request $request)
    {
        $doctorId = $request->id;
        // جلب العمليات باستخدام علاقة بين النماذج
        $operations = Operations::whereHas('patient_record', function ($query) use ($doctorId) {
            $query->where('doctor_id', $doctorId);
        })->with('patient_record')->get();


        return response()->json([
            'success' => true,
            'data' => $operations,
        ]);
    }
    // احضار قائمة العمليات لجميع المرضى
    public function getStudentOperations(Request $request)
    {
        $doctorId = $request->id;
        // جلب العمليات باستخدام علاقة بين النماذج
        $operations = Operations::whereHas('patient_record', function ($query) use ($doctorId) {
            $query->where('student_id', $doctorId);
        })->with('patient_record')->get();


        return response()->json([
            'success' => true,
            'data' => $operations,
        ]);
    }
    //احضار جميع العمليات الخاصة بالمريض
    public function getPatientOperations(Request $request)
    {
        $doctorId = $request->id;
        // جلب العمليات باستخدام علاقة بين النماذج
        $operations = Operations::whereHas('patient_record', function ($query) use ($doctorId) {
            $query->where('patient_id', $doctorId);
        })->with('patient_record')->get();


        return response()->json([
            'success' => true,
            'data' => $operations,
        ]);
    }









    //حذف سجل مرضي
    public function delete_patient_record(Request $request)
    {
        try {
            $validatedData = $request->validate([
                "id" => "required",
            ]);
        } catch (ValidationException $e) {
            $errors = $e->errors();
            //return response()->json(['errors' => $errors], 422);
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        $record = PatientRecord::where(['id' => $request->id])->delete();
        return response()->json([
            'success' => true,
            'data' => $record,
        ]);
    }
}
