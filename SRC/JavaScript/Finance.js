//prisiskiriam elementus is dokumento
let nameInput = document.getElementById("nameInput")
let amountInput = document.getElementById("amountInput")
let inputButton = document.getElementById("inputButton")
let displayTable = document.getElementById("displayTable")



// prisiskiriam laikus
let month  = String(new Date().getMonth() + 1).padStart(2, '0')
let day = String(new Date().getDate()).padStart(2, '0')
let year =new Date().getFullYear()
let hours = String(new Date().getHours()).padStart(2, '0')
let minutes = String(new Date().getMinutes()).padStart(2, '0')
let time = (`${hours}:${minutes}`)
//paskiriam norima formatavima esamam
let inputDate = (`${year}-${month}-${day} ${time}`)
//naujas kintamasis senam array istraukti is localStorage
let pulledInfo

//funkcija skirta gauti local storage info
function get(){
    pulledInfo = JSON.parse(localStorage.getItem("data"))
}
//visad iskvieciam funckija, kad po reload turetume sena info
get()

// settinam sena array, o jei jo nera, tada sukurti tuscia
let dataArray = pulledInfo || []
let newData = {
    name: nameInput,
    amount: amountInput,
    date: ""
}


// funckija prideti input values 
// i array ir ta array i localStorage

function add(){
    displayTable.innerHTML = ""
    newData = {
    name: nameInput.value,
    amount: Number(amountInput.value),
    date: inputDate
    }
    if (nameInput.value !== "" && amountInput.value !== ""){
        dataArray.push(newData)
        localStorage.setItem("data", JSON.stringify(dataArray))
    }
    nameInput.value = ""
    amountInput.value = ""
    creatingTable()
}

//button onclick prideda nauja object
//su input values i array
inputButton.onclick = () => add()


//delete info funkcija
function del(param){
    displayTable.innerHTML = ""
    dataArray.splice(param, 1)
    localStorage.setItem("data", JSON.stringify(dataArray))
    creatingTable()
}



//Table sukurimo funkcija
function creatingTable(){
    displayTable.innerHTML=""
    let keys = Object.keys(dataArray[0])
    dataArray.map((object, index)=>{

        let tableRow  = document.createElement("tr")
        tableRow.classList.add("row")
        tableRow.innerHTML += `<td class="col-1">${index + 1}</td>`

        //edit info funkcija

        function edit(param){
        editModal.style.display = "block"
        editName.value = dataArray[index].name
        editAmount.value = dataArray[index].amount
             // save changes veikimas
             let saveChanges = document.getElementById("saveChanges")
       
                saveChanges.onclick = () => savingChanges()
       
                function savingChanges(){
                    displayTable.innerHTML = ""
                    dataArray[index].name = editName.value
                    dataArray[index].amount = editAmount.value
                    dataArray[index].date = inputDate
                    localStorage.setItem("data", JSON.stringify(dataArray))
                    creatingTable()
                    editModal.style.display = "none"
                }
        }

        for (let key of keys){
            tableRow.innerHTML += `<td id="${index + [key]}" class="col-3">${object[key]}</td>`    
        }
        
        // edit button
        let editButton = document.createElement("button")
        editButton.textContent = "edit"
        editButton.classList.add("btn", "btn-outline-info", "col-1")
        editButton.onclick = () => edit(index)
        //
        //delete button
        let delButton = document.createElement("button")
        delButton.textContent = "delete"
        delButton.classList.add("btn", "btn-outline-danger", "col-1")
        delButton.onclick = () => del(index)
        //
        
        tableRow.appendChild(editButton)
        tableRow.appendChild(delButton)
        displayTable.appendChild(tableRow)
    })
}
creatingTable()


let editModal = document.getElementById("editModal")
let closeButton = document.getElementById("close")
let editName = document.getElementById("editName")
let editAmount = document.getElementById("editAmount")


closeButton.onclick = () =>{
    editModal.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == editModal){
        editModal.style.display = "none"
    }
}

//Susikuriam bolean, kad tikrinti kuria kryptim isfiltrruota buvo

let nameBolean = true
let amountBolean = true
let dateBolean = true

let nameHeader = document.getElementById("nameHeader")
let amountHeader = document.getElementById("amountHeader")
let dateHeader = document.getElementById("dateHeader")

amountHeader.onclick = () => filterNumber(amountBolean)
nameHeader.onclick = () => filterName(nameBolean)
dateHeader.onclick = () => filterName(dateBolean)
//Kuriam filter funkcija
//jei paramB yra true, filtruojam i viena puse, jei false i kita

function filterNumber(paramB){

    if (paramB){
        dataArray.sort((a,b) => Number(a.amount) - Number(b.amount))
        amountBolean = false
    }else{
        dataArray.sort((a,b) => Number(b.amount) - Number(a.amount))
        amountBolean = true
    }
    creatingTable()
}
function filterName(paramB){
    if (paramB){
        dataArray.sort((a,b) => a.name.localeCompare(b.name))
        paramB = false
    }else{
        dataArray.sort((a,b) => b.name.localeCompare(a.name))
        paramB = true
    }
    creatingTable()
}

// dataArray.sort((a,b) => Number(a.amount) - Number(b.amount))
// creatingTable()