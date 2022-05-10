let letterInput = document.getElementById("letterInput")
let guesses = document.getElementById("guessedLetters")
let wrongGuesses = document.getElementById("wrongGuesses")
let finalVerdict = document.getElementById("finalVerdict")
let AnswerZone = document.getElementById("AnswerZone")
let EnterPresses = 0
let Misses = 0
let randomWords = ["guitar", "injury", "poem", "unit", "police", "thing", "singer", "year", "skill", "ad", "length", "leader", "effort", "event", "drama", "series", "month", "movie", "phone", "child"]

guesses = []

letterInput.addEventListener("keyup", event=>{
    let victory = true
    if (event.key==="Enter" && event.target.value.toLowerCase() !=="" && !guesses.includes(event.target.value.toLowerCase())){
        guesses.push(event.target.value.toLowerCase())
        guessedLetters.innerHTML += `<div>${guesses[EnterPresses]}</div>`
        AnswerZone.innerHTML = ""
        EnterPresses++
        if (!hiddenWord.includes(event.target.value)){    
            Misses++
            wrongGuesses.innerHTML = ""
            for (let i=0; i<Number(Misses); i++){
                wrongGuesses.innerHTML += `<img class="m-2" style="width: 50px" src="./assets/noose-with-very-tight-knots-11552768030edlsuzmfsh.png">`
            }
            if (Misses==5){
                finalVerdict.innerHTML = `<h1>You're a loser!</h1>`
            }
        }

        for (let x = 0; x<hiddenWord.length; x++){
            if (guesses.includes(hiddenWord[x])){
                AnswerZone.innerHTML += `<span class="px-2 mx-1 border-2 border-dark border-bottom" style="text-transform: capitalize">${hiddenWord[x]}</span>`
            } else {
                AnswerZone.innerHTML += `<span class="px-2 mx-1 border-2 border-dark border-bottom" style="text-transform: capitalize">?</span>`
                victory = false
            }
        }
        event.target.value = ""
        if (victory){
            finalVerdict.innerHTML = `<div><h1>Congratulations!</h1></div>
                                        <div><h1>You've won!</h1></div>`
        }
    }
})
let randomNumber = Math.floor(Math.random() * 21)
let hiddenWord = randomWords[randomNumber].toLowerCase().split("")
for (let y = 0; y<hiddenWord.length; y++){
AnswerZone.innerHTML += `<span class="px-2 mx-1 border-2 border-dark border-bottom" style="text-transform: capitalize">?</span>`
}
console.log(hiddenWord)


