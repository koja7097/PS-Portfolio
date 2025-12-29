/* // Typed.js
    var typed = new Typed('#typed', {
      strings: ["Front-End Developer", "UI/UX Designer", "React Enthusiast", "TailwindCSS Expert"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });

    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    // Particles.js config
    tsParticles.load("particles-js", {
      background: { color: { value: "#0f0f0f" } },
      fpsLimit: 60,
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.3, direction: "none", outModes: { default: "out" } }
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
      },
      detectRetina: true
    }); */

    function openModal(title,img,desc){
  document.getElementById('projectModal').classList.remove('hidden');
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalImage').src = img;
  document.getElementById('modalDesc').innerText = desc;
}
function closeModal(){
  document.getElementById('projectModal').classList.add('hidden');
}

