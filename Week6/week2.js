// JavaScript Document

let submitbtn = document.querySelector(`input[type=button]`)
let formdiv = document.querySelector(`#form`)
let confirmdiv = document.querySelector(`#confirmation`)
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let phoneRegex = /^\d{10}$/
let nameRegex = /^[A-Za-z]+(?:-[A-Za-z]+)*$/


submitbtn.addEventListener(`click`, e=> {
    
    let p=document.querySelector(`#info`)
    let fnameInput=document.querySelector("#first-name")
    let lnameInput=document.querySelector("#last-name")
    let emailInput=document.querySelector(`#email`)
    let confemailInput=document.querySelector(`#confemail`)
    let phoneInput=document.querySelector(`#phone`)
    let fnamevalid
    let lnamevalid
    let emailvalid
    let phonevalid
    
    let person = {
        fname:fnameInput.value,
        lname:lnameInput.value,
        email:emailInput.value,
        confemail:confemailInput.value,
        phone:phoneInput.value
    }

    //go through each var in person and make sure that it is 1. not null and 2. matches any regex criteria
    if(person.fname != null && nameRegex.test(person.fname)) {
        fnameInput.nextElementSibling.innerText = ""
        fnamevalid = true
        fnameInput.parentElement.style.color="black"
        
    }
    else{
        fnameInput.nextElementSibling.innerText = "*Please enter a valid first name*"
        fnameInput.nextElementSibling.style.color = "red"
        fnameInput.parentElement.style.color = "red"
        valid = false

    }
    if(person.lname != null && nameRegex.test(person.lname)) {
        lnameInput.nextElementSibling.innerText = ""
        lnamevalid = true
        lnameInput.parentElement.style.color="black"

        

    }
    else{
        lnameInput.nextElementSibling.innerText = "*Please enter a valid last name*"
        lnameInput.nextElementSibling.style.color = "red"
        lnameInput.parentElement.style.color = "red"
        valid = false
    }
    if(person.email === person.confemail){
        

        if(emailRegex.test(person.email)){
            emailInput.nextElementSibling.innerText = ""
            confemailInput.nextElementSibling.innerText = ""
            emailvalid = true
            emailInput.parentElement.style.color="black"
            confemailInput.parentElement.style.color="black"

            

        }
        else {
            emailInput.nextElementSibling.innerText = "*Please add a valid email*"
            emailInput.nextElementSibling.style.color = "red"
            confemailInput.nextElementSibling.innerText = "*Email and confirm email must match*"
            confemailInput.nextElementSibling.style.color = "red"
            emailInput.parentElement.style.color = "red"
            confemailInput.parentElement.style.color = "red"
            valid = false
        }
    }
    else{
        emailInput.nextElementSibling.innerText = "*Email and Confirm Email must match*"
        emailInput.nextElementSibling.style.color = "red"
        confemailInput.nextElementSibling.innerText = "*Email and Confirm Email must match*"
        confemailInput.nextElementSibling.style.color = "red"
        emailInput.parentElement.style.color = "red"
        confemailInput.parentElement.style.color = "red"
        valid = false
    }

    if(person.phone != null && phoneRegex.test(person.phone)) {
        phoneInput.nextElementSibling.innerText = ""
        phonevalid = true
        phoneInput.parentElement.style.color="black"
        

    }
    else{
        phoneInput.nextElementSibling.innerText = "*Please enter a valid phone number without any dashes or spaces (ex 1234567890)*"
        phoneInput.nextElementSibling.style.color = "red"
        valid=false
        phone.parentElement.style.color="red"
    }



    if(fnamevalid === true && lnamevalid ===true && emailvalid ===true && phonevalid===true){
        formdiv.style.display = "none"
        confirmdiv.style.display="block"
        p.innerText = `${person.fname} ${person.lname}\n${person.email}\n${person.phone.substring(0,3)}-${person.phone.substring(3,6)}-${person.phone.substring(6)}`
    }







})