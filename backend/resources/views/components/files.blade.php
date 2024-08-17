<div class="profile-card-10 text-center package-item"><img src="{{ asset('images/temp/file.jpg') }}">
    <div class="profile-content ">
        <div class="profile-name"> {{ $file->size }}
            <p> {{ $file->name }}</p>
        </div>
        <div class="profile-description">
            <div class="col-xs-4">
                <div class="profile-overview">
                    <hr>
                    <h6 class="text-warning text-capitalize">{{ $file->group->name }} Group</h6>
                    <h5 class="text-warning">{{ $file->locked ? 'locked' : 'available' }}</h5>

                </div>
            </div>



            <h6 class="text-light"> User:<a href="{{ url('profile/' . $file->userid) }}" class="text-primary">
                    {{ $file->user->name }}</a></h6>
            <br>
            @if ($file->userid == auth()->user()->id && !$file->locked ||(auth()->user()->isadmin &&  !$file->locked))
                <a href="{{ url('delete_file/' . $file->id) }}" class=" form-group btn btn-danger">delete</a>
            @endif
            @if (!$file->locked)
                <a href="{{ url('book_file/' . $file->id) }}"
                    class="from-control btn btn-danger form-group">download</a>
            @else
                @if ($file->latest_operation[0]->userid == auth()->user()->id)
                    <a href="{{ url('checkout_form/' . $file->latest_operation[0]->id) }}"
                        class="from-control btn btn-danger form-group">check_out</a>
                @endif
            @endif
            <br>
            <a href="{{ url('file_operation/' . $file->id) }}" class="from-control btn btn-danger form-group">File
                Operation</a>

        </div>
    </div>
</div>
