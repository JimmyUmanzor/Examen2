import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" >Examen Nro 2 Desarrollo Aplicaciones Web</a>
     
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/suma">Valor promedio de productos por
                segmento</Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/producto"> Productor por Moneda </Link>
          
            </li>

            <li className="nav-item">
                <Link   className="nav-link active" href="/valorProducto"> Suma de Valores por Tipo de Producto </Link>
          
            </li>
        

            <li className="nav-item">
                <Link className="nav-link" href="/">Inicio</Link>
            </li>
          
        </ul>

    </div>
</nav>
  )
}