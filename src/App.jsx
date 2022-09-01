import './App.css';
import Rutas from './routes/rutas';
import GlobalProvider from './context/GlobalProvider';


function App() {

    return ( 
     <>
        <div className = "Navbar_menu" >
            <GlobalProvider>
            <Rutas/>
            </GlobalProvider>

        </div> 
        < header className =  "" >
        </header>   
</>
    );
}

export default App;