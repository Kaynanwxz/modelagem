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
      deg += 4;
      box.style.transform = `rotate(${deg + 1}deg)`;
      break;
    case "esquerda":
      deg -= 4;
      box.style.transform = `rotate(${deg - 1}deg)`;
      break;
    default:
      break;
  }
}
function mover(direcao) {
  switch (direcao) {
    case "frente":
      cima -= 4;
      box.style.top = `${cima}px`;

      break;
    case "tras":
      cima += 4;
      box.style.top = `${cima}px`;


      break;
    case "direita":
      left += 4;
      box.style.left = `${left}px`;


      break;
    case "esquerda":
      left -= 4;
      box.style.left = `${left}px`;


      break;
    default:
      break;
  }
  if (x >= (window.innerHeight - 88)) {
    x = 0;
  }else if (y >= (window.innerWidth - 88)) {
    y = 0;
  }else if (x < 0) {
    x = (window.innerHeight - 88);
  }else if (y < 0) {
    y = (window.innerWidth - 88);
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
