
// import { addDoc, addDoc, collection, getDocs } from "firebase/firestore";
// import db from '../../services'
// import React from "react";

// const useFireBase  = () => {

// const getItemFirestore = (effectParaObtenerItem, nombreDeLaBaseAUtilizar, stateDondeImpacta) => {

//     effectParaObtenerItem(() => {
//         const getColDAta = async() => {
//             try {
//                 const data = collection(db, nombreDeLaBaseAUtilizar);
//                 const col = await getDocs(data);
//                 const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
//                 stateDondeImpacta(res)
//             } catch (error) {
//                 console.log("Error de Carga de Datos")
//             }

//         }
//         getColDAta()
//         return () => {

//         };
//     }, []);
// }

// const generarTickets = async ({datos}) => {
//     try{
//         const col = collection(db,"ordenCompra")
//         const order = await addDoc(col,datos)
//         console.log(order.id)
//     } catch(error)
//     {
//         console.log (error)
//     }
// }

//     return {
//         getItemFirestore,
//         generarTickets
//         }
// }
// export default useFireBase;