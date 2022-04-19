const ToDo = document.getElementById("todo")
const Done = document.getElementById("done")

let ListToDo = ["A", "B", "C"]
let ListDone = ["1", "2", "3"]

let InputArea = document.getElementById("InputArea")

// ToDo.innerHTML = ListToDo.join("<br>")
// Done.innerHTML = ListDone.join("<br>")

// function TransferToDone() {
//         ListDone = ListToDo.slice(0, 2)
//         ListToDo = ListToDo.splice(2, 2) 
//         UpdateList()
// }
    
function AddToDo() {
    const value = InputArea.value
    const isValueEmptyOrExisting = value == "" || ListToDo.includes(value) || ListDone.includes(value)

    if (!isValueEmptyOrExisting) {
        ListToDo.push(value)
        ListToDo.sort()
        UpdateList()
        InputArea.value = ""
    }
}


function UpdateList() {
 ToDo.innerHTML = ""
 Done.innerHTML = ""

 TransferItems(ListDone, ListToDo, Done)
 TransferItems(ListToDo, ListDone, ToDo)
}

function TransferItems(fromArray, toArray, list){
    for (let i = 0; i < fromArray.length; i++){
        const divItem = document.createElement("div")
        divItem.textContent = fromArray[i]
        divItem.onclick = () => {
        toArray.push(fromArray.splice(i, 1)[0])
        toArray.sort()
        UpdateList()
        }
    
         list.appendChild(divItem)
     }
}

UpdateList()


// `<div>${ListDone[index]}</div>`

const array = []

for (let i = 0; i < 10; i++){
    array.push(Math.floor(Math.random()*10)+1)
}

console.log(array)

const filteredArray = []

function filterArray() {
    for (let shazam of array){
        if (shazam >=5){
            filteredArray.push(shazam)
        }
    }
}

filterArray()
console.log("Filtered", filteredArray)

const UpdatedArray = array.filter((kaboom) => kaboom <=5)
console.log("Updated", UpdatedArray)

const ReducedArray = UpdatedArray.reduce((sum, current) => sum + current)
console.log("Reduced", ReducedArray)

const someArray = filteredArray.some((wham) => wham > 1)
console.log("Some", someArray)