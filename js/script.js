$(function () {
  "use strict";

  // banner part
  $('.banner-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow:'<i class="fa-solid fa-angle-right ne-arrow"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prv-arrow"></i>',
  });

  // mix it up
  var mixer = mixitup('.filter-container');
   // venobox
   new VenoBox({
    selector: '.venobox',
});
// counter up
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// scroll smooth
$("a").on('click', function (event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html,body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});


// Back to top Button
$('.back-to-top').on('click', function (){
$('html,body').animate({
  scrollTop:0,
},1000);
});
$(window).on('scroll', function () {
  var scrolling2 = $(this).scrollTop();

  if (scrolling2 > 500) {
    $('.back-to-top').fadeIn();

  } else {
    $('.back-to-top').fadeOut()
  }

});

// scrollily
$.scrollify({
  section : ".rafi",
  setHeights: false,
  overflowScroll: false,
  updateHash: false,
  scrollbars: false,
  touchScroll:false,
  scrollSpeed: 500,

});

// pre-loader
$(window).on('load',function(){
$('.pre-loader').delay(1000).fadeOut();
});


// sticky menu
var navOff = $('.menu-top').offset().top;

$(window).on('scroll', function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > navOff) {
    $('.menu-top').addClass('menu-fix');
  } else {
    $('.menu-top').removeClass('menu-fix');
  }
});
  
});

// javascript code
// swipper slider
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    
    });
    // javascrip code
    function openMenu(){
      document.getElementById('navber').style.height="100%";
    }
    function closeMenu(){
      document.getElementById('navber').style.height="0%"
    }
  