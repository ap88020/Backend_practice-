"use strict";
// Type Aliases 
Object.defineProperty(exports, "__esModule", { value: true });
// type sankhya = number;
// let a: sankhya = 10; 
// type value = string | number | null;
// let a: value;
// type User = {
//     name : string,
//     email : string,
// }
// type Admin = User & {
//     getDetails(User : string) : void;
// }
// class Device {
//     name = "svmsung";
//     price = 12000;
//     catogery = "digital";
// }
// let d1 = new Device();
// console.log(d1);
class BottleMaker {
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }
    print() {
        console.log(`bottle is ${this.name} , or price is ${this.price}`);
    }
}
let b1 = new BottleMaker("milton", 2000);
let b2 = new BottleMaker("paras", 3000);
// b1.print();
// b2.print();
// class HumanMaker{
//     constructor(public name : string , public isHandsom : boolean){}
//     print() : void {
//         console.log(`He is ${this.name} or he is ${this.isHandsom ? "handsom" : "not handsom"}`)
//     }
// }
// let h1 = new HumanMaker("Akash" , false);
// let h2 = new HumanMaker("amit" , true);
// h1.print();
// h2.print();
// class MusicMaker{
//     constructor(public name : string , public artist : string , public duration : number){}
//     print() : void {
//         console.log(`song is ${this.name} , or artist is ${this.artist} , and durtation is ${this.duration} minute`);
//     }
// }
// let m1 = new MusicMaker("jhome jo pathaan","arjit singh", 10 );
// m1.print();
class Bottle {
    constructor(name) {
        this.name = name;
        this.halua = "halua";
    }
}
class ChiltonBootol extends Bottle {
    constructor(name) {
        super(name);
    }
    print() {
        console.log(this.name, this.halua);
    }
}
let c1 = new ChiltonBootol("gulab jamun");
c1.print();
