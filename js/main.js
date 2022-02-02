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
}