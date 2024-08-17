@extends('main.main')

@section('content')
@if(Session::has('download'))
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>
{{Session::get('download')}}
<meta http-equiv="refresh" content="5;url{{Session::get('download')}}">
@endif
    <main id="main" class=" portfolio-details " style="margin: 75px;">

    </main>
    <div class="container emp-profile">
        <div>
            <div class="row shadow mb-5">
                <div class="col-md-3 mb-3 ">
                    <div class="profile-img m-0 shadow border">
                        <img src="{{ asset('images') }}/{{ $data->image }}" alt="" />
                        <div class="file btn btn-lg btn-primary">
                            {{ $data->name }}
                        </div>
                    </div>
                </div>
                <div class="col-md-7 mt-6 pt-5 ">
                    <div class="profile-head">
                        <h5 class="text-capitalize">
                            User Name :   {{ $data->name }}
                        </h5>
                        <h6>
                            {{ $data->isadmin ? 'website manager' : 'normal user' }}
                        </h6>
                        <p class="nav-item">Phone : <span>{{ $data->phone }}</span></p>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                    aria-controls="home" aria-selected="true">Files</a>
                            </li>
                        </ul>
                    </div>
                </div>


                    <div class="col-md-2 mt-6 pt-5  ">
                        @if ($data->userid == auth()->user()->id)
                        <a class="profile-edit-btn btn border" name="btnAddMore" href="{{ url('edit_profile') }}">
                            Edit Profile
                        </a>
                        <br /> <br />
                        <a class="profile-edit-btn btn border" name="btnAddMore" href="{{ url('add_file') }}">
                            upload file
                        </a>
                        @endif
                        <br /> <br />
                        <a class="profile-edit-btn btn border" name="btnAddMore" href="{{ url('user_operation/'.$data->id) }}">
                           User Operation
                        </a>

                    </div>

            </div>
            <div class="row mb-2">
                <div class="col-md-3 mr-1 border">
                    <div class="profile-work">
                        <form action="{{ url('getChkBox/'.$data->userid) }}" method="post">
                            @csrf
                            <p>Global Inforamtion</p>
                            <a>{{ $data->global_info }}</a><br />
                            <p>Email Address</p>
                            <a class="text-capitalize">{{ $data->email }}</a><br />
                            <br />
                            <hr />
                            <p class="text-black">Groups</p>
                            @foreach ($data->groups as $group)
                                @if (in_array($group->id, $data->userGroups))
                                    <label class="checkbox-inline text-primary">
                                        <h6 class="text-secondary">{{ $group->name }}</h6>
                                    </label>
                                    <br />
                                @endif
                            @endforeach
                            <hr />
                            @if ( auth()->user()->isadmin)
                                <h4 class="text-black text-capitalize">edit user group</h4>
                                @foreach ($data->groups as $group)
                                    <label class="checkbox-inline">
                                        @if ($group->id != 1)
                                            <input type="checkbox" id="group_id" name="group_id[]"
                                                value="{{ $group->id }}"
                                                {{ in_array($group->id, $data->userGroups) ? 'checked' : '' }}>
                                            {{ $group->name }}
                                        @endif
                                    </label>
                                    <br />
                                @endforeach
                                <input type="submit" class="btn btn-primary" value="edit">

                            @endif
                        </form>
                    </div>
                </div>
                <div class="col-md-8 ml-2 ">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane  show active " id="home" role="tabpanel" aria-labelledby="home-tab">

                            <div class="row">
                                <div class="col-md-6">
                                    <label>User Name</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{{ $data->name }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{{ $data->email }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{{ $data->phone }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Number Of files</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{{ count($data->files) }} Files</p>
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                @foreach ($data->files as $file)
                                    <div class="col-md-4">
                                        @include('components.files', ['name' => $file->name])
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection('content')
