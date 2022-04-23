// const me = {
//     name: "Zilvinas",
//     surname: "Pusnys",
//     age: 30
// }

// const moreOfMe = {
//     gender: "Male",
//     hobby: ["Napping", "Eating", "Asking ridiculous questions"],
//     height: 175
// }

// const evenMoreOfMe = Object.assign(me, moreOfMe)
// console.log(me)


const TableBody = document.getElementById("table")
const group = [
    {
        firstName: "Zilvinas",
        lastName: "Pusnys",
        age: 30,
        gender: "Male",
        hobby: "Napping",
        height: 175,
        programmingSkill: 1
    },
    {
        firstName: "Rokas",
        lastName: "Skinderis",
        age: 28,
        gender: "Male",
        hobby: "Singing",
        height: 194,
        programmingSkill: 5
    },
    {
        firstName: "Ieva",
        lastName: "Staseviciute",
        age: 33,
        gender: "Female",
        hobby: "Riding motorcycle",
        height: 174,
        programmingSkill: 2
    },
    {
        firstName: "Eimantas",
        lastName: "Jurenkovas",
        age: 49,
        gender: "Male",
        hobby: "Fishing",
        height: 172,
        programmingSkill: 3
    },
    {
        firstName: "Simona",
        lastName: "Sleviene",
        age: 30,
        gender: "Female",
        hobby: "Knitting toys",
        height: 170,
        programmingSkill: 4
    },
    {
        firstName: "Rokas",
        lastName: "Virvicius",
        age: 27,
        gender: "Male",
        hobby: "Bassketball",
        height: 185,
        programmingSkill: 4
    }
]

const keys = Object.keys(group[0])
function createTable(reductions) {
    TableBody.innerHTML = ""
    reductions.map(obj => {
    const tableRow = document.createElement("tr")
    for (objkey of keys){
        const tableData = document.createElement("td")
        tableData.textContent = obj[objkey]
        tableRow.appendChild(tableData)
    } 
    TableBody.appendChild(tableRow)
    })
    maximumRow()
}




function maximumRow() {
    const tableRow = document.createElement("tr")
    function SpecificValue(value){
        return Math.max(...group.map(person => Number(person[value])))
    }
   
    for (let param of keys) {
        const tableData = document.createElement("td")
        tableData.classList.add("fw-bold")
        if(param == 'height' || param == 'age' || param == 'programmingSkill'){
            tableData.textContent = SpecificValue(param)
            tableData.classList.add("fw-bold", "border-dark", "border-top", "border-2")
        }
        tableRow.appendChild(tableData)
    }
    TableBody.appendChild(tableRow)
}

function Sort(value){

    if (value == 'firstName' || value == 'lastName' || value == 'gender' || value == 'hobby'){
    const OrganisedByLetters = group.sort((a, b)=>a[value].localeCompare(b[value]))
    createTable(OrganisedByLetters)
    console.log(OrganisedByLetters)
    } else if (value == 'age' || value == 'height' || value == 'programmingSkill'){
    const OrganisedByNumbers = group.sort((a, b)=>a[value] - b[value])
    createTable(OrganisedByNumbers)
    console.log(OrganisedByNumbers)
    } else {
        const DefaultSorting = group.sort((a, b)=>a.firstName.localeCompare(b.firstName))
        createTable(DefaultSorting)
        console.log(DefaultSorting)
    }
}

function Reducing(value){
    if (value == 'All'){
        createTable(group)
    } else if (value == 'Males'){
        const Males = group.filter(person => person.gender == "Male")
        createTable(Males)
    } else if (value == 'Females'){
        const Females = group.filter(person => person.gender == "Female")
        createTable(Females)
    } else if (value == 'Youngsters'){
        const Youngsters = group.filter(person => person.age < 30)
        createTable(Youngsters)
    } else if (value == 'TallBois'){
        const TallBois = group.filter(person => person.height > 175)
        createTable(TallBois)
    } else if (value == '!Hackers'){
        const NotHackers = group.filter(person => person.programmingSkill < 5)
        createTable(NotHackers)
    } else {
        createTable (group)
    }
}




createTable(group)