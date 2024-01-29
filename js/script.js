$(function () {
  "use strict";

  // $(window).on("load", function () {
  //   var preloader = $('#preloader');

  //   // Hide preloader and fade in content after a delay
  //   setTimeout(function () {
  //     preloader.fadeOut(500)
  //   }, 0); // Change the delay value as per your requirement

  // });

  // gallery popup js
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Fixed menu js start
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");

    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // header search js
  $("button.search").on("click", function () {
    $(".search_field").addClass("active_search_field")
  })
  $("button.close_search_field").on("click", function () {
    $(".search_field").removeClass("active_search_field")
  })

  $(".top_header_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    // draggable: false,
    fade: true,
    arrows: false,
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
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".sales_products_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".category_product_item_slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    // responsive: [{
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    // ]
  });

  // category prd left sidebar js
  $(".filter_prd_btn").on("click",function(){
    $(".category_left_sidebar").addClass("show_category_left_sidebar")
  })
  $(".filter_prd_btn_close").on("click",function(){
    $(".category_left_sidebar").removeClass("show_category_left_sidebar")
  })

  // products item add to cart js
  $(".clickable_btn").on("click", function () {
    // Find the closest parent with class 'category_prd_item_label'
    var parentCategoryItem = $(this).closest('.category_prd_item_label');
  
    // Find the '.add_to_cart_option' within the same parent
    var addToCartOption = parentCategoryItem.find('.add_to_cart_option .main_info');
  
    // Toggle the class only for the specific '.add_to_cart_option'
    addToCartOption.toggleClass("show_add_to_cart_option");
  
    // Toggle the icon between 'fa-shopping-bag' and 'fa-times'
    var icon = $(this).find('i');
    icon.toggleClass("fa-shopping-bag fa-times");
  });
  

  // product details image slider
  $('.product-image-slider').slick({
    dots: true,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    customPaging: function (slick, index) {
      var targetImage = slick.$slides.eq(index).find('img').attr('src');
      return '<img src=" ' + targetImage + ' "/>';
    }
  });

  // quantity js
  $(".cart-minus").on('click', function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".cart-plus").on('click', function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
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


  // Mobile menu js start

  $(".mobile-topbar .bars i").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $('.sub-mobile-menu ul').hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

});