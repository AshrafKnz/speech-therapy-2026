/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
  document.querySelector(".hero").classList.add("loaded");
});

/* =========================
   SCROLL REVEAL (من تحت لفوق)
========================= */

const revealElements = document.querySelectorAll(
  ".content h2, .content h3, .content p, .content ul, .author-full"
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

revealElements.forEach(el => el.classList.add("reveal"));

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   PARALLAX HERO IMAGE
========================= */

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const heroImg = document.querySelector(".hero img");

  if (heroImg) {
    heroImg.style.transform =
      `translateY(${scrolled * 0.15}px) scale(1.05)`;
  }
});
