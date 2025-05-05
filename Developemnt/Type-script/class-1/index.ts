class Legel{
    age : number;

    constructor(age : number){
        this.age = age;
    }

    isLegel() : boolean{
        if(this.age > 18){
            return true;
        }else{
            return false;
        }
    }
}

const legel = new Legel(12);

const ans = legel.isLegel();

console.log(ans);

