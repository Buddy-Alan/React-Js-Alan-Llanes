import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from './services'
import Swal from "sweetalert2";

const alertAntesDeComprar = (ordenAMostrar, urlDelHome) => {
    Swal.fire({
        title: 'La Compra se A Completado',
        text: `Su Numero de Orden es: ${ordenAMostrar}`,
        confirmButtonText: 'OK',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.assign(urlDelHome);
        }
    })
}

const alertParaQueCompleteDatos = () => {
    Swal.fire({
        icon: 'error',
        title: '¡Formulario Incompleto!',
        text: 'Por favor, complete el formulario solicitado',
    })
}
const generarTickets = async(productosAComprar, productosARestarStock, urlDelHome) => {
    const { email, nombre, apellido, telefono } = productosAComprar.buyer
    if (email !== "" && nombre !== "" && apellido !== "" && telefono !== "" && email !== "") {

        try {
            const col = collection(db, "ordenCompra")
            const order = await addDoc(col, productosAComprar)
            alertAntesDeComprar(order.id, urlDelHome)
            for (let itemsNuevos of productosAComprar.items) {
                let stockDeProductos = doc(db, "products", itemsNuevos.id)
                let stockAnterior = productosARestarStock.filter((item) => item.id === itemsNuevos.id)
                await updateDoc(stockDeProductos, { stock: stockAnterior[0].stock - itemsNuevos.contador })
            }
        } catch (error) {
            console.log(error)
        }

    } else {
        alertParaQueCompleteDatos()
    }

}




export default generarTickets