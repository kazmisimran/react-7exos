import React, { useState, useEffect } from "react";

export default function Exo7() {

    let addList = () => {
        //Déclarer éléments 
        let inputTache = document.getElementById('inputTache');
        let list = document.getElementById('list');
        let toDo = document.getElementById('toDo');
        let done = document.getElementById('done');
        let all = document.getElementById('all');
        let tabTache = [];
        let tabList = [];


        //Création d'éléments
        let ligne = document.createElement('div');
        tabList.push(ligne);
        ligne.classList.add('d-flex');
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.setAttribute('id', 'check');
        check.classList.add('mx-3');
        let tache = document.createElement('h4');
        tache.classList.add('mx-3');
        ligne.classList.add('toDo');
        ligne.classList.add('my-2');
        tache.innerHTML = inputTache.value;
        tabTache.push(tache);
        inputTache.value = "";
        let supp = document.createElement('button');
        supp.innerHTML = ' X ';

        //APPENDCHILD
        list.appendChild(ligne);
        ligne.appendChild(check);
        ligne.appendChild(tache);
        ligne.appendChild(supp);

        //Supprimer éléments
        let remove = () => {
            supp.parentNode.remove();
        }
        supp.addEventListener('click', remove);

        //Checkbox 
        check.onclick = () => {
            if (check.checked) {
                ligne.classList.add('bg-info');
                ligne.classList.remove('toDo');
                ligne.classList.add('done');
            } else {
                ligne.classList.remove('bg-info');
                ligne.classList.add('toDo');
                ligne.classList.remove('done');
            }
        }
                                        
        //Modifier les tâches
        let edit = document.createElement('button');
        let ok = document.createElement('button');
        ok.innerHTML = 'ok';
        edit.innerHTML = 'Modifier';
        edit.classList.add('mx-3');
        ligne.appendChild(edit);
        let newTache = document.createElement('input');



        edit.onclick = () => {
            newTache.classList.add('mx-3');
            ligne.replaceChild(newTache, tache);
            ligne.replaceChild(ok, edit);
            supp.classList.add('d-none');
            newTache.onblur = () => {
                if (newTache.value != "") {
                    tache.innerHTML = newTache.value;
                    newTache.value = "";
                }
                ligne.replaceChild(tache, newTache)
                ligne.replaceChild(edit, ok);
                supp.classList.remove('d-none');
            }
            ok.onclick = () => {
                if (newTache.value != "") {
                    tache.innerHTML = newTache.value;
                    newTache.value = "";
                }
                ligne.replaceChild(tache, newTache)
                ligne.replaceChild(edit, ok);
                supp.classList.remove('d-none');

            }
        }

        toDo.addEventListener('click', () => {
            for (let i = 0; i < tabList.length; i++) {
                if (tabList[i].classList.contains('done')) {
                    tabList[i].classList.remove('d-flex');
                    tabList[i].classList.add('d-none');
                } else {
                    tabList[i].classList.add('d-flex');
                    tabList[i].classList.remove('d-none');

                }
            }
        })

        done.addEventListener('click', () => {
            for (let i = 0; i < tabList.length; i++) {
                if (tabList[i].classList.contains('toDo')) {
                    tabList[i].classList.remove('d-flex');
                    tabList[i].classList.add('d-none');
                } else {
                    tabList[i].classList.add('d-flex');
                    tabList[i].classList.remove('d-none');

                }
            }
        })

        all.addEventListener('click', () => {
            for (let i = 0; i < tabList.length; i++) {
                tabList[i].classList.remove('d-none');
                tabList[i].classList.add('d-flex');
            }
        })




    }

  


    return (
        <>
            <div class="bg-light py-5 px-5 my5 container">
                <h2>To do list</h2>

                <div class="input-group mb-3">
                    <input id="inputTache" type="text" class="form-control" aria-label="Sizing example input" placeholder="Que dois-je faire?"
                        aria-describedby="inputGroup-sizing-default" onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                addList();
                            }
                        }} />
                </div>
                <div class="row">
                    <button id="all" type="button" class="btn  btn-info d-block mx-2" >ALL</button>
                    <button id="done" type="button" class="btn btn-info d-block mx-2">DONE</button>
                    <button id="toDo" type="button" class="btn btn-info d-block mx-2">TO DO</button>
                </div>

                <div id="divList" class="mt-3">
                    <ul id="list">

                    </ul>
                </div>

            </div>

        </>
    )
}