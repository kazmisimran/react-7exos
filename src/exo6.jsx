import React, { useState } from "react";

//Cmt fonctionne le regex?

export default function Exo6() {

    //Niv1
    const [answer, setAnswer] = useState()

    let op = () => {
        let nb1 = document.getElementById('nb1');
        let nb2 = document.getElementById('nb2');



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

    //Niv2

    const [ans, setAns] = useState(' ')
    let calcul = (value) => {
        let history = document.getElementById('history');
        history.value += value;
    }
                                
    let equals = () => {
        let history = document.getElementById('history');
        setAns(eval(history.value));
        history.value = " ";
    }

    let reset = () => {
        let history = document.getElementById('history');
        history.value = " ";
        setAns(' ');
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

            <h3>Niveau 2</h3>
            <div className="calculator bg-primary">
                <div id="result" className="d-flex float-right text-white bg-primary">
                    {ans}
                </div>
                <input type="text" id="history" className="my-3 " />
                <div className="row d-flex justify-content-center my-3">
                    <button className="number  mx-2 px-3 py-2" value="1" onClick={() => calcul(1)}>1</button>
                    <button className="number  mx-2 px-3 py-2" value="2" onClick={() => calcul(2)}>2</button>
                    <button className="number  mx-2 px-3 py-2" value="3" onClick={() => calcul(3)}>3</button>
                    <button id="plus" className="operator  mx-2 px-3 py-2" value="+" onClick={() => calcul('+')}  >+</button>
                </div>
                <div className="row d-flex justify-content-center my-3">
                    <button className="number  mx-2 px-3 py-2" value="4" onClick={() => calcul(4)} >4</button>
                    <button className="number  mx-2 px-3 py-2" value="5" onClick={() => calcul(5)} >5</button>
                    <button className="number  mx-2 px-3 py-2" value="6" onClick={() => calcul(6)} >6</button>
                    <button id="moins" class="operator  mx-2 px-3 py-2" value="-" onClick={() => calcul('-')} >-</button>
                </div>
                <div className="row d-flex justify-content-center my-3">
                    <button className="number  mx-2 px-3 py-2" value="7" onClick={() => calcul(7)} >7</button>
                    <button className="number  mx-2 px-3 py-2" value="8" onClick={() => calcul(8)} >8</button>
                    <button className="number  mx-2 px-3 py-2" value="9" onClick={() => calcul(9)} >9</button>
                    <button id="fois" className="operator  mx-2 px-3 py-2" value="*" onClick={() => calcul('*')} >*</button>
                </div>
                <div className="row d-flex justify-content-center my-3">
                    <button id="clear" className="clear mx-2 px-3 py-2" onClick={() => reset()} >C</button>
                    <button className="number  mx-2 px-3 py-2" value="0" onClick={() => calcul(0)} >0</button>
                    <button id="egal" className="egal mx-2 px-3 py-3" value="=" onClick={() => equals()} >=</button>
                    <button id="divise" className="operator  mx-2 px-3 py-2" value="/" onClick={() => calcul('/')} >/</button>
                </div>
            </div>
        </div>
    )
}
