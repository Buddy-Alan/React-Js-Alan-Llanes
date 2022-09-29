import './App.css';
import Rutas from './routes/rutas';
import GlobalProvider from './context/GlobalProvider';
import Footer from './Component/Footer/Footer';



const stylleHome = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
}


function App() {

    return ( 
    <>
    <div style={stylleHome}>
        <div className = "Navbar_menu"  >
        
            <GlobalProvider>
            <Rutas/>
            </GlobalProvider>
     
        </div> 

        <Footer/>
        </div>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</>
    );
}

export default App;