"use strict";
// function num1(num : number){
//     return num;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function sum(a : number , b : number){
//     let num : number =  num1(b);
//     console.log(`sum of a and b :- ${a + num}`);
// }
// sum(22 , 22);
// function age(age : number){
//     if(age > 18){
//         console.log("you can vote");
//     }else{
//         console.log("you can't vote");
//     }
// }
// age(33);
// function delayedCall(fn : () => void){
//     setTimeout(fn , 2000);
// }
// delayedCall(() => {
//     console.log("this will work after 2 second");
// })
function greet(user) {
    console.log(`your name is ${user.name} , or age is ${user.age} or you live in ${user.address.place}`);
}
let user = {
    name: "akash",
    age: 20,
    address: {
        street: 23,
        place: "delhi",
    },
};
greet(user);
