import './App.css';
import NavBar from './Component/navBar/navBar'
import ItemListCointainer from './Component/itemListContainer/itemListContainer';
import ItemCount from './Component/ItemCounts/ItemCounts';


function App() {
    const productos = [
        {
            initial: 0,
            nameProducto: 'Ram DDR4',
            stock: 10
        }

    ]
    return ( 
      <>
            
        <div className = "Navbar_menu" >
        <NavBar/>
        </div> 
        < header className =  "" >
   
         </header>   
 
            <div className='row'>
            <ItemListCointainer />    
            </div>
         {/* {
            productos.map ((item,index) => (
                <ItemCount key={index} nameProducto= {item.nameProducto} initial = {1} stock= {item.stock} /> 
            ))
        } */}
   
   

</>
    );
}

export default App;