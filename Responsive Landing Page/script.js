// Navbar Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggleBtn.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});

// Cart Counter
let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartDisplay.textContent = cartCount;
    });
  });
});
