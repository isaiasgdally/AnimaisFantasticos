export default function animacaoNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");

  function animaNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100) || 1;

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;

      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animaNumero(entry.target); 
        observer.unobserve(entry.target); 
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, 
  });

  numeros.forEach((numero) => {
    observer.observe(numero);
  });
}

