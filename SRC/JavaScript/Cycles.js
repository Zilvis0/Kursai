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



const keys = Object.keys(characters[0])
function TableCreation() {
    characters.map((character) => {
        const TableRow = document.createElement("tr")
        for (let key of keys) {
            const TableData = document.createElement("td")
            TableData.textContent = character[key]
            TableRow.appendChild(TableData)
        }
        TableBody.appendChild(TableRow) 
    })
}
TableCreation()

const allHeight = characters.map((character=>Number(character.height))).reduce((sum, number)=>sum+number)


function BuildTotalRow() {
    const TableRow = document.createElement("tr")
    for (let key of keys){
        if (key=="height"){
        const TableDataHeader = document.createElement("td")
        const TableData = document.createElement("td")
        TableDataHeader.textContent = "Total"
        TableData.textContent = allHeight
        TableRow.appendChild(TableDataHeader)
        TableRow.appendChild(TableData)
        }
    TableBody.appendChild(TableRow) 
    }
}
BuildTotalRow()

function getFirstNames() {
    return characters.map((character => character.name.split(" ")[0]))
    
}

console.log(getFirstNames())
console.log(allHeight)
