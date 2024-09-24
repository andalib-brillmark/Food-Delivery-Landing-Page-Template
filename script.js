$(document).ready(function() {
    $(".navbar-mobile__details").click(function() {
        $(".navbar-mobile__details--address").toggleClass("navbar__details--active");
    });

    $(".banner__d-type button").click(function() {
        $(".banner__d-type button").removeClass("banner__d-type--active");
        $(this).addClass("banner__d-type--active");
    });
});