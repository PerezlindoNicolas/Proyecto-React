import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/NavBar/NavBar";
import ItemListConteiner from "./componentes/ItemListContainer/ItemListConteiner";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListConteiner
        aviso={
          <div className="alert alert-warning" role="alert">
            Pronto estaremos disponibles , mientras tanto pueden visitarnos es nuestras redes.{" "}
            <a href="https://www.instagram.com/rotondocafe/" className="alert-link">
            Instagram
            </a>
            Gracias por esperar.
          </div>
        }
      />
    </>
  );
};

export default App;
