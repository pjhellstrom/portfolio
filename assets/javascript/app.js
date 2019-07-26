$(document).ready( function() {

    // Nav-bar open/close functions
    $("#open-nav").on("click", function() {
        $("#nav-bar").css("width","250px");
    });
    $("#close-nav").on("click", function() {
        $("#nav-bar").css("width","0px");
    });

    // Nav-bar navigation functions
    $("#top-link").on("click", function() {
        $('html, body').animate({
        scrollTop: $("#main-container").offset().top
        }, 800);
    });
    $("#work-link").on("click", function() {
        $('html, body').animate({
        scrollTop: $("#work-container").offset().top
        }, 800);
    });
    $("#skills-link").on("click", function() {
        $('html, body').animate({
        scrollTop: $("#skills-container").offset().top
        }, 800);
    });
    $("#about-link").on("click", function() {
        $('html, body').animate({
        scrollTop: $("#about-container").offset().top
        }, 800);
    });
    $("#contact-link").on("click", function() {
        $('html, body').animate({
        scrollTop: $("#contact-container").offset().top
        }, 800);
    });

    //Page navigation
    $("#next-main-wrapper").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#work-container").offset().top
        }, 800);
    });
    $("#next-work-wrapper").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#skills-container").offset().top
        }, 800);
    });
    $("#next-skills-wrapper").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#about-container").offset().top
        }, 800);
    });
    $("#next-about-wrapper").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#contact-container").offset().top
        }, 800);
    });
    $("#next-contact-wrapper").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#main-container").offset().top
        }, 1600);
    });

    //Move title to header after 1st viewport
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
          $("#headerTitle").fadeIn();
        } else {
          $("#headerTitle").fadeOut();
        }
      });

});