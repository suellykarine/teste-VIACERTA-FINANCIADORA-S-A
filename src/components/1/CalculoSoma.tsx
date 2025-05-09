import React from "react";
import "./style.css";

const CalculoSoma: React.FC = () => {
  const calcularSoma = () => {
    const indice = 13;
    let soma = 0,
      k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }

    return soma;
  };

  return (
    <div className="container">
      <h1 className="title">Resultado do Cálculo:</h1>
      <p className="result">A soma é: {calcularSoma()}</p>
    </div>
  );
};

export default CalculoSoma;
