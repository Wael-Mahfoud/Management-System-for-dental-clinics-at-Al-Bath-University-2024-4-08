<main class="container  my-5 ">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-5 col-md-4">
            <div class="card">
                <div class="card-header text-warning bg-black">you can upload edited file from</div>

                <div class="card-body">
                    <form action="{{ url('validate_checkout/'.$data) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input name="file" class="text-dark" type="file" />
                        @if ($errors->has('file'))
                            <br />
                            <span class="text-danger">{{ $errors->first('file') }}</span>
                        @endif

                        <div class="d-grid mx-auto my-5">
                            <button type="submit" class="btn btn-dark  btn-block">upload</button>
                        </div>
                    </form>

                    <a href="{{ url('check_out/' . $data) }}"
                        class="from-control btn btn-danger form-group">check_out without edit</a>

                </div>
            </div>
        </div>
</main>
