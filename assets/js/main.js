// Active nav highlight
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    const target = a.getAttribute("href");
    if (target === path) a.classList.add("active");
  });
})();

// Simple cart badge support (shared across pages)
(function () {
  const badge = document.querySelector("[data-cart-badge]");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  badge.textContent = String(count);
})();
