import React, {useState, useEffect,setLoading} from "react";
import ItemList from "../itemList/itemList";
import ProcesadorRyzen5 from '../Imagenes/ProcesadorRyzen5.jpg'
import ProcesadorRyzen7 from '../Imagenes/ProcesadorRyzen7.jpg'
import RamDDR4_8GB from '../Imagenes/RamDDR4_8GB.jpg'



const ItemListContainer = () => {

     const [productosNuevo, setProductos] = useState([])

    let product = [
        {
            id: 1,
            title: "Procesador Ryzen 5 5600g",
            price: 37.547,
            pictureURL: ProcesadorRyzen5
        },
        {
            id: 2,
            title: 'Procesador Ryzen 7 5700g',
            price: 61.371,
            pictureURL: ProcesadorRyzen7
        },
        {
            id: 3,
            title: "Memoria DDR4 3200Mhzs 8gb kingstong",
            price: 153,
            pictureURL: RamDDR4_8GB
        }
            ];
            useEffect(()=>
            {
                const task = new Promise ((resolve,rejected)=> {

                    setTimeout(() =>
                    {
                        resolve(product)
                    },
                        1000);
                                                                })

                task.then(resultado =>{
                    setProductos (resultado)}).catch().finally( console.log ("Se cargaron los productos"))                                   
                return () =>
                {
                
                };

            }, []);
    return(
    <ItemList items = {productosNuevo}/>
    );

}
export default ItemListContainer;

