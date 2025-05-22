// TUPLES

let arr : [number , string] = [12 , "Ankit"];

// ENUMERATIONS

enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}


enum detail {
    NAME = "papad",
    TEST = "mango + zera",
    USE = "eat"
}

let a = detail.NAME;

// ANY , UNKOWN , VOID , NULL, UNDEFINED , NEVER

// let b : any;
// let b : unknown;

// // b = "harsh";
// // b = 12;

// if(typeof b === "string"){
//     // b.toUpperCase();
//     console.log(b.toUpperCase());
// }else {
//     console.log("this is not string");
// }

// VOID 
function abcd() : void {
    console.log("this is void");
}
// abcd();

function def() : boolean {
    return true;
}

// def();

// NULL 
// function refg() : never {
//     while(true) { };
// }

// refg();

// console.log("never");

// INTERFACE
interface User {
    name : string,
    email : string,
    password : string,
}

// function getInterface(obj : User){
//     console.log(obj.email);
// }

// getInterface({
//     name : "akash",
//     email : "akash@gmail.com",
//     password : "321"
// })


// interface Admin extends User{
//     admin : boolean
// }

// interface xxx (obj : Admin){
//     console.log(obj.admin);
// }

