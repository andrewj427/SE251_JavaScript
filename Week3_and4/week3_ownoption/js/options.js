/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div

---------*/
let optbutton = document.querySelector('h2')
let sidesdiv = document.querySelector('.sides')
optbutton.addEventListener('click', e=> {
sidesdiv.style.display = (sidesdiv.style.display === `none`)?sidesdiv.style.display = `block`:sidesdiv.style.display=`none`
})




/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
let fill = document.querySelectorAll('.fill')
for(let i=0; i<2; i++) {
    fill[i].addEventListener('input', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    o[i].fill = e.target.value
    player[i].pad.fill = e.target.value

})
}


/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
let up = document.querySelectorAll('.u')
let down = document.querySelectorAll('.d')
let straight = document.querySelectorAll('.s')

//use for loops to halve the amount of event listeners needed

for(let i=0; i<2; i++) {
    //up keys
up[i].addEventListener('focus', e=> {
    currentState = 'pause'
})
up[i].addEventListener('keydown', e=>{
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['u'] = e.target.value
})
    //down keys
down[i].addEventListener('focus', e=> {
    currentState = 'pause'
})
down[i].addEventListener('keydown', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['d'] = e.target.value

})

//straight keys
straight[i].addEventListener('focus', e=> {
    currentState = 'pause'
})
straight[i].addEventListener('keydown', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['s'] = e.target.value
})
}

let ops = document.querySelectorAll('.op')
let stroke = document.querySelectorAll('.stroke')
for(let i=0;i<2;i++) {
    stroke[i].addEventListener('input', e=> {
        ops[i].style.backgroundColor = e.target.value
    })
}


//Canvas color
let canvas = document.querySelector('.canvdiv')
let canvColor = document.querySelector('.canv')

canvColor.addEventListener("input", e=>
    canvas.style.backgroundColor = e.target.value
)