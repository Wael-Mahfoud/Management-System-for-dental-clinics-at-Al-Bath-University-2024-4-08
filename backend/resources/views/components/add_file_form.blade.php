<main class="container  my-5 ">
    <div class="row justify-content-center mt-5">
        <div class="col-lg-5 col-md-4">
            <div class="card">
                <div class="card-header text-warning bg-black">New Group</div>
                <div class="card-body">
                    <form action="{{ route('validate_file') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input name="file" class="text-dark" type="file" />
                        @if ($errors->has('file'))
                            <br />
                            <span class="text-danger">{{ $errors->first('file') }}</span>
                        @endif
                        <div class="my-3">
                            <p class="text-dark "> Select Group</p>
                            <select class="form-control m-bot15" name="group_id">
                                @foreach ($data as $d)
                                        <option value="{{ $d->group->id }}"
                                        {{ $d->group->id == 1 ? 'selected="selected"' : '' }}>{{ $d->group->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="d-grid mx-auto my-5">
                            <button type="submit" class="btn btn-dark  btn-block">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</main>
