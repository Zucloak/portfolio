// Smooth scroll + reveal animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Optional: Scroll-to-top button
  const btnTop = document.createElement("button");
  btnTop.innerHTML = "↑";
  btnTop.style.position = "fixed";
  btnTop.style.bottom = "20px";
  btnTop.style.right = "20px";
  btnTop.style.padding = "10px 15px";
  btnTop.style.fontSize = "18px";
  btnTop.style.backgroundColor = "#e3b873";
  btnTop.style.border = "none";
  btnTop.style.borderRadius = "5px";
  btnTop.style.cursor = "pointer";
  btnTop.style.display = "none";
  document.body.appendChild(btnTop);

  window.addEventListener("scroll", () => {
    btnTop.style.display = (window.scrollY > 300) ? "block" : "none";
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});