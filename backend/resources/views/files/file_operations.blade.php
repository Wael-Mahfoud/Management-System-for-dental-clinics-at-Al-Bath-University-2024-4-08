@extends('main.main')

@section('content')
    <main id="main" class=" text-white py-5 mt-5">
        <section id="" class=" container ">
            @if ($message = Session::get('success'))
                <div class="alert alert-info" role="alert" style="text-align: center;">
                    <h4> {{ $message }}</h4>
                </div>
            @endif

            <div class="row">
                <div class=" col-xs-10      table table-responsive container">


                    <table class=" table  text-white table-center table ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> file name</th>
                                <th> download date</th>
                                <th>uploade date</th>
                                <th>user</th>
                            </tr>
                        </thead>

                        <tbody>
                            <div style="display: none"> {{ $x = 0 }}</div>
                            @foreach ($data as $operation)
                                <tr>
                                    <td>{{ ++$x }}</td>
                                    <td><a class=" btn btn-dark" href="{{ url('') }}">
                                            {{ $operation->file->name }}</a></td>
                                    <td>{{ $operation->bookdate }}</td>
                                    <td>{{ $operation->uploaddate  }}</td>
                                    <!-- called when user need to show Group Information -->
                                    <td> <a href="{{ url('profile/'.$operation->userid) }}" class="btn btn-primary">{{$operation->user->name}}</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>

        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
@endsection('content')
