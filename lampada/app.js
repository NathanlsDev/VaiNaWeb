const body = document.body;
const lampada = document.querySelector("img");
const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");

const ligarLuz = () => {
  const luzLigada = `https://img.freepik.com/fotos-premium/lampada-de-luz-amarela-acesa-em-branco_488220-82.jpg`;

  body.setAttribute("class", "ligado");
  lampada.setAttribute("src", luzLigada);
};

const desligarLuz = () => {
  const luzDesLigada = `https://imagens-revista-pro.vivadecora.com.br/uploads/2018/02/lampada-led-esquenta-lampada-incandescente-40w.jpg`;

  body.setAttribute("class", "desligado");
  lampada.setAttribute("src", luzDesLigada);
};

ligar.addEventListener("click", ligarLuz);
desligar.addEventListener("click", desligarLuz);
