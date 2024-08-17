@extends('main.main')

@section('content')
    <main id="" class=" container pt-5 mt-5" >
        @if ($message = Session::get('success'))
            <div class="alert alert-info mt-5 pt-2">
                {{ $message }}
            </div>
        @endif

        <div class="row d-flex justify-content-center container py-5">
            <div class="col-md-4">
                <div class="card package-item">
                    <div class="card-header   logo ">Login</div>
                    <div class="card-body">
                        <form action="{{ route('sample.validate_login') }}" method="post">
                            @csrf
                            <div class="form-group mb-3">
                                <input type="text" name="email" value="{{old('email')}}" class="form-control" placeholder="Email" />
                                @if ($errors->has('email'))
                                    <span class="text-danger">{{ $errors->first('email') }}</span>
                                @endif
                            </div>
                            <div class="form-group mb-3">
                                <input type="password" name="password" value="{{old('password')}}" class="form-control" placeholder="Password" />
                                @if ($errors->has('password'))
                                    <span class="text-danger">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                            <div class="d-grid mx-auto">
                                <button type="subit" class="btn btn-dark btn-block">Login</button>
                            </div>
                            <hr>
                            <div class="card-footer">
                                <p>
                                    if you do not have account click <a href="{{ url('registration') }}">Here</a> to create
                                    a new account
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection('content')
