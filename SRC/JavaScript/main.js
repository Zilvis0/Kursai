// let a, b, c, d, e, f, g, h, i, j,k,l,m;

// a = 10
// b =.99
// e=5

// c=a+b
// d=c-e
// f="previous price"
// g="new price"

// h=true
// i=e * h

// j=1
// k="Text"
// l=true
// m=[j, k, l]

// console.log(f, c, g, d, i)
// console.log(m)
// console.log(m[0], m[2])
// console.log(m[1])
// console.log(m[0], m[1], m[2])
// console.log(m[0-2])


// alert("Discount's up to 50% off'");


// let x,y,z;

// x=1
// y=2
// z=3

// if (x+y>z) {
//     console.log("Daugiau")
// } else if (x+y==z){
//     console.log("Lygu")
// } else console.log("Maziau")

const Input = document.getElementById("User-Input")
const a = 3

function clickMe() {
    Value = Number(Input.value)
    console.log(a + Value)

    if (a+Value>5){
        console.log("More than 5")
    } else if (a+Value==5){
        console.log("Equals 5")
    } else {
        console.log("Less than 5")
    }
}

const InputA = document.getElementById("InputA")
const InputB = document.getElementById("InputB")

function MoreLess(){
    AValue = Number(InputA.value)
    BValue = Number(InputB.value)
    
    if (AValue>BValue){
        console.log("A > B")
    } else if (AValue<BValue) {
        console.log("A < B")
    } else {
        console.log("A = B")
    }
}

function Addition() {
    AValue = Number(InputA.value)
    BValue = Number(InputB.value)
    console.log(AValue + BValue)
}

function Substraction() {
    AValue = Number(InputA.value)
    BValue = Number(InputB.value)
    console.log(AValue - BValue)
}

function Multiplication() {
    AValue = Number(InputA.value)
    BValue = Number(InputB.value)
    console.log(AValue * BValue)
}

function Division() {
    AValue = Number(InputA.value)
    BValue = Number(InputB.value)
    console.log(AValue / BValue)
}