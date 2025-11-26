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
