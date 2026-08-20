import "./CSSassets/Card.css"
import { useState } from 'react';

function Card()
{
    const [liked, setLiked] = useState(true);

    function handleChange(e) {
        setLiked(e.target.checked);
    }
    return(
        <div className="Card">
            <h2>Minhas Tarefas</h2>
            <form action="#">
                
                <label htmlFor="checkbox">
                    <input type="checkbox" 
                     checked={liked} 
                     onChange={handleChange}/><p>{liked ? "Estudei" : "Estudar"} conteúdo de React</p>
                </label>
                
                <label htmlFor="checkbox">
                    <input type="checkbox" 
                     checked={liked} 
                     onChange={handleChange}/><p>{liked ? "Estudei" : "Estudar"} conteúdo de React</p>
                </label>
                <label htmlFor="checkbox">
                    <input type="checkbox" 
                     checked={liked} 
                     onChange={handleChange}/><p>{liked ? "Estudei" : "Estudar"} conteúdo de React</p>
                </label>
                
                <label htmlFor="checkbox">
                    <input type="checkbox" 
                     checked={liked} 
                     onChange={handleChange}/><p>{liked ? "Estudei" : "Estudar"} conteúdo de React</p>
                </label>
                
            </form>
        </div>
    )
}
export default Card