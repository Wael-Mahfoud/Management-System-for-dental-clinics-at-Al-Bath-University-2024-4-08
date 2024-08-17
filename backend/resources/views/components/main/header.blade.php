<header id="header" class="fixed-top bg-black borderd   text-warning container-fluid "
    style="box-shadow: 1px 1px 20px 1px greenyellow">

    <div class="container d-flex align-items-center justify-content-between" style="height:;">

        <div>
            <div style="box-shadow: 20px 40px 300px 30px darkblue"></div>
            <h4 class="logo  mr-5 pr-2  ">
                <i class="  fs-1 bi-file-earmark-lock-fill text-warning "></i>
                <a href="{{ url('index') }}" class="  text-warning text-left  " style="padding-bottom: 10px;">Source
                    Safer</a>

            </h4>
        </div>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar navbar-expand-xl     d-flex "style=" padding-top    :20px">
            <div class="container">
                <ul class="  ">


                    <li><a class="nav-link scrollto  text-warning  " href="{{ url('index') }}">
                            <h5 class="text-warning "> <i class="fs-4 bi-house  text-warning  "></i>
                                Home </h5>
                        </a></li>

                    @if (auth()->user())
                        @if (auth()->user()->isadmin)
                            <li><a class="nav-link scrollto  text-warning  " href="{{ url('groups') }}">
                                    <h5 class="text-warning "> <i class="fs-4 bi-card-list  text-warning  "></i>
                                        Gourp List </h5>
                                </a></li>
                            <li><a class="nav-link scrollto  text-warning  " href="{{ url('loop') }}">
                                    <h5 class="text-warning "> <i class="fs-4 bi-card-list  text-warning  "></i>
                                        Loop </h5>
                                </a></li>
                        @endif
                    @endif

                    <li><a class="nav-link scrollto  text-warning  " href="{{ url('add_file') }}">
                            <h5 class="text-warning "> <i class="fs-4 bi-upload  text-warning  "></i>
                                Add file </h5>
                        </a></li>







                    @guest

                        <li class="nav-item">
                            <a class="nav-link  getstarted  text-light bg-warning package-item bordered-none"
                                style="max-width:100px; border: none" href="{{ route('login') }}">Login </a>

                        </li>
                    @else
                        <li><a class="nav-link scrollto  text-warning  " href="{{ url('profile/' . auth()->user()->id) }}">
                                <h5 class="text-warning "> <i class="fs-4 bi-person  text-warning  "></i>
                                    Profile </h5>
                            </a></li>
                        <li class="nav-item">
                            <a class="nav-link scrollto getstarted text-black bg-warning package-item bordered-none"
                                style="max-width:100px; border: none" href="{{ route('logout') }}">Logout</a>

                        </li>

                    @endguest

                </ul>
            </div>

            <i class="bi bi-list text-light mobile-nav-toggle"></i>

        </nav><!-- .navbar -->

    </div>



</header><!-- End Header -->
