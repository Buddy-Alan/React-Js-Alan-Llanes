import React from 'react'
const imagenesProductos = require.context('../Imagenes/', true);

const Formulario = ({total, compra}) => {

    const [form, setForm] = useState (
        {
            buyer : {
                email : "",
                nombre: "",
                apellido: "",
                telefono: ""
            },
            total: total,
            items: compra
        }

    )

}

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form