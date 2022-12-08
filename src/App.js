import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header.jsx';
import CardImagen from './CardImagen.jsx';
import Footer from './Footer.jsx';


function App() {
  return (
    <div className="App">
       <Header titulo="Galería de Imágenes con React"></Header>
       <hr></hr>
       <div>
       <CardImagen imagen="https://cdn.pixabay.com/photo/2020/10/07/18/40/dog-5635960_960_720.jpg" titulo="Bulldog Inglés" descripcion="Bulldog Cachorro"></CardImagen>
       <CardImagen imagen="https://cdn.pixabay.com/photo/2014/09/17/20/30/dog-look-449955_960_720.jpg" titulo="Boxer" descripcion="Boxer Cachorro"></CardImagen>
       <CardImagen imagen="https://cdn.pixabay.com/photo/2015/07/31/11/43/rottweiler-869018_960_720.jpg" titulo="Rottweiler" descripcion="Rottweiler Cachorro"></CardImagen>
       </div>
      
      <Footer texto="Cachorros Caninos - Todos los derechos reservados @2022"></Footer>

    </div>
  );
}

export default App;
 