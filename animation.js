const WORDS = ["Pasion", "Eficiencia", "Productividad", "Amor"];

let count = 0;

const PALABRA = document.querySelector("#palabra");

const cambio = () => {
  if (!document.startViewTransition) {
    PALABRA.innerHTML = WORDS[(count += 1) % WORDS.length];
  }
  document.startViewTransition(() => {
    PALABRA.innerHTML = WORDS[(count += 1) % WORDS.length];
  });
};

setInterval(cambio, 2300);
