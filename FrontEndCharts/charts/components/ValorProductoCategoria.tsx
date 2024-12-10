'use client';
import { getValorProductoCategoria } from '@/service/Api';
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ValorTotalPorCategoriaDona() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [] as string[],
      },
    ],
  });

  useEffect(() => {
    getValorProductoCategoria()
      .then((data) => {
        const categorias = data.map((item: any) => item.category)
        const valoresTotales = data.map((item: any) => item.Valor_Total)

    

        setChartData({
          labels: categorias,
          datasets: [
            {
              label: 'Valor Total por Categorías',
              data: valoresTotales,
              backgroundColor:['rgb(255, 99, 132)','rgb(230, 193, 132)','rgb(150, 25, 141)' ]
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Ocurrió un error al obtener los datos:', error)
      })
  }, [])

  return (
    <div>
      {chartData.labels.length > 0 ? (
        <div>
          <h3>Valor Total por Categorías</h3>
          <Doughnut data={chartData} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
