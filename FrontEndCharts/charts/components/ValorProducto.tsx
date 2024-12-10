'use client'
import { getValorProducto } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function ValorProducto() {

  const [chartData, setChartData] = useState({
    labels:[],
    datasets:[
        {
            label:'',
            data:[],
            backgroundColor:[] as string[]
        }
    ]
  })

  useEffect(()=>{
    getValorProducto().then(data=>{
        const valor = data.map((item:any) => item.productType);
        const producto= data.map((item:any) => item.Valor);
        
        setChartData({
            labels:valor,
            datasets:[{
                label: 'Valor de Productos por Tipo de Producto',
                data:producto,
                backgroundColor:['rgb(255, 99, 132)','rgb(254, 93, 132)' ]
                }
            ]
        })

    })
    .catch((error)=>{console.log('ocurrio un error',error)})
  },[]);

  return (
    <>

    <div>
        {
            chartData ? (
                <div>
                    <h3>Suma de Valores por Tipo de Producto</h3>

                    <Bar data={chartData}></Bar>
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}