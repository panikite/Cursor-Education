// $(document.body).append('<link rel="stylesheet" type="text/css" href="./slick-1.8.1/slick/slick.css"/>');
// $(document.body).append('<script type="text/javascript" src="./slick-1.8.1/slick/slick.min.js"></script>');

// $(document.head).append('<link rel="stylesheet" type="text/css" href="./slick-1.8.1/slick/slick.css"/>');


$(window).on('load', () => {
    $('#mobile-video').attr('src', './img/video_mobile.mp4');
    $(".preloader-container").fadeOut(1500);
    $(document.body).append('<link rel="stylesheet" href="css/main-min.css">');
    // $(document.heady).append('<link rel="stylesheet" type="text/css" href="./slick-1.8.1/slick/slick.css"/>');
    // $(document.body).append('<script type="text/javascript" src="./slick-1.8.1/slick/slick.min.js"></script>');
    
   
    $('.review-slider').slick({
        prevArrow: $(".bg-arrow_left"),
        nextArrow: $(".bg-arrow_right")
    });
    










});