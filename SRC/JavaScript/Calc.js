const NumberArea = document.getElementById("NumberArea")
let FirstValue

NumberArea.textContent = 0
function AddNumber(number) {
    if (Number(NumberArea.textContent)==0) {
        NumberArea.textContent = number;
    } else {
    NumberArea.textContent += number;
    }
}


function DeleteLast() {
    NumberArea.textContent = NumberArea.textContent.slice(0, -1)
    if (NumberArea.textContent.length==0){
        NumberArea.textContent=0
    }
}
function Addition() {
    FirstValue = Number(NumberArea.textContent)
    NumberArea.textContent = 0
}
function Division() {
    FirstValue = Number(NumberArea.textContent)
    NumberArea.textContent = 0
}

function Equal() {
    SecondValue = NumberArea.textContent
    Answer = Number(FirstValue) + Number(SecondValue)
    NumberArea.textContent = Answer
}