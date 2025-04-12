function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.classList.remove('active');
  });
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
      seccionActiva.classList.add('active');
      // Agregar la entrada al historial
      history.pushState({ section: id }, '', `#${id}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccion('quienes'); // Mostrar "quienes" al cargar

  // Mostrar modal a los 5 segundos
  setTimeout(() => {
      mostrarModal();
  }, 5000);
});

// Manejar el evento popstate
window.addEventListener('popstate', (event) => {
  if (event.state) {
      mostrarSeccion(event.state.section);
  }
});
