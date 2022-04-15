const YOU = document.getElementById("YourChoice")
const AI = document.getElementById("AIChoice")
let UrChoice
const Winner = document.getElementById("Winner")

function Options(choice) {
    UrChoice = choice
    AI.textContent = Math.floor(Math.random() * 3) + 1
   
    if (UrChoice == 'Rock'){
        YOU.textContent = "Rock"
    }else if (UrChoice =='Paper') {
        YOU.textContent = "Paper"
    }else {
        YOU.textContent = "Scissors"
    }

    if (AI.textContent== 1) {
        AI.textContent = "Rock"
    } else if (AI.textContent== 2) {
        AI.textContent = "Paper"
    } else if (AI.textContent== 3) {
        AI.textContent = "Scissors"
    }

    if (YOU.textContent==AI.textContent){
        Winner.textContent = "Draw"
    } else if (YOU.textContent=="Rock" && AI.textContent=="Paper" || YOU.textContent=="Paper" && AI.textContent=="Scissors" || YOU.textContent=="Scissors" && AI.textContent=="Rock") {
        Winner.textContent = "Loser"
    } else if (YOU.textContent=="Rock" && AI.textContent=="Scissors" || YOU.textContent=="Paper" && AI.textContent=="Rock" || YOU.textContent=="Scissors" && AI.textContent=="Paper") {
        Winner.textContent = "Winner"
    }
}

let Tekstas = document.getElementById("text")

function Up() {
    Tekstas.value = Tekstas.value.toUpperCase()
}

let Lorem = document.getElementById("Lorem")

function Srch() {

    console.log(Lorem.textContent.includes(Tekstas.value))

    return Lorem.textContent.includes(Tekstas.value)
}

function ChckNRpl() {
    if (Srch()) {
        Lorem.innerHTML = Lorem.textContent.replace(Tekstas.value, Tekstas.value.bold())
    }
}