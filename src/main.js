console.log("it's working 🃏");

const card = document.querySelector(".card");

if (card) {
  // armazena as posições e dimensões do elemento
  let boundingRef = null;

  // remove o boundingRef quando o mouse sair do elemento
  card.addEventListener("mouseleave", () => {
    boundingRef = null;
  });

  // armazenando o boundingRef quando o mouse entrar no elemento,
  // assim ele não é recalculado a cada movimento do mouse
  card.addEventListener("mouseenter", (event) => {
    boundingRef = event.currentTarget.getBoundingClientRect();
  });

  card.addEventListener("mousemove", (event) => {
    if (!boundingRef) return;

    // event.clientX: A posição horizontal do cursor do mouse em relação à janela de visualização.

    // event.clientY: A posição vertical do cursor do mouse em relação à janela de visualização.

    // boundingRef.left: A posição horizontal do lado esquerdo do elemento .card em relação à janela de visualização.

    // boundingRef.top: A posição vertical do topo do elemento .card em relação à janela de visualização.

    const x = event.clientX - boundingRef.left;
    const y = event.clientY - boundingRef.top;

    // x e y são usados como width/height entre a posição do mouse e o elemento .card
    // a partir disso, é calculado a porcentagem desse width/height  em relação ao .card

    const xPercentage = x / boundingRef.width;
    const yPercentage = y / boundingRef.height;

    // xRotation e yRotation são calculados a partir da porcentagem de x e y
    // o 0.5 é para que ao passar o mouse no centro do elemento, a rotação seja 0
    // * 20 garante que a rotação seja um valor entre -10 e 10
    // exemplo: xPercentage = 0, xRotation = (0 - 0.5) * 20 = -10
    // exemplo: xPercentage = 0.5, xRotation = (0.5 - 0.5) * 20 = 0
    // exemplo: xPercentage = 1, xRotation = (1 - 0.5) * 20 = 10

    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    // cria variáveis do css para usar no transform e no background: radial-gradient

    event.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
    event.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
    event.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
    event.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
  });
}
