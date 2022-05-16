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
    dataArray.splice(param, 1)
    localStorage.setItem("data", JSON.stringify(dataArray))
    creatingTable()
}

let currentCounter = document.getElementById("currentCounter")
let amountCounter = document.getElementById("amountCounter")



        ///             ///
       /// Pagination  ///
      ///             ///
   
let paginationObject = {
    currentPage: 1,
    recordsPerPage: 5,
    total: Math.ceil(dataArray.length / 5)
}


function pagination(){
    let {recordsPerPage, currentPage} = paginationObject;
  
    let min = (recordsPerPage * currentPage) - (recordsPerPage)
    let max = (recordsPerPage * currentPage)

    let paginatedDataArray = dataArray.filter((item, index)=>{
        if (index >= min && index < max){
            return item
        }
    })
    function Counting(){
        currentCounter.innerHTML = paginatedDataArray.map(object => object.amount).reduce((a,b)=>Number(a) + Number(b))
        amountCounter.innerHTML = dataArray.map(object => object.amount).reduce((a,b)=>Number(a) + Number(b))
    }
    Counting()

    let buttonNext = document.getElementById("buttonNext");
    let buttonPrev = document.getElementById("buttonPrev");
    let pageCount = document.getElementById("pageCount");

    buttonNext.onclick = () => {
        paginationObject.currentPage++
        pagination("next")
    }
    buttonPrev.onclick = () => {
        paginationObject.currentPage--
        pagination("prev")
    }

    // Validate page
    if (paginationObject.currentPage < 1) paginationObject.currentPage = 1;
    if (paginationObject.currentPage > paginationObject.total) paginationObject.currentPage = paginationObject.total;


    pageCount.innerHTML = `${paginationObject.currentPage}/${Math.ceil(paginationObject.total)}`;

    if (paginationObject.currentPage == 1) {
        buttonPrev.style.visibility = "hidden";
    } else {
        buttonPrev.style.visibility = "visible";
    }

    if (paginationObject.currentPage == paginationObject.total) {
        buttonNext.style.visibility = "hidden";
    } else {
        buttonNext.style.visibility = "visible";
    }


    creatingTable(paginatedDataArray)
}

//Table sukurimo funkcija
function creatingTable(TheArray){
    displayTable.innerHTML=""
    let keys = Object.keys(dataArray[0])
    TheArray.map((object, index)=>{

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
                    creatingTable(dataArray)
                    editModal.style.display = "none"
                }
        }
        
        for (let key of keys){
            tableRow.innerHTML += `<td class="col-3">${object[key]}</td>`    
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

        
        for (let x = 0; x<1; x++) {
            tableRow.appendChild(editButton)
            tableRow.appendChild(delButton)
            displayTable.appendChild(tableRow)
        }
    })
}
pagination()

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

let amountHeader = document.getElementById("amountHeader")
let nameHeader = document.getElementById("nameHeader")
let dateHeader = document.getElementById("dateHeader")

    amountHeader.onclick = () => filterNumber(amountBolean)
    nameHeader.onclick = () => filterName(nameBolean)
    dateHeader.onclick = () => filterDate(dateBolean)

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
    creatingTable(dataArray)
}
function filterName(paramB){
    if (paramB){
        dataArray.sort((a,b) => a.name.localeCompare(b.name))
        nameBolean = false
    }else{
        dataArray.sort((a,b) => b.name.localeCompare(a.name))
        nameBolean = true
    }
    creatingTable(dataArray)
}
function filterDate(paramB){
    if (paramB){
        dataArray.sort((a,b) => a.date.localeCompare(b.date))
        dateBolean = false
    }else{
        dataArray.sort((a,b) => b.date.localeCompare(a.date))
        dateBolean = true
    }
    creatingTable(dataArray)
}

