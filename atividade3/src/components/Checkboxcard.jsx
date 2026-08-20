import { useState } from 'react';

export default function Checkboxcard()
{
    const [liked, setLiked] = useState(true);
    
    function handleChange(e) {
        setLiked(e.target.checked);
    }
    return(
         <label htmlFor="checkbox">
            <input type="checkbox" 
                checked={liked} 
                onChange={handleChange}/><p>{liked ? "Estudei" : "Estudar"} conteúdo de React</p>
        </label>
    )
}