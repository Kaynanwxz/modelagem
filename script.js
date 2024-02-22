let box = document.getElementById("box");
let deg = 0;
let cima = 500;
let left = 800;
let aleatorio = false;
let formato = 1;

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      mover("frente");
      break;
    case "d":
      mover("direita");
      break;
    case "s":
      mover("tras");
      break;
    case "a":
      mover("esquerda");
      break;
    case " ":
      color();
      break;
    case "Control":
      switch (formato) {
        case 0:
          forma("quadrado");
          formato = 1;
          break;
        case 1:
          forma("circulo");
          formato = 0;
          break;

        default:
          break;
      }
      break;
    case "ArrowRight":
        girar('direita')
      break;
    case "ArrowLeft":
        girar('esquerda')
      break;

    default:
      break;
  }
  console.log(event.key);
});

function forma(formato) {
  switch (formato) {
    case "quadrado":
      box.style.borderRadius = 0;
      break;
    case "circulo":
      box.style.borderRadius = "50%";
      break;
    default:
      break;
  }
}
function girar(direcao) {
  switch (direcao) {
    case "direita":
      box.style.transform = `rotate(${deg + 1}deg)`;
      deg += 4;
      break;
    case "esquerda":
      box.style.transform = `rotate(${deg - 1}deg)`;
      deg -= 4;
      break;
    default:
      break;
  }
}
function mover(direcao) {
  switch (direcao) {
    case "frente":
      box.style.top = `${cima - 1}px`;
      cima -= 4;
      break;
    case "tras":
      box.style.top = `${cima + 1}px`;
      cima += 4;

      break;
    case "direita":
      box.style.left = `${left + 1}px`;
      left += 4;

      break;
    case "esquerda":
      box.style.left = `${left - 1}px`;
      left -= 4;

      break;
    default:
      break;
  }
}

setInterval(() => {
  if (aleatorio == false) {
    box.style.backgroundColor = document.getElementById("color").value;
  }
}, 10);

function cor() {
  aleatorio = false;
}

function color() {
  let n1 = Math.floor(Math.random() * 255) + 1;
  let n2 = Math.floor(Math.random() * 255) + 1;
  let n3 = Math.floor(Math.random() * 255) + 1;
  box.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
  aleatorio = true;
}
