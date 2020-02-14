import React, { useState } from "react";

export default function Exo5() {
    //Liste d'oeufs 
const [compt, setCompt] = useState(0)


    let add = () => {
        let divOeuf = document.getElementById('divOeuf');
        let img = document.createElement('img');
        divOeuf.classList.add('text-center');
        img.src = "./img/adjini.jpg";
        img.classList.add('App-logo');
        img.classList.add('rounded-circle');
        divOeuf.appendChild(img);
        setCompt(compt+1)
    }

    let remove = () => {
        let divOeuf = document.getElementById('divOeuf');
        if(compt>0){
            setCompt(compt-1);
        }
        if(divOeuf.childElementCount > 0){
            divOeuf.removeChild(divOeuf.lastChild);
        }
    }

    let removeAll = () => {
        let compteur = document.getElementById('compteur');
        let divOeuf = document.getElementById('divOeuf');
        setCompt(0);

        divOeuf.innerHTML = "";
        compteur.innerHTML = `${compt}`;
    }


    return (
        <div>
            <div class="d-flex justify-content-center mt-5 mb-3">
                <button type="button" onClick={()=> add()} class="btn btn-info d-block mx-2" id="btnAdd">ADD</button>
                <button type="button" onClick={()=> remove()} className="btn btn-info d-block mx-2" id="btnRem">REMOVE</button>
                <button type="button" onClick={()=>removeAll()} className="btn btn-info d-block mx-2" id="btnRemAll">REMOVE ALL</button>
    <button type="button" className="btn  btn-info d-block mx-2" id="compteur">{compt}</button>


            </div>
            <div id="divOeuf" className=" container py-5 px-5 my-5">

            </div>
        </div>)
}