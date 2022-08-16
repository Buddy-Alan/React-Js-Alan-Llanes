import './App.css';
import NavBar from './Component/navBar'
import ItemListCointainer from './Component/itemListContainer';
import ItemCount from './Component/ItemCounts';


function App() {
    const titulo = ["Bienvenido a Mi Nueva Tienda"]
    const productos = [
        {
            initial: 0,
            nameProducto: 'Ram DDR4',
            stock: 10
        }

    ]
    return ( 
        <div className = "" >
            
        <div className = "Navbar_menu" >
        <NavBar / >
        </div> 
        < header className =  "" >
        <ItemListCointainer greeting = {titulo}/>     
         </header>
         <body>
         {
            productos.map ((item,index) => (
                <ItemCount key={index} nameProducto= {item.nameProducto} initial = {1} stock= {item.stock} /> 
            ))
        }
         </body>

        </div>
    );
}

export default App;