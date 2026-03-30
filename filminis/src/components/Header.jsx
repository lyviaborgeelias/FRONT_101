import FotoLagarto from "../assets/tomlagarto.gif"
import "./Header.css"
function Header(){
    return(
    <header>
        <h1>Tom, <br />o Lagarto</h1>
        <img src={FotoLagarto} alt="Tom dando tchauzinho" />
    </header>
    )
}
export default Header;