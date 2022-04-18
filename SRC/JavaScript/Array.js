const ToDo = document.getElementById("todo")
const Done = document.getElementById("done")

let ListToDo = ["A", "B", "C"]
let ListDone = ["1", "2", "3"]

let InputArea = document.getElementById("InputArea")

// ToDo.innerHTML = ListToDo.join("<br>")
// Done.innerHTML = ListDone.join("<br>")

function TransferToDone() {
    if (InputArea.value == 0) {
        Done.innerHTML = ToDo.innerHTML
        
    } else {
        ListToDo.push(InputArea.value)
        UpdateList()
        }
        InputArea.value = ""
   }
    

function UpdateList() {
    // ToDo.innerHTML = ListToDo.join("<br>")
    // Done.innerHTML = ListDone.join("<br>")

    for (let index = 0; index < ListToDo.length; i++) {
        ListToDo.innerHTML += `<div>${ListToDo[index]}</div>`
    }
    for (let index = 0; index < ListDone.length; i++) {
        ListDone.innerHTML += ListDone[index]
    }

}

// `<div>${ListDone[index]}</div>`