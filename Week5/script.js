/*
    Check to see if `posts` exists in local storage
    if it does parse the JSON string
    loop through the returned array and add each string to the page as innerHTML.
*/
if(localStorage.getItem(`posts`))
{
    var posts = JSON.parse(localStorage.getItem(`posts`));
    posts.forEach(value=>$(`#output`).innerHTML += value)
}

/*
    When the `Add` button is clicked:
        creates a div for a post
        gives it a `post` class
        creates a <p> tag
        add the textareas value to the <p> tag's innerHTML
        create a <time> element
        add the system time to the time elements innerHTML
        add the <time> and <p> to the <div>
        add the <div> to the #output <section>
        create an array of the post's outerHTML strings
        Store the array in local storage as a JSON String
*/
$(`button`)[0].addEventListener(`click`, e=>{
    let post = document.createElement(`div`);
    post.setAttribute(`class`,`post`);  
    let check = document.createElement(`input`);
    check.setAttribute(`type`,`checkbox`)
     //adding some code here to check if the 'bulk delete' button is selected
    //if we don't do this, the new message wont have a chackbox while the other ones do
    if (selectAll.classList[0] === `hidden`) {
    check.classList.add(`hidden`)}
    let p = document.createElement(`p`);
    p.innerHTML = $(`textarea`).value
    let time = document.createElement(`time`);
    time.innerHTML = new Date().toLocaleTimeString();
    post.appendChild(check)
    post.appendChild(time)
    post.appendChild(p)
    $(`#output`).appendChild(post)
    var arr = Array.from($(`.post`)).map(value => value.outerHTML);

    localStorage.setItem(`posts`, JSON.stringify(arr));
    //console.log(JSON.stringify(arr));
})

let selectAll = $(`button`)[2]
let confirmBtn = $(`button`)[3]

$(`button`)[1].addEventListener(`click`, e=> {
  selectAll.classList.toggle('hidden') 
  confirmBtn.classList.toggle('hidden')  
    if($(`.post`)) {
    for(let i=0; i< $(`.post`).length;i++){
        $(`.post input[type="checkbox"]`)[i].classList.toggle(`hidden`)
    }}
  })

selectAll.addEventListener(`click`, e=> {
    if($(`.post`)) {
    for(let i=0; i < $(`.post`).length; i++) {
        $(`.post input[type="checkbox"]`)[i].checked = true
    }}
})

confirmBtn.addEventListener(`click`, e=> {
    if ($(`.post`)) {
    $(`.post`).forEach(e => {
        if (e.querySelector(`input[type="checkbox"]`).checked === true) {
           e.remove()
        }
    })
    selectAll.classList.toggle(`hidden`)
    confirmBtn.classList.toggle(`hidden`)
    if ($(`.post`)) {//if some posts still exist, write them to memory but disable the checkbox/confirm/select btns first
        
        $(`.post`).forEach(e => {
            e.querySelector(`input[type="checkbox"]`).classList.toggle(`hidden`)
        })



    arr = Array.from($(`.post`)).map(value=>value.outerHTML)
    
    localStorage.setItem(`posts`,JSON.stringify(arr))
}
else {
    localStorage.clear()
}
}})



/*
Function to select an element. 
selects a list of elements and returns either the list or a single element in the list.
argument: an element selector
return:
    a: if the node list is longer than one item return the node list
    b: if the node list contains one item return the one element
*/
function $(_element)
{
    let e = document.querySelectorAll(_element)
    return (e.length > 1)?e:e[0]
}


