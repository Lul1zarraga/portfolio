document.addEventListener("DOMContentLoaded", function () {
  const textoAnimado = document.getElementById("texto-animado");
  const textoFijo = document.getElementById("texto-fijo");

  textoAnimado.addEventListener("animationend", function () {
    textoAnimado.style.display = "none";
    textoFijo.style.display = "inline-block";
  });




  const video = document.getElementById('videoIntro');
  const contenido = document.getElementById('contenido');

  video.addEventListener('ended', () => {
    video.style.display = 'none';  
    contenido.style.display = 'block'; 
  });
});

const header = document.querySelector("header");
const alturaHeader = header.offsetHeight;

window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < alturaHeader && rect.bottom > 0) {
      el.classList.add("aclarar");
    } else {
      el.classList.remove("aclarar");
    }
  });
});

