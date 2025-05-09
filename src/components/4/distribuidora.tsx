import React from "react";

type EstadoFaturamento = {
  estado: string;
  faturamento: number;
};

const FaturamentoEstados: React.FC = () => {
  const faturamentoPorEstado: EstadoFaturamento[] = [
    { estado: "SP", faturamento: 67836.43 },
    { estado: "RJ", faturamento: 36678.66 },
    { estado: "MG", faturamento: 29229.88 },
    { estado: "ES", faturamento: 27165.48 },
    { estado: "Outros", faturamento: 19849.53 },
  ];

  const calcularFaturamentoTotal = (): number => {
    return faturamentoPorEstado.reduce(
      (acc, estado) => acc + estado.faturamento,
      0
    );
  };

  const calcularPercentual = (faturamento: number, total: number): number => {
    return (faturamento / total) * 100;
  };

  const faturamentoTotal = calcularFaturamentoTotal();

  return (
    <div className="container">
      <h1>Percentual de Representação por Estado</h1>
      <div className="resultados">
        {faturamentoPorEstado.map((estado) => {
          const percentual = calcularPercentual(
            estado.faturamento,
            faturamentoTotal
          );
          return (
            <p key={estado.estado} className="percentual">
              {estado.estado}: {percentual.toFixed(2)}%
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FaturamentoEstados;
