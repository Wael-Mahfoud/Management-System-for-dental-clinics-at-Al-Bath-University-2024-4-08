< <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <title>Secure Files System</title>
        <!-- Favicons -->
        <link href="assets/img/favicon.png" rel="icon">

        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
        <link rel="stylesheet" href="{{ asset('bootstrap.css') }}">
        <!-- Vendor CSS Files -->
        <!-- Template Main CSS File -->

        <link href="{{ asset('stylePackage.css') }}" rel="stylesheet">

        <link href="{{ asset('css/assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
        <link href="{{ asset('css/assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/assets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/ssets/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
        <link href="{{ asset('css/assets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">
        <link href="{{ asset('css/assets/css/style.css') }}" rel="stylesheet">
        <link href="{{ asset('css/cardstyles.css') }}" rel="stylesheet">

        <link href="{{ asset('profile_style.css') }}" rel="stylesheet">
    </head>

    <body class="section-bg  ">

        <!-- ======= Header ======= -->
        @include('components.main.header')

        <div class=" mt-1 ">

            <!-- content -->
            @yield('content')
        </div>

        <!-- ======= Footer ======= -->
        @include('components.main.footer')
        <a href="#"
            class="back-to-top d-flex align-items-center  bg-warning justify-content-center package-item"><i
                class="bi bi-arrow-up-short text-light "></i></a>


        <!-- Vendor JS Files -->
        <script src="{{ asset('bootstrap.js') }}"></script>
        <script src="{{ asset('jquery-2.1.1.min.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/purecounter/purecounter_vanilla.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/glightbox/js/glightbox.min.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/swiper/swiper-bundle.min.js') }}"></script>
        <script src="{{ asset('css/assets/vendor/php-email-form/validate.js') }}"></script>

        <!-- Template Main JS File -->
        <script src="{{ asset('css/assets/js/main.js') }}"></script>

    </body>

    </html>
