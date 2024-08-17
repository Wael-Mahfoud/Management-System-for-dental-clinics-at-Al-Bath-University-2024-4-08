@extends('main.main')

@section('content')
    <main id="main" class=" text-white py-5 mt-5">
        <section id="" class=" container ">
            @if ($message = Session::get('success'))
                <div class="alert alert-info" role="alert" style="text-align: center;">
                    <h4> {{ $message }}</h4>
                </div>
            @endif

            <div class="container pt-5 pb-3">
                <div class="text-center mb-3 pb-3">
                    <h6 class="text-primary text-uppercase" style="letter-spacing: 5px;">Group Policy List</h6>
                    <h1 class="text-light">
                        User Group List
                    </h1>
                </div>
                <div class="row">
                    <div class=" col-xs-10      table table-responsive container">


                        <table class=" table  text-white table-center table ">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th> Name</th>
                                    <th> Phone</th>
                                    <th>Email</th>
                                    <th>operation</th>
                                </tr>
                            </thead>

                            <tbody>
                                <div style="display: none"> {{ $x = 0 }}</div>
                                @foreach ($data as $user)
                                    <tr>
                                        <td>{{ ++$x }}</td>
                                        <td><a class=" btn btn-dark" href="{{ url('') }}">
                                                {{ $user->name }}</a></td>
                                        <td>{{ $user->phone }}</td>
                                        <td>{{ $user->email }}</td>
                                        <!-- called when user need to show Group Information -->
                                        <td> <a href="{{  url('profile/'.$user->id) }}" class="btn btn-primary">Show Profile</a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section><!-- End Portfolio Details Section -->

    </main><!-- End #main -->
@endsection('content')
