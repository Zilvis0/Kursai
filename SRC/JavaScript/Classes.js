// class Elf {
//     constructor({_height, _mass, _age}) {
//         this.height = _height;
//         this.mass = _mass;
//         this.age = _age;
//     }
//     getBMI(){
//         return this.mass / (this.height * this.height)
//     }
// }

// const Legolas = new Elf({_height: 1.98,_mass: 43,_age: 158})
// const OtherElf =new Elf ({_height: 2.02, _mass: 52,_age: 203})

// console.log(Legolas)
// console.log(OtherElf)
// console.log("BMI = ", Legolas.getBMI())
// console.log("BMI = ", OtherElf.getBMI())

class Animal {
    constructor({_name, _age}){
        this.name = _name;
        this.age = _age;
    }
    speak(){
        console.log(`${this.name}: "Moo"`)
    }
}

class Dog extends Animal {
    constructor({_name, _age, _sound}){
        super({_name, _age}) 
        this.sound = _sound;
    }
    speak(){
        return `${this.name}: "${this.sound}"`
    }
}


let doggie = new Dog({_name: "Credo",_age: 11,_sound: "Bark"})
console.log(doggie.speak())

class Cat extends Animal{
    constructor({_name, _age, _sound}){
        super({_name, _age})
        this.sound = _sound
    }
    speak(){
        return `${this.name}: "${this.sound}"`
    }
}

let kitty = new Cat ({_name: "Tundra", _age: 15, _sound: "I will eat your soul for breakfast, Slave!"})
console.log (kitty.speak())

class KittyCat extends Cat {
    constructor({_name, _age, _sound}){
        super({_name, _age, _sound})
    }
    speak() {
        return `${this.name}: "${this.sound}"`
    }
}

let kittyCat = new KittyCat({_name: "Tundra", _age: 15, _sound: "I mean... Meow"})
console.log(kittyCat.speak())