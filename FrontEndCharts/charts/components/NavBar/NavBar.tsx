import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    
        <a className="navbar-brand" >Examen 2 Desarrollo Aplicaciones Web: </a>
        <div className="container-fluid">
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" href="/promedio">Valor promedio de productos por
                segmento</Link>
            </li>
            <li className="nav-item">
                <Link   className="nav-link active" href="/marca"> Cantidad de productos por marca </Link>
          
            </li>

            <li className="nav-item">
                <Link   className="nav-link active" href="/categoria"> Valor total por categoria </Link>
          
            </li>
    
        </ul>

    </div>
</nav>
  )
}