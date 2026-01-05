// Shop items based on jmtdynamic.com (static demo cart)
const products = [
  {
    id: "wrx-passthrough-printed",
    name: "2015+ Subaru WRX Accessory Button Cable Passthrough",
    desc: "Replacement for the OEM accessory button insert to route a cable while keeping a factory look.",
    price: 10
  },
  {
    id: "wrx-passthrough-stl",
    name: "2015+ Subaru WRX Accessory Button Cable Passthrough STL File",
    desc: "Digital STL so you can print it yourself (fits 2015+ WRX; confirmed on 2020).",
    price: 5
  },
  {
    id: "brass-ball-shiftknob",
    name: "Brass Ball Heavy Shift Knob",
    desc: "Weighted brass shift knob (~600g). Multiple finishes; verify threading before purchase.",
    price: 75
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  const badge = document.querySelector("[data-cart-badge]");
  if (badge) {
    const count = cart.reduce((s, i) => s + (i.qty || 1), 0);
    badge.textContent = String(count);
  }
}
function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ id: productId, qty: 1 });

  setCart(cart);
  toast("Added to cart");
}

function money(n){ return `$${n.toFixed(2)}`; }

function renderProducts() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="product">
      <div class="thumb" aria-hidden="true"></div>
      <div class="pill" style="margin-bottom:10px;">Product</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="priceRow">
        <b>${money(p.price)}</b>
        <button class="btn small" data-add="${p.id}">Add</button>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(btn.getAttribute("data-add")));
  });
}

function renderCart() {
  const wrap = document.querySelector("[data-cart]");
  const totalEl = document.querySelector("[data-cart-total]");
  if (!wrap || !totalEl) return;

  const cart = getCart();
  if (cart.length === 0) {
    wrap.innerHTML = `<p class="muted">Your cart is empty. Add a product to get started.</p>`;
    totalEl.textContent = money(0);
    return;
  }

  let total = 0;
  wrap.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    const line = (p.price * item.qty);
    total += line;

    return `
      <div class="cartLine">
        <div>
          <b>${p.name}</b><br/>
          <small>${money(p.price)} × ${item.qty}</small>
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <b>${money(line)}</b>
          <button class="btn small ghost" data-dec="${item.id}">−</button>
          <button class="btn small ghost" data-inc="${item.id}">+</button>
          <button class="btn small" data-rm="${item.id}">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  totalEl.textContent = money(total);

  wrap.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => inc(b.dataset.inc)));
  wrap.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => dec(b.dataset.dec)));
  wrap.querySelectorAll("[data-rm]").forEach(b => b.addEventListener("click", () => rm(b.dataset.rm)));
}

function inc(id){
  const cart = getCart();
  const it = cart.find(i => i.id === id);
  if (it) it.qty += 1;
  setCart(cart);
  renderCart();
}
function dec(id){
  const cart = getCart();
  const it = cart.find(i => i.id === id);
  if (!it) return;
  it.qty -= 1;
  if (it.qty <= 0) return rm(id);
  setCart(cart);
  renderCart();
}
function rm(id){
  const cart = getCart().filter(i => i.id !== id);
  setCart(cart);
  renderCart();
}

function toast(msg){
  const el = document.createElement("div");
  el.textContent = msg;
  el.style.position = "fixed";
  el.style.left = "50%";
  el.style.bottom = "20px";
  el.style.transform = "translateX(-50%)";
  el.style.padding = "12px 14px";
  el.style.borderRadius = "14px";
  el.style.border = "1px solid rgba(255,255,255,.16)";
  el.style.background = "rgba(11,15,23,.70)";
  el.style.backdropFilter = "blur(10px)";
  el.style.color = "rgba(255,255,255,.9)";
  el.style.zIndex = 9999;
  document.body.appendChild(el);
  setTimeout(()=> el.remove(), 1100);
}

renderProducts();
renderCart();
