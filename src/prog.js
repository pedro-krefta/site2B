document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 1 },
      move: { speed: 2 },
      line_linked: { enable: false },
      color: { value: "#ffffff" }
    }
  });

  AOS.init({
    duration: 1000,
    once: true,
  });
});

function toggleCard(cardId) {
  const card = document.getElementById(cardId);
  const icon = document.getElementById('icon' + cardId.slice(-1));
  
  card.classList.toggle('max-h-0');
  card.classList.toggle('max-h-96');
  icon.classList.toggle('rotate-180');
}