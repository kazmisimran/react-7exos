import React, { useState } from "react";

export default function Exo4() {
    const [compt, setCompt] = useState(1);

    let changePlace = ()=>{
        console.log('0: '+compt)
        setCompt(compt+1); 
        console.log('1: '+compt)
        dalanda();
        console.log('2: '+compt)
    }
    let dalanda =()=>{
        console.log('dalanda 1: '+compt)
        let square1 = document.getElementById('square1');
        let square2 = document.getElementById('square2');
        if(compt%2==0){
            square1.classList.add('d-none');
            square2.classList.remove('d-none');
        }else{
            square1.classList.remove('d-none');
            square2.classList.add('d-none');
        }
        console.log('dalanda 2: '+compt)
    }
    let reset =()=>{
        setCompt(0);
        dalanda();
    }

    return (
        <div className="bg-light py-5 px-5 my-5">
            <h2 className="my-5">Déplacer les éléments</h2>
            <div className="row d-flex justify-content-around">
                <div className=" bg-info chiant d-flex justify-content-center align-items-center">
                    <div className="bg-light w-25 h-25 " id="square1">

                    </div>
                </div>
                <div className=" bg-info chiant d-flex justify-content-center align-items-center">
                    <div className="bg-light w-25 h-25 d-none " id="square2">

                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
                <button onClick={()=>{changePlace()}} type="button" className="btn btn-info d-block" id="btnPlace">Change place</button>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={()=>{reset()}} type="button" className="btn bg-info text-white d-block" id="clickNumber"> {compt} </button>
            </div>
        </div>

    )
}

