//prisiskiriam elementus is dokumento
let nameInput = document.getElementById("nameInput")
let amountInput = document.getElementById("amountInput")
let inputButton = document.getElementById("inputButton")


// prisiskiriam laikus
let month  = String(new Date().getMonth() + 1).padStart(2, '0')
let day = String(new Date().getDate()).padStart(2, '0')
let year =new Date().getFullYear()
let hours = String(new Date().getHours()).padStart(2, '0')
let minutes = String(new Date().getMinutes()).padStart(2, '0')
let time = (`${hours}:${minutes}`)
//paskiriam norima formatavima esamam
let inputDate = (`${year}-${month}-${day} ${time}`)
console.log(inputDate)
//naujas kintamasis senam array istraukti is localStorage
let pulledInfo

//funkcija skirta gauti local storage info
function get(){
    pulledInfo = JSON.parse(localStorage.getItem("data"))
}
//visad iskvieciam funckija, kad po reload turetume sena info
get()

// settinam sena array, o jei jo nera, tada sukurti tuscia
let dataArray = pulledInfo || []
let newData = {
    name: nameInput,
    amount: amountInput,
    date: ""
}


// funckija prideti input values 
// i array ir ta array i localStorage

function add(){
    newData = {
    name: nameInput.value,
    amount: Number(amountInput.value),
    date: inputDate
    }
    if (nameInput.value !== "" && amountInput.value !== ""){
        dataArray.push(newData)
        localStorage.setItem("data", JSON.stringify(dataArray))
    }
}

//button onclick prideda nauja object
//su input values i array
inputButton.onclick = () => add()






// // Taip prisiskirt redaguotina teksta bus galima inputam
// // let i nera butinas, duomenis trauksi is localStorage
// let i = 3
// nameInput.value = "Testas2"
// amountInput.value = Number(i)

// console.log(nameInput.value)


