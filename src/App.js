import NavBar from "./components/NavBar";
import "./components/app/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <ItemListContainer greetings={"Bienvenido a la Disco Tienda"}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
