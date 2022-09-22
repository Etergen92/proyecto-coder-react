import "./components/app/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/app/Router";
import CartProvider from "./components/app/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router/>
      </CartProvider>
    </div>
  );
}

export default App;
