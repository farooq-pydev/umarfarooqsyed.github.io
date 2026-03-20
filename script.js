document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("mousemove", e => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
  document.body.style.setProperty('transform', `translate(${e.clientX}px, ${e.clientY}px)`);
});

VANTA.WAVES({
  el: "#bg-animation",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  color: 0x2563eb,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 1
});

