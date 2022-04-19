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
    const isValueEmptyOrExisting = value = "" || ListToDo.includes(value)

    if (!isValueEmptyOrExisting) {
        ListToDo.push(value)
        UpdateList()
    }

}


function UpdateList() {
    ToDo.innerHTML = ""
    Done.innerHTML = ""

    for (let index = 0; index < ListToDo.length; index++){
        const divElement = document.createElement("div")
        divElement.textContent = ListToDo[index];
        divElement.onclick = () => {
            ListDone.push(ListToDo.splice(index, 1));
            UpdateList()
        }
        ToDo.appendChild(divElement)
    }
    // for (let index = 0; index < ListDone.length; index++){
    //     Done.innerHTML += `<div>${ListDone[index]}</div>`
    // }
    for (let index = 0; index < ListDone.length; index++){
        const divElement = document.createElement("div")
        divElement.textContent = ListDone[index];
        divElement.onclick = () => {
            ListToDo.push(ListDone.splice(index, 1));
            UpdateList()
        }
        Done.appendChild(divElement)
    }

}

UpdateList()


// `<div>${ListDone[index]}</div>`