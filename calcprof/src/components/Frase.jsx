import React, { useState } from 'react'

function Frase({ texto }){
    const [state, SetState] = useState("Minha Frase")

    return <>
    <input 
        value={state}
        onChange={
            (event) => SetState(event.target.value)
        }
    />
        <p>
            <strong>Seu texto: </strong> 
            {state}
        </p>
    </>
}

export default Frase;