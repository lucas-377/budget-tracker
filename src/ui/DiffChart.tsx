import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import * as S from '../../styles/shared';

export default function DiffChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const data = {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
      ],
      datasets: [
        {
          label: 'Receitas',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Despesas',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--red-500'),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <div className="col-12">
          <S.Card>
            <Chart type="bar" data={chartData} options={chartOptions} />
          </S.Card>
        </div>
      </div>
    </div>
  );
}
