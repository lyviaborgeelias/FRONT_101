import Header from "./components/Header"
import Descricao from "./components/Descricao"
import Hobbies from "./components/Hobbies"
import Gosto from "./components/Gosto"
import "./App.css"
export default function App(){
  return(
    <main>
      <Header/>
      <Descricao/>
      <Hobbies/>
      <Gosto/>    
      <footer>
        Feito com 💚 para o Tom
      </footer>
    </main>
  )
}
