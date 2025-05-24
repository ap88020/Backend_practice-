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
// class Bottle {
//     private halua : string = "halua";
//     constructor(public  name : string){}
// }
// class ChiltonBootol extends Bottle {
//     constructor(name : string){
//         super(name);
//     }
//     print() :void {
//         console.log(this.name , this.halua);
//     }
// }
// let c1 = new ChiltonBootol("gulab jamun");
// c1.print();
// class User {
//     constructor(public name : string , public age : number , public gender? : string){}
//     getName() : void{
//         console.log(this.name);
//     }
//     setName(value : string){
//         this.name = value;
//     }
// }
// let u1 = new User("Akash",34,"male");
// // let u2 = new User("anupama",34,);
// u1.setName("akashaa");
// u1.getName();
// class Numbers{
//     static getRandom(){
//         return Math.floor(Math.random() * 10);  
//     }
// }
// let num = Numbers.getRandom();
// console.log(num);
// function abcdef(name : string, age : number , cb:(arg : string) => void){
//     cb("amir");
// }
// abcdef("harsh" , 24, (arg : string) => {
//     console.log("avcd");
// });
function sum(...arr) {
    // console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function friend(...name) {
    console.log(name);
}
friend("tomato", "potato", "alloo");
