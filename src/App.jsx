import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting = {"Bienvenido a la tienda online de Femia, cosmética natural, para el cuidado de tu piel."} />
    </>
  )
}

export default App
