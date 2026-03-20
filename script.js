document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

VANTA.WAVES({
  el: "#vanta-bg",
  color: 0x2563eb, // nebula blue
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 1
});

document.addEventListener("mousemove", e => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
  document.body.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
});

