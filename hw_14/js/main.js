
$(window).on('load', () => {
    $(".preloader-container").fadeOut(2500);
    $('#body').css("display", "block");
    $('#mobile-video').attr('src', './img/video_mobile.mp4');
    
    $(document.head).append('<link rel="stylesheet" href="css/main.css">');
    // $(document.body).append('<link rel="preload" href="css/main-min.css" as="style">');
    // $(document.head).append('<link rel="stylesheet" type="text/css" href="./slick-1.8.1/slick/slick.css"/>');
    // $(document.body).append('<script type="text/javascript" src="./slick-1.8.1/slick/slick.min.js"></script>');
   
    $('.review-slider').slick({
        prevArrow: $(".bg-arrow_left"),
        nextArrow: $(".bg-arrow_right")
    });
    










});