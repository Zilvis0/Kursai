const RandomArray = [
{
first: "firstValue",
second: "secondValue"
},
{
first: "firstValue1",
second: "secondValue1"
},
{
first: "firstValue2",
second: "secondValue2"
},
{
first: "firstValue3",
second: "secondValue3"
},
{
first: "firstValue4",
second: "secondValue4"
},
{
first: "firstValue5",
second: "secondValue5"
}
]


let listArea = document.getElementById("ListArea")

RandomArray.map(item =>{ 
    let listItem = document.createElement("li")
    listItem.textContent = item.first
    listItem.classList.add("p-3", "bg-warning")
    let listItem2 = document.createElement("div")
    listItem2.classList.add("border-bottom", "border-1", "borer-dark")
    listItem2.textContent = item.second
    listItem2.style.display = "none"
    listItem.addEventListener("mouseenter", () =>{
        listItem2.style.display = "block"
    })
    listItem.addEventListener("mouseleave", () =>{  
        listItem2.style.display = "none"  
    })
    listItem.appendChild(listItem2)
    listArea.appendChild(listItem)
}
)

const buttonElement = document.getElementById("button")

buttonElement.addEventListener("mouseenter", () =>{
    buttonElement.textContent = "You're hovering me"
})
buttonElement.addEventListener("mouseleave", () =>{
    buttonElement.textContent = "You've left me"
})
buttonElement.addEventListener("click", () =>{
    buttonElement.textContent = "You've clicked me"
})

let inputElement = document.getElementById("input")

inputElement.addEventListener("keyup", (event) =>{

    console.log(event.target.value)
})

let inputValid = document.getElementById("inputValid")
let validText = document.getElementById("validText")

inputValid.addEventListener("keyup", (event) =>{
    if (event.target.value == "Labas"){
        validText.style.display = "none"
    } else {
        validText.style.display = "block"
    }
})

const loginBtn = document.getElementById("login")
function cookiesTest() {
    document.cookie = "randomtext"
}

if (document.cookie){
    loginBtn.style.display="none"
}