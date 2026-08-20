import "./CSSassets/Card.css"
import Checkboxcard from "./Checkboxcard";

function Card()
{
    return(
        <div className="Card">
            <h2>Minhas Tarefas</h2>
            <form action="#">
                <Checkboxcard/>
                <Checkboxcard/>
                <Checkboxcard/>
                <Checkboxcard/>
            </form>
        </div>
    )
}
export default Card