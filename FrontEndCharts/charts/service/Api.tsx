import axios from 'axios'

export const getSumaSalario = async ()=>{

    const response = await axios.get('http://localhost:5000/suma-salario-departamento');
    return response.data

}

export const getProductoMoneda = async ()=>{

    const response = await axios.get(`http://localhost:5000/contar-productos-moneda`);
    return response.data

}

export const getValorProducto = async ()=>{

    const response = await axios.get(`http://localhost:5000/valor-producto-tipo`);
    return response.data

}