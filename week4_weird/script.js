let button = document.querySelector(`button`)
let options = document.querySelector(`.options`)
let body = document.querySelector(`body`)
let colors = document.querySelectorAll(`input[type=color]`)
//options.style.display = `none`
button.addEventListener(`click`, e=>{
    options.classList.toggle('hide')
    button.innerText = (options.classList[1] === `hide`)?button.innerText = 'open':button.innerText ='close'
    // if(options.style.display === `none`) {
    //     options.style.display = `block`
    //     button.innerHTML = `Close`
    // }
    // else {
    //     options.style.display = `none`
    //     button.innerHTML = `Open`
    // }
    //
    // v this does the same thing as the above if else block v
    //options.style.display = (options.style.display === `none`)?options.style.display = `block`:options.style.display=`none`
})

colors[0].addEventListener(`input`, e=>{
    body.style.backgroundColor = e.target.value
    e.target.nextElementSibling.value = e.target.value
})

colors[0].nextElementSibling.addEventListener(`change`, e=>{
    colors[0].value = e.target.value
    body.style.backgroundColor = e.target.value
})

class Box {
    constructor()
    {
        this.stroke = `#ffffff`
    }
}
let cube = new Box();

let span = document.querySelector(`span`)
span.innerText = cube['stroke'];

document.querySelector(`input[type="range"]`).addEventListener(`input`, e=>{
    body.style.backgroundColor = `rgb(${e.target.value},0,0)`
})