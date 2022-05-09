let theWord = document.getElementById("theWord")
let letterInput = document.getElementById("letterInput")
let guesses = document.getElementById("guessedLetters")
let wrongGuesses = document.getElementById("wrongGuesses")
let finalVerdict = document.getElementById("finalVerdict")
let EnterPresses = 0
let AnswerZone = document.getElementById("AnswerZone")

theWord.style.display = "none"
guesses = []

letterInput.addEventListener("keyup", event=>{
    if (event.key==="Enter" && event.target.value.toLowerCase() !=="" && !guessedLetters.innerHTML.includes(event.target.value.toLowerCase())){
        guesses.push(event.target.value.toLowerCase())
        guessedLetters.innerHTML += `<div>${guesses[EnterPresses]}</div>`
        EnterPresses++
        for (let i=0; i<hiddenWord.length; i++){
            
            if (hiddenWord[i]==(event.target.value.toLowerCase())){
                AnswerZone.innerHTML += `<div>${event.target.value.toLowerCase()}</div>`
            } else {
                AnswerZone.innerHTML += `<div>_ </div>`
            }
        }
        
    }
})

let hiddenWord = theWord.innerHTML.toLowerCase().split("")
console.log(hiddenWord)


