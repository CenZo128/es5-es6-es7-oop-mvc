//OOP --> Object Oriented Programming
// Pilar Utama OOP
/**
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Abstraction
 * 4. Encapsulation : Public, Private, Protected
 */

// class Student {
//     //Attributes
//     constructor(name,ipk,status){
//         this.name = name;
//         this.ipk = ipk;
//         this.status = status;
//     }
//     //Method
//     speak(){
//         console.log(`Halo nama saya adalah ${this.name}`)
//     }
//     thisDefinition(){
//         console.log(this)
//     }
// }
//Instance of
//new -> make new instance
// let andi = new Student("Andi",3.25,"Single")
// let stella = new Student("Stella",3.75,"Jadian")

// console.log(andi)
// console.log(stella)

// andi.speak()
// stella.speak()
// andi.thisDefinition()
// stella.thisDefinition()

//Inheritance

class Car {
    constructor(type,name,price){
        this.type = type;
        this.name = name;
        this.price = price;
    }
    startEngine(){
        console.log("Brrrmmmmm!!")
    }
}
class Sedan extends Car {
    constructor(name,price,coolness){
        super("Sedan",name,price);
        this.coolness = coolness
    }
}

let civic = new Sedan("New Civic 2021",500,10000);

console.log(civic)
civic.startEngine()