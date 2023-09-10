const body = document.body;
const lampada = document.querySelector("img");

const ligado = {
  imagemLampada: `https://img.freepik.com/fotos-premium/lampada-de-luz-amarela-acesa-em-branco_488220-82.jpg`,
  nomeClasse: "ligado",
};

const desligado = {
  imagemLampada: `https://imagens-revista-pro.vivadecora.com.br/uploads/2018/02/lampada-led-esquenta-lampada-incandescente-40w.jpg`,
  nomeClasse: "desligado",
};

const controleInterruptor = ({ target }) => {
  const idElementoClicado = target.id;

  if (idElementoClicado === "ligar") alterarStatusLampada(ligado);
  if (idElementoClicado === "desligar") alterarStatusLampada(desligado);
};

const alterarStatusLampada = (obj) => {
  const { imagemLampada, nomeClasse } = obj;

  lampada.src = imagemLampada;
  body.setAttribute("class", nomeClasse);
};

body.addEventListener("click", controleInterruptor);

//decoupling insertion of the changed elements into the DOM