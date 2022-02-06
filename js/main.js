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
  const scrollOvserver = new IntersectionObserver(scrollCallback);
  scrollOvserver.observe(document.getElementById('target'));

  function scrollCallback(empties) {
    empties.forEach(empty => {
      if (!empty.isIntersecting) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll')
      }
    });
  };

  const header = document.querySelector('header');
}