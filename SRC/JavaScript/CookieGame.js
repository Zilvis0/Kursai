const cookieDisplay = document.getElementById("cookieDisplay")
let cookieCount = getCookie("cookieCount") || 0
let grandmaCount = getCookie("grandmaCount") || 0
cookieDisplay.textContent = cookieCount

function increaseCookieCount() {
    cookieCount++;
    cookieDisplay.textContent = cookieCount
    setCookie ('cookieCount', cookieCount)
}

function setCookie (name, value) {
    document.cookie = `${name}=${value}`
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function resetCookies(name, value) {
    document.cookie = `${name}=${value}`
    cookieCount = getCookie(name, value)
    cookieDisplay.textContent = cookieCount
}

function buyGranny(){
    if (cookieCount>=50){
        cookieCount = Number(cookieCount) - 50
        document.cookie = `cookieCount=${cookieCount}`
        cookieDisplay.textContent = cookieCount
        grandmaCount++
        document.cookie = `grandmaCount=${grandmaCount}`
        workingGrandmas()
    }
}
let a

function workingGrandmas() {
    clearInterval(a)

    if(grandmaCount){
       a = setInterval(()=>grandmaInterval(), 1000)
    }
}

let speed = 0.5

function grandmaInterval() {
    cookieCount = Number(cookieCount) + (speed * grandmaCount)
    document.cookie = `cookieCount=${cookieCount}`
    cookieDisplay.textContent = cookieCount

}

workingGrandmas()

function TurboMode() {
    if (grandmaCount>5 && speed == 0.5 && cookieCount>=200){
        cookieCount = Number(cookieCount) - 200
        document.cookie = `cookieCount=${cookieCount}`
        cookieDisplay.textContent = cookieCount
        speed = 0.75
        console.log(speed, grandmaCount, "po Turbo")

    }
}

console.log(speed, grandmaCount, "be turbo")

