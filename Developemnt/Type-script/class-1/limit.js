"use strict";
// TUPLES
let arr = [12, "Ankit"];
// ENUMERATIONS
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var detail;
(function (detail) {
    detail["NAME"] = "papad";
    detail["TEST"] = "mango + zera";
    detail["USE"] = "eat";
})(detail || (detail = {}));
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
function abcd() {
    console.log("this is void");
}
// abcd();
function def() {
    return true;
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
