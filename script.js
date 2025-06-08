

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const secciones = document.querySelector('.secciones-horizontales');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            secciones.classList.add('animar');
          }
        });
      }, {
        threshold: 0.3
      });

      observer.observe(secciones);
    });
  </script>