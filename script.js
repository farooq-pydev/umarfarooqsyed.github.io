// Background
VANTA.WAVES({
  el: "#bg",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  color: 0x1e3a8a,
  waveHeight: 10,
  waveSpeed: 0.5
});

// Typing
const text = "Hi, I'm Syed Umar Farooq";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}
type();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};