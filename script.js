// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// AI Fun Fact Generator
const aiFacts = [
  "AI can analyze medical scans faster than many human doctors.",
  "Self-driving cars use AI to make split-second decisions.",
  "AI is being used to predict climate change patterns.",
  "In agriculture, AI can detect crop diseases early.",
  "AI can translate over 100 languages instantly."
];

const aiFactBtn = document.getElementById("aiFactBtn");
const aiFact = document.getElementById("aiFact");

aiFactBtn.addEventListener("click", () => {
  const randomFact = aiFacts[Math.floor(Math.random() * aiFacts.length)];
  aiFact.textContent = randomFact;
});