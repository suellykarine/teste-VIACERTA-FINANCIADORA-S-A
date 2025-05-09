import React from "react";
import "./style.css";

type FaturamentoDia = {
  dia: number;
  valor: number;
};

const Faturamento: React.FC = () => {
  const faturamentoMensal: FaturamentoDia[] = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 },
  ];

  const calcularMenorValor = (): number =>
    Math.min(
      ...faturamentoMensal
        .filter((item) => item.valor > 0)
        .map((item) => item.valor)
    );
  const calcularMaiorValor = (): number =>
    Math.max(...faturamentoMensal.map((item) => item.valor));
  const calcularMediaMensal = (): number => {
    const soma = faturamentoMensal
      .filter((item) => item.valor > 0)
      .reduce((acc, item) => acc + item.valor, 0);
    const diasComFaturamento = faturamentoMensal.filter(
      (item) => item.valor > 0
    ).length;
    return soma / diasComFaturamento;
  };
  const contarDiasAcimaDaMedia = (media: number): number => {
    return faturamentoMensal.filter((item) => item.valor > media).length;
  };

  const menorValor = calcularMenorValor();
  const maiorValor = calcularMaiorValor();
  const mediaMensal = calcularMediaMensal();
  const diasAcimaDaMedia = contarDiasAcimaDaMedia(mediaMensal);

  return (
    <div className="container">
      <h1>Relatório de Faturamento Mensal</h1>
      <div className="resultados">
        <p className="menor">Menor valor de faturamento: {menorValor}</p>
        <p className="maior">Maior valor de faturamento: {maiorValor}</p>
        <p className="media">Média mensal: {mediaMensal.toFixed(2)}</p>
        <p className="dias-acima">
          Dias com faturamento acima da média: {diasAcimaDaMedia}
        </p>
      </div>
    </div>
  );
};

export default Faturamento;
