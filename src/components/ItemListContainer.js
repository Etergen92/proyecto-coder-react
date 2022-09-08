import ItemList from "./ItemList"


const ItemListContainer = ({greetings}) => {

  return (
    <div>
      <h1 className="tituloPaginaInicio">{greetings}</h1>
      <ItemList/>
    </div>
  )
}

export default ItemListContainer