<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Department;
use App\Models\Employee;

use App\Models\Policy;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    //create default admin account
    public function run(): void
    {

        $user = new User();
        $user->name = "Website manager";
        $user->phone = "0998877665";
        $user->image = "admin.png";
        $user->address = "homs";
        $user->gender = "male";
        $user->global_information = "webiste manager";
        $user->type = "admin";
        $user->age = 23;
        $user->email = "admin@admin.com";
        $user->password = Hash::make("123123123");
        $user->save();
    }
}
