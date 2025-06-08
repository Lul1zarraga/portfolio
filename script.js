const seccion = document.querySelector(".secciones-horizontales");

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting) {
      seccion.classList.add("animar");
    }
  },
  { threshold: 0.3 }
);

observer.observe(seccion);


document.querySelector('a[href="#perfil-profesional"]').addEventListener("click", () => {
  setTimeout(() => {
    seccion.classList.add("animar");
  }, 500); 
});
