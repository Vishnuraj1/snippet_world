var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });








  $(".animation-example").on("mouseover", function() {
    var anim = $(this).attr("data-anim");
    $(this).removeClass(anim);
    $(this).addClass(anim);
  
    $(this).one(
      "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
      function(e) {
        // code to execute after transition ends
        $(this).removeClass(anim);
      }
    );
  });