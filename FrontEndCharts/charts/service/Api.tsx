import axios from 'axios'

export const getPromedioCategoria = async ()=>{

    const response = await axios.get('http://localhost:5000/promedio-valor-categoria');
    return response.data

}

export const getProductoMarca = async ()=>{

    const response = await axios.get(`http://localhost:5000/cantidad-productos-marca`);
    return response.data

}

export const getValorProductoCategoria = async ()=>{

    const response = await axios.get(`http://localhost:5000/valor-total-categoria`);
    return response.data

}