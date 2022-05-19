//prisiskiriam elementus is dokumento
let nameInput = document.getElementById("nameInput")
let amountInput = document.getElementById("amountInput")
let inputButton = document.getElementById("inputButton")
let displayTable = document.getElementById("displayTable")
let buttonNext = document.getElementById("buttonNext")
let buttonPrev = document.getElementById("buttonPrev")
let pageCount = document.getElementById("pageCount")
let checkBox = document.getElementById("checkBox")
let radioBox = document.getElementById("radioBox")
let currentCounter = document.getElementById("currentCounter")
let amountCounter = document.getElementById("amountCounter")
let Income = document.getElementById("Income")
let Expenses = document.getElementById("Expenses")
let AllMoney = document.getElementById("AllMoney")
let editModal = document.getElementById("editModal")
let closeButton = document.getElementById("close")
let editName = document.getElementById("editName")
let editAmount = document.getElementById("editAmount")
let amountHeader = document.getElementById("amountHeader")
let nameHeader = document.getElementById("nameHeader")
let dateHeader = document.getElementById("dateHeader")

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
    if (checkBox.checked == true){
        newData = {
            name: nameInput.value,
            amount: Number(amountInput.value),
            date: inputDate,
            id: nameInput.value + amountInput.value + inputDate
            }
        checkBox.checked = false
        radioBox.checked = true
    } else {
        newData = {
            name: nameInput.value,
            amount: Number(-amountInput.value),
            date: inputDate,
            id: nameInput.value + amountInput.value + inputDate
            }
    }
    if (nameInput.value !== "" && amountInput.value !== ""){
        dataArray.push(newData)
        localStorage.setItem("data", JSON.stringify(dataArray))
    }
    nameInput.value = ""
    amountInput.value = ""
    pagination()
}

//button onclick prideda nauja object
//su input values i array
inputButton.onclick = () => add()


        ///             ///
       /// Pagination  ///
      ///             ///
let paginatedDataArray
let FilteredDataArray =[]
let isFiltered = false      

let paginationObject = {
    currentPage: 1,
    recordsPerPage: 4,
    total: Math.ceil((isFiltered ? FilteredDataArray.length : dataArray.length) / 4)
}

Income.onclick = () => {
    isFiltered = true
    FilteredDataArray = dataArray.filter(object=>object.amount>=0)
    paginationObject.total = Math.ceil(FilteredDataArray.length / paginationObject.recordsPerPage)
    pagination()
    Counting()
}
Expenses.onclick = () => {
    isFiltered = true
    FilteredDataArray = dataArray.filter(object=>object.amount<0)
    paginationObject.total = Math.ceil(FilteredDataArray.length / paginationObject.recordsPerPage)
    pagination()
    Counting()
}
AllMoney.onclick = () => {
    isFiltered = false
    paginationObject.total = Math.ceil(dataArray.length / paginationObject.recordsPerPage)
    pagination()
    Counting()
}

