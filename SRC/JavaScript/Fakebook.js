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
let organiserPhoto = document.getElementById("organiserPhoto")
let organisersPool

function getPeople (person) {
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;

        userPhoto.src = people[person].picture.large
        userInfo.innerHTML = `<div>${people[person].name.first}</div>
        <div>${people[person].name.last}</div>
        <div>${people[person].location.city}</div>
        <div>${people[person].location.country}</div>`
    }))
}

getPeople(0, "large")

let activity
let type
let participants



// const newFeed = document.createElement("div")
// for (let i=1; i<6; i++){
//     newFeed.appendChild(getPeopleFeed(i))
// }

function getPeopleFeed(person){
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        organisersPool = data.results;
        organiserPhoto.src = organisersPool[person].picture.thumbnail;
        organiserName.innerHTML = `<div>${organisersPool[person].name.first}</div><div>${organisersPool[person].name.last}</span>`
    }))
    fetch(feedInfo)
    .then((response) => response.json()
    .then((data) => {
        activity = data.activity;
        type = data.type;
        participants = data.participants;
        feed.innerHTML = `<div>Activity: ${activity}</div><div>Type: ${type}</div><div>Participants: ${participants}</div>`
    }))
}
  

getPeopleFeed(1)