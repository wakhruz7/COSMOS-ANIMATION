// ===== YULDUZLAR YARATISH =====
function createStars() {
  const container = document.getElementById("stars");
  const count = 200;

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2.5 + 0.5;
    const x    = Math.random() * 100;
    const y    = Math.random() * 100;
    const dur  = (Math.random() * 3 + 2).toFixed(1) + "s";
    const del  = (Math.random() * 4).toFixed(1) + "s";

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --duration: ${dur};
      animation-delay: ${del};
      opacity: ${Math.random() * 0.5 + 0.2};
    `;

    container.appendChild(star);
  }
}

// ===== SHOOTING STAR (sichqoncha bilan) =====
document.addEventListener("click", function(e) {
  const shoot = document.createElement("div");
  shoot.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 3px;
    height: 80px;
    background: linear-gradient(to bottom, #fff, transparent);
    border-radius: 2px;
    transform: rotate(35deg);
    pointer-events: none;
    z-index: 999;
    animation: shootStar 0.8s ease-out forwards;
  `;

  const style = document.createElement("style");
  style.textContent = `
    @keyframes shootStar {
      0%   { opacity: 1; transform: rotate(35deg) translateY(0); }
      100% { opacity: 0; transform: rotate(35deg) translateY(200px); }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(shoot);

  setTimeout(function() {
    shoot.remove();
  }, 800);
});

// ===== ISHGA TUSHIRISH =====
createStars();