function Counting(){
    let curTot = paginatedDataArray.map(object => object.amount).reduce((a,b)=>Number(a) + Number(b))
    let totTot = (isFiltered ? FilteredDataArray : dataArray).map(object => object.amount).reduce((a,b)=>Number(a) + Number(b))
    currentCounter.innerHTML = curTot
    amountCounter.innerHTML = totTot
    if (curTot<0){
        currentCounter.style.background = "rgb(217, 31, 17, 0.5)"
    } else{
        currentCounter.style.background = "rgb(31, 204, 29, 0.5)"
    }
    if (totTot<0){
        amountCounter.style.background = "rgb(217, 31, 17, 0.5)"
    }else{
        amountCounter.style.background = "rgb(31, 204, 29, 0.5)"
    }
}
function pagination(){
    let {recordsPerPage, currentPage} = paginationObject;
    let min = (recordsPerPage * currentPage) - (recordsPerPage)
    let max = (recordsPerPage * currentPage)

    if (isFiltered){
        paginatedDataArray = FilteredDataArray.filter((item, index)=>{
            if (index >= min && index < max){
                return item
            }
        })
    } else {
        paginatedDataArray = dataArray.filter((item, index)=>{
            if (index >= min && index < max){
                return item
            }
        })
    }
    Counting()

    buttonNext.onclick = () => {
        paginationObject.currentPage++
        pagination()
    }
    buttonPrev.onclick = () => {
        paginationObject.currentPage--
        pagination()
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
    let keys = ["#", "Name", "Amount", "Date", ""]
    TheArray.map((object, index)=>{

        let tableRow  = document.createElement("tr")
        tableRow.classList.add("row")

        //edit info funkcija

        function edit(){
        editModal.style.display = "block"
        editName.value = object.name
        editAmount.value = object.amount
             // save changes veikimas
             let saveChanges = document.getElementById("saveChanges")
       
                saveChanges.onclick = () => savingChanges()
       
                function savingChanges(){
                    displayTable.innerHTML = ""
                    object.name = editName.value
                    object.amount = editAmount.value
                    object.date = inputDate
                    localStorage.setItem("data", JSON.stringify(dataArray))
                    pagination()
                    editModal.style.display = "none"
                }
        }

        //delete info funkcija
        function del(param){
            dataArray = dataArray.filter(object => object !== param)
            localStorage.setItem("data", JSON.stringify(dataArray))
            pagination()
        }

        for (let key of keys){

                        // edit button
            let editButton = document.createElement("button")
            editButton.textContent = "edit"
            editButton.classList.add("btn", "btn-outline-info", "col-1")
            editButton.onclick = () => edit()
            //
            //delete button
            let delButton = document.createElement("button")
            delButton.textContent = "delete"
            delButton.classList.add("btn", "btn-outline-danger", "col-1")
            delButton.onclick = () => del(object)
            //
            displayTable.appendChild(tableRow)

            if (key === "#"){
                tableRow.innerHTML += `<td class="col-1">${(paginationObject.currentPage*paginationObject.recordsPerPage-paginationObject.recordsPerPage) + index+1}</td>`
            } else if( key === "Name"){
                tableRow.innerHTML += `<td class="col-3">${object.name}</td>`
            }else if( key === "Amount"){
                tableRow.innerHTML += `<td class="col-3">${object.amount}</td>`
                if (object.amount<0){
                    tableRow.style.background = "rgb(222, 90, 67, 0.2)"
                } else {
                    tableRow.style.background = "rgb(153, 240, 81, 0.2)"
                }
            }else if( key === "Date"){
                tableRow.innerHTML += `<td class="col-3">${object.date}</td>`
            } else {
                tableRow.appendChild(editButton)
                tableRow.appendChild(delButton)
            }
        }

        //showAll button

        let showAll = document.getElementById("showAll")
        showAll.onclick = () => {
            paginationObject.currentPage = 1
            paginationObject.recordsPerPage = (isFiltered ? FilteredDataArray.length : dataArray.length)
            paginationObject.total = Math.ceil((isFiltered ? FilteredDataArray.length : dataArray.length))
            pagination()
            pageCount.innerHTML = ""
            buttonNext.style.display = "none"
        }
        //showLess button
        
        let showLess = document.getElementById("showLess")
        showLess.onclick = () => {
            paginationObject.recordsPerPage = 4
            paginationObject.total = Math.ceil((isFiltered ? FilteredDataArray.length : dataArray.length) / 4)
            pagination()
            buttonNext.style.display = "block"
        }   
    })
}
pagination()

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
    pagination()
}
function filterName(paramB){
    if (paramB){
        dataArray.sort((a,b) => a.name.localeCompare(b.name))
        nameBolean = false
    }else{
        dataArray.sort((a,b) => b.name.localeCompare(a.name))
        nameBolean = true
    }
    pagination()
}
function filterDate(paramB){
    if (paramB){
        dataArray.sort((a,b) => a.date.localeCompare(b.date))
        dateBolean = false
    }else{
        dataArray.sort((a,b) => b.date.localeCompare(a.date))
        dateBolean = true
    }
    pagination()
}