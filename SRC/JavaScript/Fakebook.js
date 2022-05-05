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
let organiserInfo = document.getElementById("organiser")
let joinButton = document.getElementById("joinButton")
let roomArea = document.getElementById("roomArea")
let searchElement = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
let intervalFunction

function getPeople (person) {
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;


        searchElement.addEventListener("keyup", (event) => {
        
            const a = people.filter(person => person.name.first.startsWith(event.target.value))
            searchResults.innerHTML = ""
            if (a == ""){
                searchResults.innerHTML += `<div>Sorry, No Results Found</div>` 
            }else if( event.target.value ==""){
                searchResults.innerHTML = ""
            }else{
                a.map(object=>{ 
                searchResults.innerHTML += `<div>${object.name.first} ${object.name.last}</div>`
                })
            }
        })
        for (let i=1; i<=6; i++){
            fetch(feedInfo)
                .then((response) => response.json()
                .then((data) => {
                    
                    feed.innerHTML += `<p class="row justify-content-center">Activity: ${data.activity}</p><p class="row justify-content-center">Type: ${data.type}</p><p class="row justify-content-center border-bottom border-3 border-dark"">Participants: ${data.participants}</p>`          
            }))
        }
        fetch(feedInfo)
            .then((response) => response.json()
            .then((data) => {
                joinButton.innerHTML= `<button class="btn btn-outline-primary">Create activity</button>`
                joinButton.onclick = () => Room(0)
                function Room(param){
                    roomArea.innerHTML=`<h2>${data.activity} group</h2><h3>${data.type}</h3><img src="${people[param].picture.thumbnail}">
                    <div>${people[param].name.first}</div><div>${people[param].name.last}</div>`
                    intervalFunction = setInterval(()=>newMemberJoining(), 5000)

                    function newMemberJoining() {
                        let randomNumber = Math.floor(Math.random() * 100 +1)
                        roomArea.innerHTML+=`<img src="${people[randomNumber].picture.thumbnail}"><div>${people[randomNumber].name.first}</div><div>${people[randomNumber].name.last}</div>`
                    }
                }
            }))  
        
        for (let i=1; i<=6; i++){
    
            organiserInfo.innerHTML+=`<img class="row" src="${people[i].picture.thumbnail}">
            <h4 class="row">${people[i].name.first}</h4><h4 class="border-bottom border-3 border-dark row">${people[i].name.last}</h4>`
       
        }

        userPhoto.src = people[person].picture.large
        userInfo.innerHTML = `<div>${people[person].name.first}</div>
        <div>${people[person].name.last}</div>
        <div>${people[person].location.city}</div>
        <div>${people[person].location.country}</div>`
    }))
}

getPeople(0, "large")

 


