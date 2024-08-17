@extends('main.main')

@section('content')
    <main id="main" class=" text-white py-5 mt-5">
        <section id="" class=" container ">
            @if ($message = Session::get('success'))
                <div class="alert alert-info" role="alert" style="text-align: center;">
                    <h4> {{ $message }}</h4>
                </div>
            @endif

            @include('components.download_file')


        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
@endsection('content')
