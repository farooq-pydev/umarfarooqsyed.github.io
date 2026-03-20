// 🌊 BACKGROUND
VANTA.WAVES({
  el: "#bg",
  mouseControls: false,
  touchControls: false,
  color: 0x1e3a8a,
  waveHeight: 10,
  waveSpeed: 0.5
});

// ⌨️ TYPING EFFECT
const text = "Hi, I'm Syed Umar Farooq";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// 👀 SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// 🌙 THEME TOGGLE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// 🐙 GITHUB PROJECTS AUTO LOAD
fetch("https://api.github.com/users/farooq-pydev/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("repos");
    data.slice(0, 5).forEach(repo => {
      const div = document.createElement("div");
      div.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      container.appendChild(div);
    });
  });