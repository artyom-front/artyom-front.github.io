const swiper = new Swiper('.swiper', { 
  loop: true,
  watchOverflow: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    
  },
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 

  breakpoints: {
    480: {
      slidesPerView: 1.5
    },
    767: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 3
    }
  },

  a11y: {
    enabled: true,

    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд',  
    
  }
});

let sliderBlock = document.querySelector('.swiper');

sliderBlock.addEventListener("mouseenter", function(e){
   swiper.autoplay.stop()
})

sliderBlock.addEventListener("mouseleave", function(e){
   swiper.autoplay.start()
})