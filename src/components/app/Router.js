import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "../ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer"
import Layout from "./Layout"
import Cart from "../Cart"


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router