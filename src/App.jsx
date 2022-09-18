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
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</>
    );
}

export default App;