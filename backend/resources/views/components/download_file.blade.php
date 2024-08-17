<main class="container  my-5 ">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-5 col-md-4">
            <div class="card">
                <div class="card-header text-warning bg-black">file is ready to download</div>

                <div class="card-body">

                    <a href="{{ url('start_download/' . $file->id) }}"
                        class="from-control btn btn-danger form-group">download</a>
                </div>
            </div>
        </div>
</main>
