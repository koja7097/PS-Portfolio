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

function openModal(
  title,
  image,
  description,
  techStack,
  highlights,
  liveUrl,
  githubUrl
) {
  // Show modal
  const modal = document.getElementById("projectModal");
  modal.classList.remove("hidden");

  // Fill content
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalImage").src = image;
  document.getElementById("modalDesc").textContent = description;

  // Tech stack
  const techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = "";
  techStack.forEach(tech => {
    const span = document.createElement("span");
    span.className = "px-3 py-1 text-sm bg-orange-500/20 text-orange-400 rounded-full";
    span.textContent = tech;
    techContainer.appendChild(span);
  });

  // Highlights
  const highlightsList = document.getElementById("modalHighlights");
  highlightsList.innerHTML = "";
  highlights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    highlightsList.appendChild(li);
  });

  
  // set links properly
  const liveLink = document.getElementById("liveLink");
  const githubLink = document.getElementById("githubLink");

  liveLink.href = liveUrl;
  githubLink.href = githubUrl;

  liveLink.style.display = liveUrl ? "inline-block" : "none";
  githubLink.style.display = githubUrl ? "inline-block" : "none";
}

function closeModal() {
  document.getElementById("projectModal").classList.add("hidden");
}

window.addEventListener("scroll", () => {
  const scrolled = (window.scrollY /
    (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  // Close menu when link is clicked
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    });
  });
});

