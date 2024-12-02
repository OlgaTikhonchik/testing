document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.sidebar__links-button'); 
    const list = document.querySelector('.sidebar__links-list'); 
  
   
    button.addEventListener('click', function () {
      const isActive = list.classList.contains('active');
     list.classList.toggle('active', !isActive);
      button.classList.toggle('active', !isActive);
    });
  });

  // -----------sidebar-content

  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.sidebar__links-content'); 
    const list = document.querySelector('.sidebar__content-list'); 
  
   
    button.addEventListener('click', function () {
      const isActive = list.classList.contains('active');
     list.classList.toggle('active', !isActive);
      button.classList.toggle('active', !isActive);
    });
  });