function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.classList.remove('active');
  });

  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
      seccionActiva.classList.add('active');

      // Solo agregamos al historial si el hash actual es distinto
      if (location.hash.replace('#', '') !== id) {
          history.pushState({ section: id }, '', `#${id}`);
      }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // Mostrar la sección correspondiente al hash, o "quienes" si no hay hash
  const hash = location.hash.replace('#', '') || 'quienes';
  mostrarSeccion(hash);

  // Mostrar modal a los 5 segundos
  setTimeout(() => {
      mostrarModal();
  }, 5000);
});

// Evento popstate (cuando el usuario usa los botones del navegador)
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.section) {
      mostrarSeccion(event.state.section);
  }
});

// Evento hashchange (cuando el usuario cambia el hash manualmente)
window.addEventListener('hashchange', () => {
  const nuevaSeccion = location.hash.replace('#', '');
  if (nuevaSeccion) {
      mostrarSeccion(nuevaSeccion);
  }
});
