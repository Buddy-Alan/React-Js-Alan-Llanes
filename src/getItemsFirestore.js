import { collection, getDocs } from "firebase/firestore";
import db from './services'
const getItemFirestore = (effectParaObtenerItem, nombreDeLaBaseAUtilizar, stateDondeImpacta) => {

    effectParaObtenerItem(() => {
        const getColDAta = async() => {
            try {
                const data = collection(db, nombreDeLaBaseAUtilizar);
                const col = await getDocs(data);
                const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
                stateDondeImpacta(res)
            } catch (error) {
                console.log("Error de Carga de Datos")
            }

        }
        getColDAta()
        return () => {

        };
    }, []);
}

export default getItemFirestore;