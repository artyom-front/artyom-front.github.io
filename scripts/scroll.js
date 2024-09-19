let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('.header__menu-link');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');  

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('header__menu-link--active'); 
      });
      document.querySelector(`.header__menu-link[href*=${id}]`).classList.add('header__menu-link--active'); 
    }
  });
};
