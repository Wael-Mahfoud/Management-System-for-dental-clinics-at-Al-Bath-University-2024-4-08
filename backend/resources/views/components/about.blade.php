<div class=" text-light bg-dark     bordered shadow  mt-5 py-5" id="">
    <div class="  pt-4 container text-light col-lg-12">
        <h2 class="text-center text-light">About <span class="text-primary">Secure File Safer Website</span></h2>
        <p class="text-center">The Best secure safe files Website, New perfect experience ' , Easy to use</p>

        <div class="  " id="about">
            <div class=" container ">
                <div class="row   ">
                    <div class="col-lg-12 col-12 text-center  text-dark">

                        <h4 class="text-uppercase text-warning mt-5">Perfect <span>Secure File Safer</span></h4>
                        <hr class="text-light bg-light">
                        <p class="text-white-50">

                         the web site will give good exprience for upload and download your file in secure way and keep your information safty and your file so any body that not in your group cannot show your files and download it<br />
                        </p>
                        <div class="d-flex justify-content-center mb-4">
                            <h5 class="text-uppercase text-light mt-5">engoy <span>with us</span></h5>

                        </div>

                        <div class="row bg-secondary ">
                            @guest
                            <h4 class="text-light"> You Must Login To Show File List</h4>
                            @else
                                @foreach ($data as $file)
                                    <div class="col-md-4">
                                        @include('components.files', ['name' => $file->name])
                                    </div>
                                @endforeach
                            @endguest

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
