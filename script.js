document.addEventListener("DOMContentLoaded", function () {
  const textoAnimado = document.getElementById("texto-animado");
  const textoFijo = document.getElementById("texto-fijo");

  textoAnimado.addEventListener("animationend", function () {
    textoAnimado.style.display = "none";
    textoFijo.style.display = "block";
  });

  const video = document.getElementById('videoIntro');
  const contenido = document.getElementById('contenido');

  video.addEventListener('ended', () => {
    video.style.display = 'none';  
    contenido.style.display = 'block'; 
  });
});
