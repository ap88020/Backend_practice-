"use strict";
class Legel {
    constructor(age) {
        this.age = age;
    }
    isLegel() {
        if (this.age > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}
const legel = new Legel(12);
const ans = legel.isLegel();
console.log(ans);
