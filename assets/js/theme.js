$(document).ready(function () {

    $(".owl-carousel").owlCarousel({

        autoPlay: 3000,
        items: 3.2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        loop: true,
        responsive: {
            600: {
                items: 2
            }
        }

    });

});