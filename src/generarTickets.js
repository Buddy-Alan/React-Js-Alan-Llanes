import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from './services'
import Swal from "sweetalert2";

const alertAntesDeComprar = (ordenAMostrar, urlDelHome) => {
    Swal.fire({
        title: 'La Solicitud de productos se ha Completado',
        text: `Su Numero de Orden es: ${ordenAMostrar}.
        En breve nos pondremos en contacto con Usted`,
        confirmButtonText: 'OK',
    }).then((result) => {
        if (result.isConfirmed) {
            // Se ingresa una variable "urlHome", para cuando termina la compra se re diriga la home.
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
                //El for recorre  el array en producotsAcomprar (que son los productos del Fire Base)  
                //Con el objetivo de encontrarlo y extrarlo, y luego poder saber su stock actual.
                //Para poder restarle el stock solicitado por el cliente
            for (let itemsNuevos of productosAComprar.items) {
                let stockDeProductos = doc(db, "products", itemsNuevos.id)
                let stockAnterior = productosARestarStock.filter((item) => item.id === itemsNuevos.id)
                    //Se utiliza para actualizar el stock del producto
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