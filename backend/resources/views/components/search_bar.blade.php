<div class=" container   text-black  bg-primary  shadow  mt-0 py-5  d-none d-lg-block">
    <div class="container  ">


        <div class="row  ">
            <div></div>
            <div
                class="col-lg-12 col-md-6  text-center text-light text-lg-left mb-4 mb-lg-0  text-center d-flex justify-content-center ">
                <div class="d-inline-flex align-items-center  text-capitalize">
                    <p><i class="fa fa-envelope mr-2"></i>Welcome To Secure File Safer Websites</p>
                    <p class="text-body px-3">|</p>
                    <p class=" text-capitalize"><i class="fa fa-phone-alt mr-2"></i>we provide a perfect expriene ,You Can
                        Search From Here....</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid booking mt-5 pb-5 pt-4 ">

    <div class="container package-item ">
        <div class="bg-light shadow package-item" style="padding: 30px;">
            <div class="row align-items-center " style="min-height: 60px;">
                <div class="col-md-12 ">
                    <div class="row d-flex justify-content-center ">
                        <div class="row col-md-3 navbar border-primary mx-2">
                            <div class="dropdown  d-flex justify-content-between  "><span> List Search</span> <i
                                    class="bi bi-list"></i>
                                <ul>
                                    <li><a class="d-flex justify-content-center"
                                        href="{{ url('') }} ">All</a>
                                </li>
                                    @foreach ($data->policies as $policy)

                                    <li><a class="d-flex justify-content-center" href="{{ url('search_by_group/'.$policy->group->id) }} "> {{$policy->group->name}}</a>
                                    </li>

                                    @endforeach


                                </ul>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div class="mb-3 mb-md-0">
                                <div class="w-100">
                                    <form action="{{ url('search') }}" method="GET">
                                        <div class="input-group">

                                            @csrf
                                            <input type="text" name="name" class="form-control border-primary"
                                                style="height: 47px;" placeholder="Search by name">
                                            <div class="input-group-append">
                                                <button class="btn btn-dark text-warning px-3">Search</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
