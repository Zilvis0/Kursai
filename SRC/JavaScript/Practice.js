const DataFirst = "StringData"
let DataSecond = 2
const DataThird = true

const ArraySample = ["consists", "of", "many", "elements", true, 2]
let ObjectSample = {
    //has keys and values. End separated by comma
    keyNumberOne : "Key'sValue",
    keyNumberTwo : "Also a string",
    keyNumberThree: 42,
    keyNumberFour: false,
}

// function Hello(firstWord, secondWord) {
//     console.log("Hello World", "words as a one string")
//     console.log("Hello", "World", "words as separate strings")
//     console.log(firstWord, secondWord, "both words as variables in function")
// }

// Hello("Hello", "World")

// console.log(DataFirst)

// function Loading() {
//     if (DataSecond == 2){
//         console.log(DataSecond)
//     } else {
//         console.log(DataFirst)
//     }
// }

// DataSecond.onload = Loading()

// function checkingArray() {
//     return ArraySample[2]
// }
// console.log(checkingArray())

// const additionToArray = "Adding is fun"

// ArraySample.push(additionToArray)
// console.log(ArraySample)
// // also no need for const or let
// ArraySample.push("Adding differently")
// console.log(ArraySample)

// //Splice method is used to cut out unwanted values from array

// ArraySample.splice(0, 1)

// console.log(ArraySample)

// //Creating cycles

// function Cycle(){

//     //nurodom kintamaji ciklo
//     //siuo atveju "x", kiek kartu kartosis ciklas
//     //x < 10 = kol x bus maziau nei 10
//     //x++ reiskia, kad su kiekvienu ciklu x reiksme pakils po viena
//     for (let x = 0; x < 10; x++){
//         console.log(x + 1)
//     }
// }

// Cycle()

// //pakeiciam array objects i array object's index'a
// const NowItsNumbersArray = ArraySample.map((object, index) => object = index)
// console.log(NowItsNumbersArray, "skaiciu array")

// //su filter ir (n => n%2) ta pacia funkcija isrenkam i nelyginius skaicius
// console.log(ArraySample.map((object, index) => object = index).filter(n => n%2))
// //arba trumpiau
// console.log(NowItsNumbersArray.filter(n => n%2))


// function SameAsBefore(a, b){
//     console.log(a, b)
// }

// SameAsBefore("My", "Words")

// const newArray = [6, 13, 21, 7, 19]

// //suskaiciuojam suma naujos array

//let sum = newArray.reduce((a,b)=> a+b)
//console.log(sum)

// function ShowingNewArray(differentArrays){
//     if (differentArrays==1){
//     console.log(newArray)
//     }else if (differentArrays == 2){
//     console.log(NowItsNumbersArray)
//     }
// }

// ShowingNewArray(1)
// console.log("Naujas Array")
// ShowingNewArray(2)
// console.log("Senas Array")


//--------------------------------------------
//Nuo cia muted-------------------------------
//--------------------------------------------


//Gaunam turimo Objekto keys naudojant"Object.keys"
let ObjectKeys = Object.keys(ObjectSample)
//susikuriam funckija, kuria veliau iskviesim
function ShowingValues(){
//Gautus Objekto keys turime array forma, todel juos ismapinam
//pasivadinam kintamaji kaip norim. Siuo atveju tai - "key"
//Imam visa Objekta i cosnole.log ir vietoj xxxx.keyvalue
//Naudojam [], kur irasom kintamaji. Sikart tai "key"
ObjectKeys.map(key => console.log(ObjectSample[key]))
}

ShowingValues()

console.log(ObjectKeys)

//Prie Turimu Keys/Values pridedam naujus Keys/Values

// Object.assign(ObjectSample, {DataFirst: "StringData"}, {DataSecond: 2})

// console.log(ObjectSample)

//======= Alternatyvus budas ==============

ObjectSample.keyNumberFive = "Additional info"
ObjectSample.keyNumberSix = true

console.log(ObjectSample, "new sample")


//Naujas array
let evenNewerArray = []
//per cikla idedam objektus. Kiek ciklas truks, tiek
//objektu ir idesim

function ShowingObjects(){
for (x=0; x<5; x++){
    evenNewerArray.push(ObjectSample)
}
console.log(evenNewerArray)
}

const inputArea = document.getElementById("inputId")
const inputBtn = document.getElementById("inputBtnId")

let inputTextLanding = document.getElementById("inputTextLanding")
let inputLandingArray = ["hello"]
inputTextLanding.textContent = inputLandingArray

const theValue = inputArea.value
const isValueEmptyOrExits = theValue == "" || inputLandingArray.includes(theValue)
console.log(theValue, inputLandingArray)
function ShowInputText() {
    if (!isValueEmptyOrExits){
        inputLandingArray.push(inputArea.value)
        console.log(inputArea.value, inputLandingArray, "pries isvalant")
        inputArea.value = ""
        console.log(inputArea.value, inputLandingArray, "po isvalymo")
        inputTextLanding.textContent = inputLandingArray
        console.log(inputArea.value, inputLandingArray, "update")
    } else{
        console.log("Missed something")
        console.log(inputLandingArray.includes(theValue))
        console.log(inputLandingArray)
    }
}


inputBtn.onclick = () => {
    ShowInputText()
}

