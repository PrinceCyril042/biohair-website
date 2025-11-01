// script.js — menu toggle + product quick view stub

// Menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

// Quick view buttons (placeholder)
document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-product]');
  if (!btn) return;
  const name = btn.dataset.product;
  alert(`${name} — quick view placeholder. I can replace this with a modal (+ add-to-cart) when you want.`);
});
