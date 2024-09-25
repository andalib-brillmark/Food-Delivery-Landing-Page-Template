$(document).ready(function() {
    $(".navbar-mobile__details").click(function() {
        $(".navbar-mobile__details--address").toggleClass("navbar__details--active");
    });

    $(".banner__d-type button").click(function() {
        $(".banner__d-type button").removeClass("banner__d-type--active");
        $(this).addClass("banner__d-type--active");
    });

    let popularItemSlider = new Splide(".popular-items__slider", {
        type       : 'loop',
        perPage    : 5,
        perMove    : 1,
        pagination : false,
        breakpoints: {
            1090: {
                perPage: 3
            },
            800: {
                perPage: 2
            },
            540: {
                perPage: 1
            }
        }
    }).mount();
});