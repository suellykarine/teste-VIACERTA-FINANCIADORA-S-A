import React, { useState } from "react";
import "./style.css";

const InverterString: React.FC = () => {
  const [entrada, setEntrada] = useState("");
  const [resultado, setResultado] = useState("");

  const inverterString = (str: string): string => {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    return strInvertida;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultadoInverso = inverterString(entrada);
    setResultado(resultadoInverso);
  };

  return (
    <div className="container">
      <h1>Inverter String</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          placeholder="Digite uma string"
        />
        <button type="submit">Inverter</button>
      </form>
      {resultado && (
        <p>
          Resultado da inversão: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );
};

export default InverterString;
