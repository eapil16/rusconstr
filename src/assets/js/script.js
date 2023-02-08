'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidd'); 
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidd');
    } 
  });

  jQuery(function($){
    $(".phone").mask("(999) 999 - 99 - 99");
  });

  $(document).on('click','.video-btn',function(e){
    e.preventDefault();
    var video = $(this).closest(".video-block").find(".video")[0];
    if (video.paused) {
      video.play();
      $('.video-block').addClass('active')
    } else {
      video.pause();
      $('.video-block').removeClass('active')
    }
  });


	var swiper1 = new Swiper(".equipment-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".equipment-nxt",
      prevEl: ".equipment-prv",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination: {
      el: ".equipment-pagination",
      type: "fraction",
    },
  });

  var swiperportfolio1 = new Swiper(".portfolio-slider-1", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-1",
      prevEl: ".portfolio-prv-1",
    },
    pagination: {
      el: ".portfolio-pagination-1",
      type: "fraction",
    },
  });

  var swiperportfolio2 = new Swiper(".portfolio-slider-2", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-2",
      prevEl: ".portfolio-prv-2",
    },
    pagination: {
      el: ".portfolio-pagination-2",
      type: "fraction",
    },
  });

  var swiperportfolio3 = new Swiper(".portfolio-slider-3", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-3",
      prevEl: ".portfolio-prv-3",
    },
    pagination: {
      el: ".portfolio-pagination-3",
      type: "fraction",
    },
  });

  var swiperportfolio4 = new Swiper(".portfolio-slider-4", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-4",
      prevEl: ".portfolio-prv-4",
    },
    pagination: {
      el: ".portfolio-pagination-4",
      type: "fraction",
    },
  });

  var swiperportfolio5 = new Swiper(".portfolio-slider-5", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-5",
      prevEl: ".portfolio-prv-5",
    },
    pagination: {
      el: ".portfolio-pagination-5",
      type: "fraction",
    },
  });

  var swiperportfolio6 = new Swiper(".portfolio-slider-6", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-6",
      prevEl: ".portfolio-prv-6",
    },
    pagination: {
      el: ".portfolio-pagination-6",
      type: "fraction",
    },
  });

  var swiperportfolio7 = new Swiper(".portfolio-slider-7", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".portfolio-nxt-7",
      prevEl: ".portfolio-prv-7",
    },
    pagination: {
      el: ".portfolio-pagination-7",
      type: "fraction",
    },
  });

});
