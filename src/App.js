import NavBar from "./components/NavBar";
import "./components/app/style.css"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <ItemListContainer greetings={"Bienvenido a la Disco Tienda"}/>
    </div>
  );
}

export default App;
