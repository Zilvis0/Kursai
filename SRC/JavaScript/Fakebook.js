//URLS

const baseUrl = "https://randomuser.me/api/";
const people100 = "?results=100";
const feedInfo = "http://www.boredapi.com/api/activity/"


//Data

let people
let userPhoto = document.getElementById("userPhoto")
let userInfo = document.getElementById("userInfo")
let feed = document.getElementById("feed")
let feedWrapper = document.getElementById("feedWrapper")
let organiserName = document.getElementById("organiser")
let organisersPool
let joinButton = document.getElementById("joinButton")
let roomArea = document.getElementById("roomArea")
let searchElement = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")

function getPeople (person) {
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;

        searchElement.addEventListener("keyup", (event) => {
        
        
            const a = people.filter(person => person.name.first.startsWith(event.target.value))
            searchResults.innerHTML = ""
            console.log(event.target.value)
        if (a == ""){
            searchResults.innerHTML += `<div>Sorry, No Results Found</div>` 
        }else if( event.target.value ==""){
            searchResults.innerHTML += `<div>Start Typing Name</div>`
        } else {
            a.map(object=>{
                
                searchResults.innerHTML += `<div>${object.name.first} ${object.name.last}</div>`
            })
            console.log()
        }
        })

        userPhoto.src = people[person].picture.large
        userInfo.innerHTML = `<div>${people[person].name.first}</div>
        <div>${people[person].name.last}</div>
        <div>${people[person].location.city}</div>
        <div>${people[person].location.country}</div>`
    }))
}

getPeople(0, "large")

const newFeed = document.createElement("div")
for (let i=1; i<=6; i++){
    fetch(`${baseUrl + people100}`)
        .then((response) => response.json()
        .then((data) => {
            organisersPool = data.results;
            organiserName.innerHTML+=`<img src="${organisersPool[i].picture.thumbnail}">
            <div>${organisersPool[i].name.first}</div><div>${organisersPool[i].name.last}</div>`
            joinButton.innerHTML += `<button class="btn btn-outline-info" onclick="${()=>Room(i)}">Join activity</button>`
        }))
    fetch(feedInfo)
        .then((response) => response.json()
        .then((data) => {
            feed.innerHTML += `<div>Activity: ${data.activity}</div><div>Type: ${data.type}</div><div>Participants: ${data.participants}</div>`
        }))
}

function Room(param){
  
    roomArea.innerHTML+=`<img src="${organisersPool[param].picture.thumbnail}">
    <div>${organisersPool[param].name.first}</div><div>${organisersPool[param].name.last}</div>`
    console.log("hello")
}   


