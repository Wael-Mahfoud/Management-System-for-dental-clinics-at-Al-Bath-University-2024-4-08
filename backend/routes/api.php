<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PharmacyController;
use App\Http\Controllers\PatientRecordController;
use App\Http\Controllers\OperationController;



//------------------------------ users routes
Route::post('register', [UserController::class, 'register']); //انشاء حساب مستخدم جديد

Route::post('login', [UserController::class, 'login']); //تسجيل الدخول

Route::post('get_user_information', [UserController::class, 'get_user_information']); //جلب معلومات المستخدم جسب المعرف

Route::post('edit_profile', [UserController::class, 'edit_profile']); //تعديل معلومات المستخدم

Route::post('delete_user', [UserController::class, 'delete_user']); //حذف المستخدم

Route::post('get_doctor_list', [UserController::class, 'get_doctor_list']); //جلب معلومات الاطباء

Route::post('get_student_list', [UserController::class, 'get_student_list']); //جلب معلومات الطلاب

Route::post('get_patient_list', [UserController::class, 'get_patient_list']); //جلب معلومات المرضى

Route::post('disable_user_account', [UserController::class, 'disable_user_account']); //الغاء تفعيل حساب

Route::post('enable_user_account', [UserController::class, 'enable_user_account']); //تفعيل حساب





//----------------------------patient records
Route::post('create_patient_record', [PatientRecordController::class, 'create_patient_record']); //انشاء سجل مرضي

Route::post('delete_patient_record', [PatientRecordController::class, 'delete_patient_record']); //حذف سجل مرضي

Route::post('cancel_patient_record', [PatientRecordController::class, 'cancel_patient_record']); //الغاء حجز سجل مرضي


Route::post('get_waited_patient_records', [PatientRecordController::class, 'get_waited_patient_records']); //جلب السجلات المرضية في حالة انتظار

Route::post('get_patient_records', [PatientRecordController::class, 'get_patient_records']); // جلب جميع السجلات المرضية لمريض


Route::post('get_all_patient_records', [PatientRecordController::class, 'get_all_patient_records']); //جلب جميع السجلات المرضية

Route::post('get_all_student_patient_records', [PatientRecordController::class, 'get_all_student_patient_records']); //جلب جميع السجلاتا التي اسنلمها طالب

Route::post('get_all_doctor_patient_records', [PatientRecordController::class, 'get_all_doctor_patient_records']); //جلب جميع السجلاتا التي اشرف عليها الدكتور



Route::post('confirm_patient_records', [PatientRecordController::class, 'confirm_patient_records']); //استلام حالة مرضية

Route::post('finish_patient_records', [PatientRecordController::class, 'finish_patient_records']); //انهاء حالة مرضية


Route::post('get_patient_record_by_id', [PatientRecordController::class, 'get_patient_record_by_id']); //احضار السيجل المرضي حسب المعرف




//-------------------------------------------------------------Operations

Route::post('add_opertaion', [OperationController::class, 'add_opertaion']); //اضافة حالة موعد

Route::post('edit_opertaion', [OperationController::class, 'edit_opertaion']); //تعديل حالة موعد

Route::post('close_opertaion', [OperationController::class, 'close_opertaion']); //اغلاق حالة موعد

Route::post('evaluating_operatoin', [OperationController::class, 'evaluating_operatoin']); //تقييم  حالة موعد

Route::post('get_opertaion_by_id', [OperationController::class, 'get_opertaion_by_id']); //استعادة عملية بواسطة المعرف

Route::post('getDoctorOperations', [OperationController::class, 'getDoctorOperations']); //استعادة جميع العمليات المشرف عليها الطبيب


Route::post('getStudentOperations', [OperationController::class, 'getStudentOperations']); //استعادة جميع العمليات المشرف عليها الطبيب

Route::post('getPatientOperations', [OperationController::class, 'getPatientOperations']); //استعادة جميع العمليات المشرف عليها الطبيب



//Route::post('delete_patient_record', [PatientRecordController::class, 'delete_patient_record']); //انشاء سجل مرضي
