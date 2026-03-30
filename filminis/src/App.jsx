import Header from "./components/Header"
import "./App.css"
export default function App(){
  return(
    <main>
      <Header/>
      <section>
        <h2>Descrição</h2>
        <p>O T.O.M. (Tom o Lagarto) é um personagem de animação brasileira conhecido pelo seu humor caótico e nonsense. 
          Ele vive situações imprevisíveis, toma decisões impulsivas e transforma qualquer ambiente em algo engraçad e cheio de confusão.
          Com forte influência da cultura da internet, T.O.M. se destaca pelo carisma e pela capacidade de criar entretenimento dinâmico, 
          mesmo sem seguir uma lógica tradicional. Ele não é herói nem vilão apenas um agente do caos que garante diversão ao público.
        </p>
      </section>
      <section>
        <h2>Hobbies são</h2>
        <ul>
          <li>Arrumar confusão</li>
          <li>Explorar coisas aleatórias</li>
          <li>Interagir com outros personagens de forma zoeira</li>
          <li>Fazer coisas sem sentido</li>
          <li>Sobreviver às próprias ideias ruins</li>
        </ul>
      </section>
      <section>
        <h2>Eu gosto dele por</h2>
        <p>Representar minha personalidade, ser fofinho e engraçado.</p>
      </section>
      <footer>
        Feito com 💚 para o Tom
      </footer>
    </main>
  )
}
