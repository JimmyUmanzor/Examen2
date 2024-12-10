'use client';
import { getPromedioCategoria } from '@/service/Api';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

export default function PromedioCategoriaComponent() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [] as string[],
        borderColor: [] as string[]

      },
    ],
  });

  useEffect(() => {
    getPromedioCategoria()
      .then((data) => {
        const categorias = data.map((item: any) => item.category)
        const promedios = data.map((item: any) => item.Valor_Promedio)

        setChartData({
          labels: categorias,
          datasets: [
            {
              label: 'Promedio de valor por categoría',
              data: promedios,
              backgroundColor:['rgba(75, 192, 192, 0.2)'],
              borderColor:['rgba(75, 192, 192, 1)']
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Ocurrió un error al obtener los datos:', error)
      });
  }, []);

  return (
    <div>
      {chartData ? (
        <div>
          <h3>Promedio de Valor por Categorías</h3>
          <Line data={chartData}></Line>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
