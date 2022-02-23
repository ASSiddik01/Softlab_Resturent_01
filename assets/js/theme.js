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

const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 1 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "";
  }
}, 80);