"use strict";
function greet(user) {
    console.log(`Hello ${user.address.countryName}`);
}
let user = {
    name: 'Akash',
    age: 20,
    address: {
        streetName: "Surya-Vihar",
        countryName: "India"
    }
};
greet(user);
