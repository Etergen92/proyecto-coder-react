import NavBar from "./components/NavBar";
import "./components/app/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <ItemListContainer greetings={"Bienvenido a la Disco Tienda"}/>
      <ItemCount stock={12}/>
      
    </div>
  );
}

export default App;
