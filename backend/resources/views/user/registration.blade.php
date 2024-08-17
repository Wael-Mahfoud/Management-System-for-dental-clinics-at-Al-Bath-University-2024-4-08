@extends('main.main')

@section('content')
    <main class="container mt-5 my-5 pt-5"  >
        <div class="row justify-content-center mt-5">
            <div class="col-lg-5 col-md-4">
                <div class="card">
                    <div class="card-header">Registration</div>
                    <div class="card-body">
                        <form action="{{ route('sample.validate_registration') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group mb-3">
                                <input type="text" name="name" value="{{old('name')}}" class="form-control" placeholder="Name" />
                                @if ($errors->has('name'))
                                    <span class="text-danger">{{ $errors->first('name') }}</span>
                                @endif
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" name="phone" value="{{old('phone')}}" class="form-control" placeholder="Phone Number" />
                                @if ($errors->has('phone'))
                                    <span class="text-danger">{{ $errors->first('phone') }}</span>
                                @endif
                            </div>
                            <div class="form-group mb-3">
                                <input type="text" name="email" value="{{old('email')}}" class="form-control" placeholder="Email Address" />
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
                            <div class="form-group mb-3">
                                <textarea rows="10" name="global_info" class="form-control" placeholder="Global Information">{{old('global_info')}}</textarea>

                                @if ($errors->has('global_info'))

                                    <span class="text-danger">{{ $errors->first('global_info') }}</span>
                                @endif
                            </div>


                            <div class="form-group mb-3 bordered shadow ">
                                <input type="file" id="imagef" name="image"
                                    onchange="readURL(event)" accept="image/*" value="{{old('image')}}"  />
                                @if ($errors->has('image'))
                                <br/>
                                    <span class="text-danger">{{ $errors->first('image') }}</span>
                                @endif

                            </div>
                            <div class="col-lg-8 container bordered shadow-lg" id="images1">

                            </div>
                            <div class="d-grid mx-auto">
                                <button type="submit" class="btn btn-dark btn-block">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </main>
    <script type="text/javascript">
        function readURL(event) {
            document.getElementById('images1').innerHTML = '';
            var mob_image = document.getElementById("mobile_image");
            var inp = document.getElementById('imagef');
            for (var i = 0; i < inp.files.length; ++i) {
                var img = document.createElement('img');
                var src = URL.createObjectURL(inp.files.item(i));
                img.src = src;
                img.style.width="100%";
                img.style.margin = '1%';
                img.style.border = '2px solid red';
                document.getElementById('images1').appendChild(img);


            }



        }
    </script>



@endsection('content')
