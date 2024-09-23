console.log("it's working 🃏");

const card = document.querySelector(".card");

if (card) {
  let boundingRef = null;

  card.addEventListener("mouseleave", () => {
    boundingRef = null;
  })
  
  card.addEventListener("mouseenter", (event) => {
    boundingRef = event.currentTarget.getBoundingClientRect();
  });
  
  card.addEventListener("mousemove", (event) => {
    if (!boundingRef) return;
    // console.log(event.currentTarget.getBoundingClientRect());
    const x = event.clientX - boundingRef.left;
    const y = event.clientY - boundingRef.top;
    const xPercentage = x / boundingRef.width
    const yPercentage = y / boundingRef.height
    const xRotation =(xPercentage - 0.5) * 20
    const yRotation =(0.5 - yPercentage) * 20

    event.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`)
    event.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`)

    event.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`)

    event.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`)
  });
}

