import './App.css';
import Menu from './Component/navBar'
import ItemListCointainer from './Component/itemListContainer';

function App() {
    const titulo = ["Bienvenido a Mi Nueva Tienda"]

    return ( <
        div className = "" >
        <
        div className = "Navbar_menu" >
        <
        Menu / >
        <
        /div>

        <
        header className = "App-header" >
        <
        ItemListCointainer greeting = { titulo }
        />  <
        /header> 

        <
        /div>
    );
}

export default App;