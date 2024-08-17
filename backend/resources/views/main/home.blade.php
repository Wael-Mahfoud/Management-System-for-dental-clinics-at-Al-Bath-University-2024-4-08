@extends('main.main')

@section('content')
    <div class=" pt-5 mt-5">

        <br>
        <section id="portfolio" class="portfolio container  ">




            @guest
                @else
                @include('components.search_bar')
            @endguest


            <section id="team" class="team  ">
                @include('components.about')


            </section>







        </section><!-- End Portfolio Section -->


    </div>
@section('content')
