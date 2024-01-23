$(function () {
  "use strict";

  // $(window).on("load", function () {
  //   var preloader = $('#preloader');

  //   // Hide preloader and fade in content after a delay
  //   setTimeout(function () {
  //     preloader.fadeOut(500)
  //   }, 0); // Change the delay value as per your requirement

  // });

  $(".top_header_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    draggable:false,
    fade:true,
    arrows:false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  $(".discover_collection_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    fade:false,
    arrows:false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  $(".sales_products_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    fade:false,
    arrows:false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });



  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // // Animation on scroll
  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     AOS.init({
  //       once: false,
  //     });
  //   }, 0);
  // });

  // // counter up js
  // $('.counter').counterUp({
  //   delay: 50,
  //   time: 2000
  // });


  // let elt = document.querySelectorAll('.why--choose--text--slider > *')

  // anime({
  //   targets: elt,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // let elt1 = document.querySelectorAll('.pricing--plan--text--slider > *')

  // anime({
  //   targets: elt1,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });


  // mobile menu js
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


  // // Get all the choose--list elements
  // const chooseListItems = document.querySelectorAll('.choose--list');

  // // Add event listeners for hover
  // chooseListItems.forEach(item => {
  //   item.addEventListener('mouseenter', () => {
  //     // Remove active class from all choose--list elements
  //     chooseListItems.forEach(listItem => {
  //       listItem.classList.remove('active--list');
  //     });
  //     // Add active class to the hovered element
  //     item.classList.add('active--list');
  //   });
  // });


});