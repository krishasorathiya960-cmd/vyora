
// ===================================
// VYORA - WEBSITE INTERACTIONS
// ===================================

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after selecting a link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Card fan animation
const cardFan = document.getElementById("cardFan");

cardFan.addEventListener("click", (event) => {
    if (event.target.closest(".fan-card")) {
        // Let the project link work normally
        return;
    }

    cardFan.classList.toggle("is-open");
});

// Keyboard accessibility
cardFan.setAttribute("tabindex", "0");
cardFan.setAttribute("role", "button");
cardFan.setAttribute("aria-label", "Toggle portfolio card fan");

cardFan.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        cardFan.classList.toggle("is-open");
    }
});

// Current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".skill-card, .case-card, .process-card, .about-highlight"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}
