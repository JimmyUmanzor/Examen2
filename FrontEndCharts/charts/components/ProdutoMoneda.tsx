'use client'
import { getProductoMoneda } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function ProductoMoneda() {

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
    getProductoMoneda().then(data=>{
        const cantidad = data.map((item:any) => item.valueCurrency);
        const monedas= data.map((item:any) => item.Cantidad);
        
        setChartData({
            labels:cantidad,
            datasets:[{
                label: 'Cantidad de Productos por Moneda',
                data:monedas,
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
                    <h3>Productos por Moneda</h3>

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