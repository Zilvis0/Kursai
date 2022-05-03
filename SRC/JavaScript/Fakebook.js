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
let organiser = document.getElementById("organiser")
let organiserPhoto = document.getElementById("organiserPhoto")

function getPeople (person) {
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;
        console.log(people)

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

function getFeed() {
    fetch(feedInfo)
    .then((response) => response.json()
    .then((data) => {
        activity = data.activity;
        type = data.type;
        participants = data.participants;
        feed.innerHTML = `<div class="col-3 justify-content-center align-items-start">Activity: ${activity}</div><div class="col-3 justify-content-center align-items-start">Type: ${type}</div><div class="col-3 justify-content-center align-items-start">Participants: ${participants}</div>`
    }))
}


let i = 1

function CreatingFeed(){
    let newFeed = document.createElement("div")
    for (i=1; i<=6; i++){
        getPeopleFeed(i);
        getFeed()
    }
}

function getPeopleFeed(person){
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;
        organiserPhoto.src = people[person].picture.thumbnail
        organiser.innerHTML = `<div>${people[person].name.first}<div><div>${people[person].name.last}<div>`
    }))
}

CreatingFeed()