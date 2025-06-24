document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      
      // Toggle class noscroll pada body
      if (nav.classList.contains('active')) {
        body.classList.add('noscroll');
      } else {
        body.classList.remove('noscroll');
      }
    });
    });