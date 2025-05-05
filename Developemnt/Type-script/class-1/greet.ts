function greet(user : {
    name : string,
    age : number,
    address : {
        streetName : string,
        countryName : string,
    }
}) {
    console.log(`Hello ${user.name}`);
}

let user = {
    name : 'Akash',
    age : 20,
    address : {
        streetName : "Surya-Vihar",
        countryName : "India"
    }
}

greet(user);