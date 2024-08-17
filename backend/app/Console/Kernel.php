<?php

namespace App\Console;
use App\Models\Purchase;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        // $schedule->command('inspire')->hourly();
        $schedule->call(function () {
            $booked_mobiles = Purchase::where(['id' => 2]);
            $booked_mobiles->delete();
        })->everyMinute();;
    }
    

    /**
     * Register the commands for the application.
     */

    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }


 
}