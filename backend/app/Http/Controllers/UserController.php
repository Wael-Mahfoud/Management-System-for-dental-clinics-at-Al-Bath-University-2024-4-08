<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{



    //create new user account
    public function register(Request $request)
    {

        $data = $request->all();

        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'address' => 'required|string|max:255',
                'gender' => 'required|string',
                'age' => 'required|integer',
                'global_information' => 'nullable|string',
                'type' => 'required|string|max:255',
                'email' => 'required|string|max:255|unique:users',
                'password' => 'required|string|min:8',
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

        if ($request->has('image') && $request->image != null) {
            $imageName = time()  . "." . $data['image']->extension();
            $request->file('image')->move(public_path('images/user_images/'), $imageName);
            $validatedData['image'] = $imageName;
        }
        $validatedData['password'] = bcrypt($validatedData['password']);
        $user = User::create($validatedData);
        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }

    // edit user profile
    public function edit_profile(Request $request)
    {
        $data = $request->all();


        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'address' => 'required|string|max:255',
                'age' => 'required|integer',
                'global_information' => 'nullable|string',

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
        $updateData = $validatedData;
        if ($request->has('image') && $request->image != null) {
            $imageName = time()  . "." . $data['image']->extension();
            $request->file('image')->move(public_path('images/user_images/'), $imageName);
            $updateData['image'] = $imageName;
        }


        $user = User::where(["id" => $request->id])->update($updateData);
        return response()->json([
            'success' => true,
            'data' => 'profile has been updated succesfuly',
        ]);
    }



    //delete user account
    public function delete_user(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'email' => 'required',
            ]);
        } catch (ValidationException $e) {
            // الوصول لرسائل الخطأ
            $errors = $e->errors();
            $firstError = reset($errors);
            $firstErrorMessage = reset($firstError);
            return response()->json([
                'success' => false,
                'data' => $firstErrorMessage,
            ], 422);
        }
        $user = User::where(["email" => $request->email])->delete();
        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }


    //login
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            //            $user = User::where(['id' => $user->id])->with('works_for')->first();
            $user = User::where(['id' => $user->id])->first();

            if ($user->enabled)
                return response()->json([
                    'success' => true,
                    'data' => $user,
                ]);
            return response()->json([
                'success' => false,
                'data' => "your account is disabled by admin you can not access the system",
            ]);
        } else {
            return response()->json([
                'success' => false,
                'data' => "error in login name or password",
            ]);
        }
    }




    // get user information
    public function get_user_information(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "user_id" => "required",
        ]);
        if ($validator->fails())
            return response()->json(['error' => $validator->messages()], 401);
        $user = User::where('id', $request->user_id)->first();
        return response()->json([
            'success' => true,
            'data' => $user,
        ]);
    }


    // get doctors list
    public function get_doctor_list()
    {
        $users = User::where('type', "doctor")->get()->all();
        return response()->json([
            'success' => true,
            'data' => $users,
        ]);
    }

    // get student list
    public function get_student_list()
    {
        $users = User::where('type', "student")->get()->all();
        return response()->json([
            'success' => true,
            'data' => $users,
        ]);
    }

    // get patient list
    public function get_patient_list()
    {
        $users = User::where('type', "patient")->get()->all();
        return response()->json([
            'success' => true,
            'data' => $users,
        ]);
    }


    //disable user account
    public function disable_user_account(Request $request)
    {
        User::where('id', $request->user_id)->update(['enabled' => false]);
        return response()->json([
            'success' => true,
            'data' => "User Account has been disabled.",
        ]);
    }

    //enable user account
    public function enable_user_account(Request $request)
    {
        User::where('id', $request->user_id)->update(['enabled' => true]);
        return response()->json([
            'success' => true,
            'data' => "User Account has been enabled.",
        ]);
    }
}
