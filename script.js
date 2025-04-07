const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
  function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
      seccion.classList.remove('active');
    });
    const seccionActiva = document.getElementById(id);
    if (seccionActiva) seccionActiva.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('quienes'); // Mostrar "quienes" al cargar
  
    // Mostrar modal a los 5 segundos
    setTimeout(() => {
      mostrarModal();
    }, 5000);
  });
  
