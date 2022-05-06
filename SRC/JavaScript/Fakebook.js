//URLS

const baseUrl = "https://randomuser.me/api/";
const people100 = "?results=100";
const feedInfo = "http://www.boredapi.com/api/activity/"


//Data

let people
let userPhoto = document.getElementById("userPhoto")
let userInfo = document.getElementById("userInfo")
let organiserInfo = document.getElementById("organiser")
let joinButton = document.getElementById("joinButton")
let chatButton = document.getElementById("chatButton")
let roomArea = document.getElementById("roomArea")
let searchElement = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
let intervalFunction
let chatInput
let chatArea


function getPeople (person) {
    fetch(`${baseUrl + people100}`)
    .then((response) => response.json()
    .then((data) => {
        people = data.results;


        searchElement.addEventListener("keyup", (event) => {
        
            const a = people.filter(person => person.name.first.toLowerCase().includes(event.target.value)|| person.name.first.includes(event.target.value) || person.name.last.toLowerCase().includes(event.target.value) || person.name.last.includes(event.target.value))
            searchResults.innerHTML = ""
            if (a == ""){
                searchResults.innerHTML += `<div>Sorry, No Results Found</div>` 
            }else if( event.target.value ==""){
                searchResults.innerHTML = ""
            }else{
                a.map(object=>{ 
                searchResults.innerHTML += `<img src="${object.picture.thumbnail}"><div>${object.name.first.replace(`${event.target.value}`,`<b>${event.target.value}</b>`)}</div><div>${object.name.last.replace(`${event.target.value}`,`<b>${event.target.value}</b>`)}</div>`
                })
            }
        })
        for (let i=1; i<=6; i++){
            fetch(feedInfo)
                .then((response) => response.json()
                .then((data) => {
                  
                    organiserInfo.innerHTML+=`<div class="row border border-warning border-2">
                                                <div class="col-3 p-2 bg-warning bg-opacity-50">
                                                    <img src="${people[i].picture.thumbnail}">
                                                    <h4 class="">${people[i].name.first}</h4>
                                                    <h4 class="">${people[i].name.last}</h4>
                                                </div>    
                                                <div class="col-9">    
                                                    <h5 class="">Activity: ${data.activity}</h5>
                                                    <h5 class="">Type: ${data.type}</h5>
                                                    <h5 class=""">Participants: ${data.participants}</h5>
                                                </div>          
                                            </div>`                                         
            }))
        }
        fetch(feedInfo)
            .then((response) => response.json()
            .then((data) => {
                joinButton.innerHTML= `<button class="btn w-100 p-2 m-1 btn-outline-primary">Create activity</button>`
                joinButton.onclick = () => Room(0)
                function Room(param){
                    roomArea.innerHTML=`<div class="row justify-content-center">
                                            <h2>${data.activity} group</h2>
                                            <h4>type: ${data.type}</h4>
                                        </div>
                                        <div>
                                            <h2>Admin: </h2>
                                            <img src="${people[param].picture.thumbnail}">
                                            <h3>${people[param].name.first}</h3>
                                            <h3>${people[param].name.last}</h3>
                                            <h2>Participants: </h2>
                                        </div>`

                    intervalFunction = setInterval(()=>newMemberJoining(), 5000)
                    let timesRun = 0
                    function newMemberJoining() {
                        let randomNumber = Math.floor(Math.random() * 100 +1)
                        timesRun ++
                        if (timesRun == 5){
                            clearInterval(intervalFunction)
                        }
                        roomArea.innerHTML+=`<img src="${people[randomNumber].picture.thumbnail}"><div>${people[randomNumber].name.first}</div><div>${people[randomNumber].name.last}</div>`
                    }
                }
        }))
        chatButton.innerHTML = `<button class="btn w-100 p-2 m-1 btn-outline-primary">Chat</button>`
        chatButton.onclick = () => chatRoom()
        function chatRoom(){
            clearInterval(intervalFunction)
            let randomNumber = Math.floor(Math.random() * 100 +1)
            roomArea.innerHTML=`<div class="bg-success bg-opacity-75 row justify-content-center">
                                    <h2>Welcome to ChatRoom!</h2>
                                    <h4>find friends here</h4>
                                </div>
                                <div class="row justify-content-between">
                                    <div class="col-2 justify-content-start">
                                        <img src="${people[0].picture.thumbnail}">
                                        <h3>${people[0].name.first}</h3>
                                        <h3>${people[0].name.last}</h3>
                                    </div>
                                    <div class="col-2 justify-content-end">
                                        <img src="${people[randomNumber].picture.thumbnail}">
                                        <h3>${people[randomNumber].name.first}</h3>
                                        <h3>${people[randomNumber].name.last}</h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <input id="chatInput">
                                    <div id="chatArea">

                                    </div>
                                </div>`
            chatInput=document.getElementById("chatInput")
            chatArea=document.getElementById("chatArea")
            function chattingIsHard(phrase){
                const sentenceArray=["Hello", `My name is ${people[randomNumber].name.first}`, "Sorry, I don't understand you" ]
                chatArea.innerHTML += `<h4 style="text-align: end">${sentenceArray[phrase]}</h4>`
            }
            chatInput.addEventListener("keyup", (event) =>{
                if (event.key==="Enter"){
                    chatArea.innerHTML += `<h4>${event.target.value}</h4>`
                    if (event.target.value=="hello"){
                        chattingIsHard(0)
                    } else if(event.target.value.includes("name")){
                        chattingIsHard(1)
                    } else if (event.target.value !==""){
                        chattingIsHard(2)
                    }
                    chatInput.value = ""
                }
            })

        }

        userPhoto.src = people[person].picture.large
        userInfo.innerHTML =   `<h1>${people[person].name.first}</h1>
                                <h1>${people[person].name.last}</h1>
                                <h3>${people[person].location.city}</h3>
                                <h3>${people[person].location.country}</h3>`
    }))
}

getPeople(0, "large")

 


