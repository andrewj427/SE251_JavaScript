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
fill[0].addEventListener('input', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    o[0].fill = e.target.value
    player[0].pad.fill = e.target.value

})


fill[1].addEventListener('input', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    o[1].fill = e.target.value
    player[1].pad.fill = e.target.value
})

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
up[i].addEventListener('keydown', e=>{
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['u'] = e.target.value
})
    //down keys
down[i].addEventListener('keydown', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['d'] = e.target.value

})

//straight keys
straight[i].addEventListener('keydown', e=> {
    e.target.nextElementSibling.innerHTML = e.target.value
    player[i].keys['s'] = e.target.value
})
}
