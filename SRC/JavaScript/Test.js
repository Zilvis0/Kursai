let testText = document.getElementById("testText")
let TextLanding = document.getElementById("TextLanding")
let myArray = ["never", "gonna", "give", "you", "up", "let", "down", "run", "around", "and", "desert"]
testText.addEventListener("keyup", (event)=>{
    let a = myArray.filter(item=> item.toLowerCase().includes(event.target.value))
    TextLanding.innerHTML=""
    if (a == ""){
   TextLanding.innerHTML+=`<h2>No such item</h2>`
    } else if (event.target.value==""){
        TextLanding.innerHTML=""
    }else{
        a.map(item=>{
            TextLanding.innerHTML+=`<div>${item.replace(`${event.target.value}`,`<i>${event.target.value}</i>`)}</div>`
        })
    }
})

