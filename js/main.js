document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("show-flower-btn");
  const flowerContainer = document.getElementById("flower-container");

  btn.addEventListener("click", function () {
    btn.style.display = "none";
    flowerContainer.style.display = "block";
    armarFlor();
  });

  function armarFlor() {
    // 1. Tallo
    const tallo = document.createElement("div");
    tallo.className = "tallo";
    flowerContainer.appendChild(tallo);

    // 2. Hojas (izquierda y derecha)
    setTimeout(() => {
      const hojaLeft = document.createElement("div");
      hojaLeft.className = "hoja left";
      hojaLeft.style.setProperty("--rot", "-30deg");
      flowerContainer.appendChild(hojaLeft);

      const hojaRight = document.createElement("div");
      hojaRight.className = "hoja right";
      hojaRight.style.setProperty("--rot", "30deg");
      flowerContainer.appendChild(hojaRight);
    }, 900);

    // 3. Pétalos (con efecto 3D)
    const petalos = 8;
    const delayBase = 0.18;
    setTimeout(() => {
      const radio = 70; // Distancia del centro a cada pétalo
      for (let i = 0; i < petalos; i++) {
        const petalo = document.createElement("div");
        petalo.className = "petalo";
        const angle = ((2 * Math.PI) / petalos) * i;
        const rot = (360 / petalos) * i;
        // Calculamos la posición en círculo
        const x = Math.cos(angle) * radio;
        const y = Math.sin(angle) * radio;
        petalo.style.setProperty("--petal-x", `${x}px`);
        petalo.style.setProperty("--petal-y", `${y}px`);
        // Efecto 3D: alternamos rotateX y rotateY para dar profundidad
        if (i % 2 === 0) {
          petalo.style.setProperty("--rx", `${8 + i * 2}deg`);
          petalo.style.setProperty("--ry", `0deg`);
        } else {
          petalo.style.setProperty("--rx", `0deg`);
          petalo.style.setProperty("--ry", `${-8 - i * 2}deg`);
        }
        petalo.style.setProperty("--rot", `${rot}deg`);
        petalo.style.animationDelay = `${delayBase * i + 1.5}s`;
        flowerContainer.appendChild(petalo);
      }
    }, 1200);

    // 4. Centro de la flor (con latido)
    setTimeout(() => {
      const centro = document.createElement("div");
      centro.className = "centro-flor";
      flowerContainer.appendChild(centro);
    }, 2.2 * 1000);

    // 5. Mensaje de amor (aparece sobre la flor)
    setTimeout(() => {
      const mensaje = document.createElement("div");
      mensaje.className = "mensaje-amor";
      mensaje.innerHTML =
        "Para la mujer más bella, increíble y maravillosa del mundo.<br><strong>(mi Tate, mi gordita)</strong>. <br>Te amo con todo mi corazón 💛";
      flowerContainer.appendChild(mensaje);
    }, 2.5 * 1000);
  }
});
