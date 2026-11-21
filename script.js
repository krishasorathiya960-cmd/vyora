
// LOADER
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 800);
});

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuToggle.textContent =
    nav.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// CARD FAN OUT EFFECT
const fanStage = document.getElementById("fanStage");

fanStage.addEventListener("click", (event) => {
  if (window.matchMedia("(hover: none)").matches) {
    fanStage.classList.toggle("fan-active");
  }
});

// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(
  ".section, .statement, .service-list > div"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
