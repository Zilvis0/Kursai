// const me = {
//     firstName:"Zilvinas",
//     lastName:"Pusnys",
//     age:30,
//     milestones: ["Dirba", "Apsimeta, kad dirba"]   
// }

// console.log(me)
// console.log(me.milestones[0],"/", me.milestones[1])
// console.log(me.firstName)

const TableBody = document.getElementById("tableid")

const characters = [

    {

        name: 'Luke Skywalker',

        height: '172',

        mass: '77',

        eye_color: 'blue',

        gender: 'male',

    },

    {

        name: 'Darth Vader',

        height: '202',

        mass: '136',

        eye_color: 'yellow',

        gender: 'male',

    },

    {

        name: 'Leia Organa',

        height: '150',

        mass: '49',

        eye_color: 'brown',

        gender: 'female',

    },

    {

        name: 'Han Solo',

        height: '188',

        mass: '84',

        eye_color: 'blue',

        gender: 'male',

    },

];

const CharactersShorterThan180 = characters.filter(character => character.height < 180)
const CharactersHeavierThan80 = characters.filter(character => character.mass > 80)
const BlueEyesWhiteDragon = characters.filter(object=>object.eye_color==="blue")
const CharactersThatAreMale = characters.filter(object=> object.gender === "male")

// const SortingByName = characters.sort((a, b)=> a.name > b.name ? 1 : -1)
// const SortingByHeight = characters.sort((a, b)=> a.height - b.height)
// const SortingByMass = characters.sort((a, b)=> a.mass - b.mass)
// const SortingByEyes = characters.sort((a, b)=> a.eye_color - b.eye_color)
// const SortingByGender = characters.sort((a, b)=> (a.gender > b.gender ? 1 : -1))
// const SortingByGender2 = characters.sort((a, b)=> (b.gender < a.gender ? 1 : -1))


function Sorting(){
    const SortingByName = characters.sort((a, b)=> a.name > b.name ? 1 : -1)
    TableCreation(SortingByName)
}

function Sorting2() {
    const SortingByHeight = characters.sort((a, b)=> a.height - b.height)
    TableCreation(SortingByHeight)
}
function Sorting3() {
 const SortingByMass = characters.sort((a, b)=> a.mass - b.mass)
    TableCreation(SortingByMass)
}
function Sorting4() {
    const SortingByEyes = characters.sort((a, b)=> a.eye_color - b.eye_color)
    TableCreation(SortingByEyes)
}
function Sorting5() {
    const SortingByGender = characters.sort((a, b)=> (a.gender > b.gender ? 1 : -1))
    TableCreation(SortingByGender)
}
function Sorting6() {
    const SortingByGender2 = characters.sort((a, b)=> (b.gender < a.gender ? 1 : -1))
    TableCreation(SortingByGender2)
}

const Headersai = ["Name", "Height", "Mass", "Eye Color", "Gender"]

const keys = Object.keys(characters[0])
function TableCreation(value) {
    TableBody.innerHTML=""



    value.map((character) => {
        const TableRow = document.createElement("tr")
        for (let key of keys) {
            const TableData = document.createElement("td")
            TableData.textContent = character[key]
            TableRow.appendChild(TableData)
        }
        TableBody.appendChild(TableRow) 
    })
    BuildTotalRow()
}
TableCreation(characters)




function CharStats(value) {
  return characters.map((character=>Number(character[value]))).reduce((a, b)=>a+b)
}


function BuildTotalRow() {
    const TableRow = document.createElement("tr")
    
    for (let key of keys){
        const TableData = document.createElement("td")
        TableData.classList.add("fw-bold")
        if (key==="height" || key==="mass"){
        TableData.textContent = CharStats(key)
        } else if (key==="name"){
            TableData.textContent = characters.map(character=>character.name.length).reduce((a, b)=> a + b)
        }
        TableRow.appendChild(TableData)
    }
    TableBody.appendChild(TableRow)
}

function getFirstNames() {
    return characters.map(character => character.name.split(" ")[0])    
}

// Variantas naudojant MAP metoda su funkcija
function getMassAbove80() {
    // return butinas ir tada ismapinam Array. Jame esancius
    // objektus issirenkam pagal "mass" kategorija
    return characters.map(character=>character.mass)
    // gautam "mass" Array naudojam filter metoda ir gaunam
    // tik tuos variantus, kurie yra daugiau nei 80
    .filter(Above80 => Above80 > 80)
}

console.log(getMassAbove80())
// Variantas naudojant const su funkcija
// funkcija priskiriama const, butini zenklai = () nurodyti,
// kad funkcija. tada => kad parasyt kas jos viduj
const getAllCharactersWithGreaterMassThan80 = () => characters
// naudojam filter, kad prieiti prie objektu ir dar viena
// funkcija, kad prieiti prie objektu turinio ir "mass" kateg
// ir tada rasti tuos atvejus kai mass>80
.filter((character => character.mass > 80))

console.log(getAllCharactersWithGreaterMassThan80())
// Variantas be funkcijos
// Tas pats variantas tik vietoj funkcijos, susikuriam const
// nauja

// console.log(CharactersHeavierThan80)
// console.log(CharactersShorterThan180)
// console.log(CharactersThatAreMale)
// console.log(BlueEyesWhiteDragon)


// getting into characters inside and getting "some" Boolean
// of specific value, like "gender" and then if "gender" is "male"
const AreThereMaleCharacters = characters.some(object=>object.gender==="male")



// getting into characters inside and filtering to get Array
// of only males. Then using "some" method on the newly got Array
// to get the specific ones, that are taller than 2m
const AreTheMaleTallerThan2m = characters.filter(object=>object.gender==="male").some(newArraysFilteredObject=>newArraysFilteredObject.height>200)


const AreThereCharsTallerThan170ButNotBrownEyes = characters.filter(object=>object.height>170).some(object=>object.eye_color!=="brown")



