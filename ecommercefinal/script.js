
/*======== swiper wrapper =========*/
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centerSlides: true,
  autoplay: {
    delay:2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*======== navbar toggle =========*/
let navBar = document.querySelector('.navBar');

document.querySelector('#menuBar').onclick = () => {
  navBar.classList.add('active');
}

document.querySelector('#close').onclick = () => {
  navBar.classList.remove('active');
}
