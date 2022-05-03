const cookieDisplay = document.getElementById("cookieDisplay")
let cookieCount = getCookie("cookieCount") || 0
let grandmaCount = getCookie("grandmaCount") || 0
let factoryCount = getCookie("factoryCount") || 0
let grandmaIntervalas
let factoryIntervalas


cookieDisplay.textContent = cookieCount

function increaseCookieCount() {
    cookieCount++;
    cookieDisplay.textContent = cookieCount
    setCookie ('cookieCount', cookieCount)
}

function Cheats() {
    cookieCount = Number(cookieCount) + 50;
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
    } else {
        console.log("Not Enough Cookies")
    }
}
function buyFactory(){
    if (cookieCount>=500){
        cookieCount = Number(cookieCount) - 500
        document.cookie = `cookieCount=${cookieCount}`
        cookieDisplay.textContent = cookieCount
        factoryCount++
        document.cookie = `factoryCount=${factoryCount}`
        workingFactories()
    } else {
        console.log("Not Enough Cookies")
    }
}
counts = {
    grandmaCount: 15,
    factoryCount: 25,
}
function Buy(money, param, slaveCount, slaveInterval){
    if (cookieCount>=money){
        cookieCount = Number(cookieCount) - Number(money)
        document.cookie = `cookieCount=${cookieCount}`
        cookieDisplay.textContent = cookieCount
        slaveCount++
        document.cookie = `${param}=${slaveCount}`
        console.log(money, slaveCount, slaveInterval)
        if(slaveCount=="grandmaCount"){
            grandmaCount =slaveCount
        }else 
        workingSomething(slaveCount, slaveInterval)
    } else {
        console.log("Not Enough Cookies")
    }
}
let a
let b

function workingGrandmas() {
    clearInterval(a)

    if(grandmaCount){
       a = setInterval(()=>grandmaInterval(), 1000)
    }
}
function workingFactories() {
    clearInterval(b)

    if(factoryCount){
       b = setInterval(()=>factoryInterval(), 1000)
    }
}

function workingSomething(slaveCount, slaveInterval){
    
    clearInterval(slaveInterval)

    if(slaveCount){
       slaveInterval = setInterval(()=>Interval(slaveCount), 1000)
    }
}


let speed = getCookie("speed") || 0.5

function grandmaInterval() {
    cookieCount = Number(cookieCount) + (speed * grandmaCount)
    document.cookie = `cookieCount=${cookieCount}`
    cookieDisplay.textContent = cookieCount

}
function factoryInterval() {
    cookieCount = Number(cookieCount) + (speed * grandmaCount)
    document.cookie = `cookieCount=${cookieCount}`
    cookieDisplay.textContent = cookieCount

}

function Interval(slaveCount){
    cookieCount = Number(cookieCount) + (speed * slaveCount)
    document.cookie = `cookieCount=${cookieCount}`
    cookieDisplay.textContent = cookieCount
}

workingGrandmas()

const turboButton = document.getElementById("turboButton")
function TurboMode() {
     if( speed == 0.75){
    console.log("you already have this")
    } else if(cookieCount<200){
        console.log("Not Enough Cookies")
    } else if (grandmaCount<5){
        console.log("Not Enough Grandmas")
    } else {
        cookieCount = Number(cookieCount) - 200
        document.cookie = `cookieCount=${cookieCount}`
        cookieDisplay.textContent = cookieCount
        speed = 0.75
        console.log(speed, grandmaCount, "po Turbo")
        turboButton.style.opacity = "50%"
        turboButton.classList.add("btn-disabled")
        setCookie("speed", speed)
    }
}

if (speed==0.75){
    turboButton.style.opacity="50%"
}

// setInterval(funkcijaViskam({
//     setInterval(grannyInterv{

//     }), 10*1000)
//     setTimeout(grannyInterv({

//     }), 10*1000)
// }), 15*1000)