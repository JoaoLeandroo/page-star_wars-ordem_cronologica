const buttons = document.querySelectorAll("header button")
const carrossel = document.querySelectorAll("section")
const bttReturn = document.querySelector(".return")


buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    carrossel.item(index).scrollIntoView({ behavior: "smooth" })

  })

})

bttReturn.addEventListener("click", mostrarBotaoVoltarAoTopo)

window.onscroll = function() { mostrarBotaoVoltarAoTopo() };

function mostrarBotaoVoltarAoTopo() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bttReturn.style.display = "block";
  } else {
    bttReturn.style.display = "none";
  }
}

function voltarAoTopo() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


