import React, { useState } from "react";

//Utiliser useEffect


export default function Exo1() {

    let [titre, setTitre] = useState('Mon titre');
    let [color, setColor] = useState(true);
    let [bgColor, setBgColor] = useState(true);

    return (
        <div className="container my-5 bg-light h-50">
            <h1 onMouseEnter={() => {
                setTitre("Mon titre modifié");
                setColor(false);
                setBgColor(false)
            }}
                className={bgColor ? color ? "bg-light" : "bg-light text-danger" : color ? "bg-info" : "bg-info text-danger"}
                onMouseLeave={() => {
                    setTitre("Mon titre");
                    setColor(true);
                    setBgColor(true)
                }}
                id='titre'>{titre}</h1>
            <p>Liste de props à retrouver dans la documentation: </p>
            <ul>
                <li>InnerText</li>
                <li>InnerHTML</li>
                <li>querySelector()</li>
                <li>querySelectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <p>
                Changer le contenu du h2 par "le titre modifié"<br />
                Changer la couleur  du h2 par la couleur que vous voulez <br />
                Ajouter une class background bootstrap au h2
            </p>
        </div>
    )
}