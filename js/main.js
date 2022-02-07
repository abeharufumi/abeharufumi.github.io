'use strict';

{
  const MenuIcon = document.getElementById('MenuIcon');
  const overlay = document.querySelector('.overlay');
  const closeIcon = document.getElementById('closeIcon');
  
  MenuIcon.addEventListener('click', () => {
    overlay.classList.add('show');
    MenuIcon.classList.add('hide');

  });

  closeIcon.addEventListener('click', () => {
    overlay.classList.remove('show');
    MenuIcon.classList.remove('hide');

  });

  // IntersectionObserver API
  const scrollObserver = new IntersectionObserver(scrollCallback);
  const apperObserver = new IntersectionObserver(apperCallback);
  scrollObserver.observe(document.getElementById('target'));
  apperObserver.observe(document.getElementById('target'));
  const header = document.querySelector('header');
  const up = document.getElementById('up')

  function scrollCallback(empties) {
    empties.forEach(empty => {
      if (!empty.isIntersecting) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    });
  }

  function apperCallback(empties) {
    empties.forEach(empty => {
      if (!empty.isIntersecting) {
        up.classList.add('apper');
      } else {
        up.classList.remove('apper');
      }
    });
  }

  up.addEventListener('click', tuduri => {
    tuduri.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

}