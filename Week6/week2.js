// JavaScript Document

let submitbtn = document.querySelector(`input[type=button]`)
let formdiv = document.querySelector(`#form`)
let confirmdiv = document.querySelector(`#confirmation`)
submitbtn.addEventListener(`click`, e=> {
    formdiv.style.display = "none"
    confirmdiv.style.display="block"
    let p=document.querySelector(`#info`)
    let fname=document.querySelector("#first-name")
    p.innerText = fname.textContent



})