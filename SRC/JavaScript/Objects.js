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
function createTable() {
    TableBody.innerHTML = ""
    group.map(obj => {
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

createTable()


// function maximumRow() {
//     const tableRow = document.createElement("tr")
//     maxValue = Object.values(group).
    
// }