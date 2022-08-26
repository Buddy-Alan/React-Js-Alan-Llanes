const getItem = (effectParaObtenerItem, datoABuscar, stateDondeImpacta) => {
    effectParaObtenerItem(() => {
        const task = new Promise((resolve, rejected) => {

            setTimeout(() => {
                    resolve(datoABuscar)
                },
                2000);
        })
        task.then(resultado => {
            stateDondeImpacta(resultado)
        }).catch().finally(console.log("Se cargaron los productos"))
    }, []);
}

export default getItem;