import React, { useState } from "react";

//Cmt fonctionne le regex?

export default function Exo6() {

    const [answer, setAnswer] = useState()



    let op = () => {
        let nb1 = document.getElementById('nb1');
        let nb2 = document.getElementById('nb2');

        // nb1 = /^[0-9]+$/;
        // nb2 =  /^[0-9]+$/;
        
        if (document.getElementById('plus').selected) {
            setAnswer(Number(nb1.value) + Number(nb2.value));
        } else if (document.getElementById('multiply').selected) {
            setAnswer(Number(nb1.value * nb2.value));
        } else if (document.getElementById('divide').selected) {
            setAnswer(Number(nb1.value / nb2.value));
        } else {
            setAnswer(Number(nb1.value - nb2.value));
        }
    }


    return (


        <div className='bg-light my-5 px-5 py-5 container'>
            <h3>Niveau 1</h3>
            <input type="text" id="nb1" />
            <select id="opSelect">
                <option id="plus">+</option>
                <option id="multiply">*</option>
                <option id="minus">-</option>
                <option id="divide">/</option>
            </select>
            <input type="text" id="nb2" />
            <input type="button" value="=" id="equals" onClick={() => op()} />
            <p className="d-inline mx-3" id="rep">{answer}</p>
        </div>
    )
}