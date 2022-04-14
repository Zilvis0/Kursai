const NumberArea = document.getElementById("NumberArea")
let FirstValue
let PrevNumber
let Symbol
let isEqualsClicked = false
let is4Clicked = false
const AnswerArea = document.getElementById("AnswerArea")

NumberArea.textContent = 0
AnswerArea.textContent = 0

function JhinMain(Curtain) {
    is4Clicked = Curtain
    if (is4Clicked == true) {
        document.body.style.backgroundColor = "red";
    } else document.body.style.backgroundColor = "blue";
}


if (NumberArea==4) {
    document.body.style.backgroundColor = "green";
}

function AddNumber(number) {
    if (Number(NumberArea.textContent)==0 && NumberArea.textContent !="0.") {
        NumberArea.textContent = number;
    } else {
    NumberArea.textContent += number;
    }
    if (number==4) {
        JhinMain(true)
    } else JhinMain(false)
}


function DeleteLast() {
    NumberArea.textContent = NumberArea.textContent.slice(0, -1)
    if (NumberArea.textContent.length==0){
        NumberArea.textContent=0
    }
}
// function Addition() {
//     FirstValue = Number(NumberArea.textContent)
//     NumberArea.textContent = 0
// }
// function Division() {
//     FirstValue = Number(NumberArea.textContent)
//     NumberArea.textContent = 0
// }

// function Equal() {
//     SecondValue = NumberArea.textContent
//     Answer = Number(FirstValue) + Number(SecondValue)
//     NumberArea.textContent = Answer
// }

function MathAction(LastSymbol) {

if (PrevNumber && !(isEqualsClicked)) {
    Equals(false)
    }

    PrevNumber = Number(NumberArea.textContent)
    NumberArea.textContent = 0
    Symbol = LastSymbol
    AnswerArea.textContent = PrevNumber
}


function Equals(clicked) {
    isEqualsClicked = clicked
if (Symbol == '+') {
    NumberArea.textContent = PrevNumber + Number(NumberArea.textContent)
    } else if (Symbol == '-') {
        NumberArea.textContent = PrevNumber - Number(NumberArea.textContent)
    } else if (Symbol == '/') {
        NumberArea.textContent = PrevNumber / Number(NumberArea.textContent)
    } else if (Symbol == '*') {
        NumberArea.textContent = PrevNumber * Number(NumberArea.textContent)
    }
    AnswerArea.textContent = NumberArea.textContent
}

function SquareRoot() {
    if (NumberArea.textContent==0) {
        NumberArea.textContent = Math.sqrt(Number(AnswerArea.textContent))
    } else {
        NumberArea.textContent=Math.sqrt(Number(NumberArea.textContent))
        AnswerArea.textContent = NumberArea.textContent
    }
}


function AddDot() {
    NumberArea.textContent = NumberArea.textContent + "."
}

function Rounding() {
    NumberArea.textContent = Math.round(Number(NumberArea.textContent))
}

function ClearEverything() {
    PrevNumber = 0
    NumberArea.textContent = 0
    AnswerArea.textContent = 0
}
