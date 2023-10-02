import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  
  const Adicionar = () => {
    if (contador < 10) setContador(contador + 1);
  };

  const Diminuir = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <main>
      <section>
        <h1 className="text-shadow">Contador</h1>
        <h2 className="text-shadow">{ contador }</h2>
        <div>
          <button className="visualAdd" onClick={ Adicionar }>Adicionar</button>
          <button className="visualRemove" onClick={ Diminuir }>Diminuir</button>
        </div>
      </section>
    </main>
  );
}
