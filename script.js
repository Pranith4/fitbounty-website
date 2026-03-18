// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("vis");
  });
});

document.querySelectorAll(".fu").forEach(el => observer.observe(el));


// Parallax glow
window.addEventListener("scroll", () => {
  const glow = document.querySelector(".hero-glow");
  glow.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});


// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let target = +counter.innerText;
  let count = 0;

  const update = () => {
    count += target / 50;
    if (count < target) {
      counter.innerText = count.toFixed(1);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});


// Magnetic button
document.querySelectorAll(".hero-btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
