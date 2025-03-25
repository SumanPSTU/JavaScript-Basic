let x = "string";
let y = "star";
if (x > y) {
    console.log(x.toUpperCase());
} else {
    console.log(y)
}

let text = x + " " + y;
console.log(text);

let v = "what a nice day";
v += " also funny";
console.log(v);

let a = 5 + 5;
let b = "5" + 5;
let c = "hello" + 5;
let d = "5" + "5";


console.log(a);
console.log(b);
console.log(c);
console.log(d);

let xx = true;
let yy = false;

if (x != y) {
    console.log("x is not equal y");
} else {
    console.log("X is equal y");
}

// if(xx && yy){
//     console.log("logic is true");
// }else{
//     console.log("logic is false");
// }

// for(let i = 0;i<=10;i++){
//     console.log("The number is "+(i-1));
// }

{
    let x = 5;
    let y = 2;
    let z = x - y;
    console.log(z);
}


let m = 5;
console.log(++m);
console.log(m++);
console.log(m);

// javascript string 
let ans1 = "It's alright";
let ans2 = "He is called 'Johny'";
let ans3 = 'he is called "Jhonny"';
console.log(ans1);
console.log(ans2);
console.log(ans3);

//Javascript number
let x1 = 34.00;
let x2 = 34;
console.log(x1);
console.log(x2);

//javascript exponenttial notation 

let y1 = 123e5;
let y2 = 123e-5;
console.log(y1);
console.log(y2);

//javascript bigint
let bigInt = BigInt("2548728439725959345");
console.log(bigInt);
//console.log(bigInt.toString());

// boolean in javascript
let isTrue = true;
let isFalse = false;

console.log(isFalse);
console.log(isTrue);

// array in javascript

let array = ["volvo", "BMW", "Toyota"];
array[1] = "Ferary";
for (i in array) {
    console.log(array[i]);
}

// object in javascript 

let person = {
    fname: "sumon",
    lname: "Das",
    age: 21,
    color: "Blue" // Ensure the 'color' property is defined correctly
};

console.log(person.fname); // Outputs "sumon"
console.log(person.lname); // Outputs "Das"
console.log(person.age);   // Outputs 21
console.log(person.color); // Outputs "Blue"

let bc;// without value the type of is undefined
console.log(typeof (person));
console.log(typeof (bc));

// function in javascript
function func() {
    console.log("this is a function");
}
func();

// function with parameter
function func(x, y) {
    return x * y;
}

let fc = func(4, 5);
console.log(fc);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}
let sumon = new Person("Sumon", 21);
console.log(sumon.introduce());


// creating object with new Object keyword

let car = new Object();

car.brand = "volvo";
car.year = 2025;
car.color = "blue";


console.log(car.brand);
console.log(car.year);
console.log(car.color);
car.brand = "BMW";
console.log(car['brand']);


// object function in javascript

let student = {
    fname: "sumon",
    lname: "Das",
    id: 2202014,
    fullName: function(){
        return "Student name is "+ this.fname + " " + this.lname;
    }
}
console.log(student.fname);
console.log(student.lname);
console.log(student.id);
let call = student.fullName();
console.log(call);

// java script delete method
delete student.id;

// java script support nested object
myObject = {
    name: "Jhon",
    age: 30,
    myCar:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log("nested object here");
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.myCar.car1);
console.log(myObject.myCar.car2);
console.log(myObject.myCar.car3);

