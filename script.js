const animado = document.getElementById('texto-animado');
const fijo = document.getElementById('texto-fijo');

animado.addEventListener('animationend', () => {
  animado.style.display = 'none'; 
  fijo.style.display = 'block'; 
}); 