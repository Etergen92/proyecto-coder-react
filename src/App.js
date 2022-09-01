import NavBar from "./components/NavBar";
import "./components/app/style.css"
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header><NavBar/></header>
      <ItemListContainer/>
    </div>
  );
}

export default App;
