let lampada = document.getElementById("lampada");
var isLightOn = false
let lightOnCount = 0
let interval = null;

function ligar() {
  lightOnCount += 1;
  isLightOn = true
  lampada.setAttribute("src", "imgs/luzLigada.gif")
  //lampada.style.display = "block";
}

function desligar() {
  isLightOn = false;
  lampada.setAttribute("src", "imgs/luzDesligada.gif")
  //lampada.style.display = "none";
}

function sumir() {
  lampada.hidden = true;
  clearInterval(interval)
}

function aparecer() {
  lampada.hidden = false;
}

function piscar() {
  if (lightOnCount > 2) {
    queimarLampada()
    return
  }

  if (isLightOn) {
    desligar();
  } else {
    ligar()
  }

}

function magica() {
  interval = setInterval(piscar, 500)
}

function queimarLampada() {
  lampada.setAttribute("src", "imgs/luzQueimada.png")
  clearInterval(interval)
  lightOnCount = 0
  isLightOn = false
  adicionarTimeOut()
}

function adicionarTimeOut() {
  setTimeout(() => {
    lampada.setAttribute("src", "imgs/genius.webp")
  }, 3000);
}