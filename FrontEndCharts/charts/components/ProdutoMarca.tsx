'use client';
import { getProductoMarca } from '@/service/Api';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductoMarca() {
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
    getProductoMarca()
      .then((data) => {
        const marcas = data.map((item: any) => item.brand)
        const cantidades = data.map((item: any) => item.Cantidad)

        setChartData({
          labels: marcas,
          datasets: [
            {
              label: 'Cantidad de Productos por Marcas',
              data: cantidades,
              backgroundColor:['rgb(255, 99, 132)','rgb(230, 193, 132)','rgb(150, 25, 141)' ]
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Ocurrió un error al obtener los datos:',error)
      })
  }, [])

  return (
    <div>
      {chartData ? (
        <div>
          <h3>Cantidad de Productos por Marcas</h3>
          <Pie data={chartData} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}