const body = document.body;
const lampada = document.querySelector("img");

const controleInterruptor = ({ target }) => {
  const idElementoClicado = target.id;

  if (idElementoClicado === "ligar") ligarLuz();
  if (idElementoClicado === "desligar") desligarLuz();
};

const ligarLuz = () => {
  const luzLigada = `https://img.freepik.com/fotos-premium/lampada-de-luz-amarela-acesa-em-branco_488220-82.jpg`;
  body.setAttribute("class", "ligado");
  lampada.src = luzLigada;
};

const desligarLuz = () => {
  const luzDesLigada = `https://imagens-revista-pro.vivadecora.com.br/uploads/2018/02/lampada-led-esquenta-lampada-incandescente-40w.jpg`;
  body.setAttribute("class", "desligado");
  lampada.src = luzDesLigada;
};

body.addEventListener("click", controleInterruptor);
