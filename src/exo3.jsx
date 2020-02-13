import React, { useState } from "react";


export default function Exo3() {
    const [name, setName] = useState('Inconnu')
    let changeName = () => {
        setName(document.getElementById('copie').value);
        document.getElementById('copie').value = ' ';
    }
    return (
        <div className="bg-light container my-5 py-5 px-5">
            <h1>Shalom {name}</h1>
            <p>Entrez votre prénom.</p>
            <input onKeyUp={(e) => {
                if (e.key === "Enter") {
                    changeName();
                }
            }} id="copie" type="text" />
            <button onClick={() => changeName()}>Go!</button>
        </div>
    )
}