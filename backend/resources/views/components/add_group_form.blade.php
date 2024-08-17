<main class="container  my-5 "  >
    <div class="row justify-content-center mt-5">
        <div class="col-lg-5 col-md-4">
            <div class="card">
                <div class="card-header text-warning bg-black">New Group</div>
                <div class="card-body">
                    <form action="{{ route('sample.validate_new_group') }}" method="POST">
                        @csrf
                        <div class="form-group mb-3 package-item">
                            <input type="text" name="name" value="{{old('name')}}" class="form-control" placeholder="Name" />
                            @if ($errors->has('name'))
                                <span class="text-danger">{{ $errors->first('name') }}</span>
                            @endif
                        </div>
                        <div class="form-group mb-3">
                            <div class="portfolio-description  rounded  package-item " style="padding: 10px;">
                                <h5> Group Information:</h5>
                            <textarea rows="10" name="globalinformation" class="form-control" value= placeholder="group information">{{old('specification')}}</textarea>

                            @if ($errors->has('globalinformation'))
                                <span class="text-danger">{{ $errors->first('specification') }}</span>
                            @endif
                        </div>
                        </div>

                        <div class="d-grid mx-auto">
                            <button type="submit" class="btn btn-dark  btn-block">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</main>
