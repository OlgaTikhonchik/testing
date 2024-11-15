document.addEventListener('DOMContentLoaded', function () {
    const description = document.querySelector('.menu-left__description'); 
    const overlay = document.querySelector('.menu-left__overlay'); 
  
   
    description.addEventListener('click', function () {
      const isActive = overlay.classList.contains('active');
      overlay.classList.toggle('active', !isActive);
      description.classList.toggle('active', !isActive);
    });
  });