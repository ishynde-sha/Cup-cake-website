// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Add cupcake selections into the form
const selected = document.getElementById("selectedItems");
const addButtons = document.querySelectorAll("[data-add]");

function addItem(name){
  const current = (selected.value || "").trim();
  if(!current){
    selected.value = name;
    return;
  }

  // prevent duplicates
  const items = current.split(",").map(s => s.trim()).filter(Boolean);
  if(items.includes(name)) return;
  items.push(name);
  selected.value = items.join(", ");
}

addButtons.forEach(btn => {
  btn.addEventListener("click", () => addItem(btn.dataset.add));
});

// Fake submit (demo)
const form = document.getElementById("orderForm");
const msg = document.getElementById("formMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "✅ Order request saved! We’ll contact you shortly.";
  form.reset();
  selected.value = "";
});