"use strict";
// Type Aliases 
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
class Device {
    constructor() {
        this.name = "svmsung";
        this.price = 12000;
        this.catogery = "digital";
    }
}
let d1 = new Device();
console.log(d1);
