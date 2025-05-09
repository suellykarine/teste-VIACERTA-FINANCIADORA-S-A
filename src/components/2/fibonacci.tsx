import React, { useState } from "react";
import "./style.css";

const Fibonacci: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [resultado, setResultado] = useState<string>("");

  const pertenceFibonacci = (num: number): boolean => {
    let a = 0,
      b = 1;

    if (num === 0 || num === 1) {
      return true;
    }

    while (b < num) {
      const temp = a;
      a = b;
      b = temp + b;
    }

    return b === num;
  };

  const handleSubmit = (): void => {
    const pertence = pertenceFibonacci(numero);
    if (pertence) {
      setResultado(`${numero} pertence à sequência de Fibonacci!`);
    } else {
      setResultado(`${numero} NÃO pertence à sequência de Fibonacci.`);
    }
  };

  return (
    <div className="container">
      <h1>Verificar Fibonacci</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Informe um número"
      />
      <button onClick={handleSubmit}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
};

export default Fibonacci;
