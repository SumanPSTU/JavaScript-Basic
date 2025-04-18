import obj,{mod,funct} from "./modulo.js";

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

for (let i = 0; i <= 10; i++) {
    console.log("The number is " + (i - 1));
}

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
for (let ii in array) {
    console.log(array[ii]);
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
function funcs(x, y) {
    return x * y;
}

let fc = funcs(4, 5);
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
    fullName: function () {
        return "Student name is " + this.fname + " " + this.lname;
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
let  myObject = {
    name: "Jhon",
    age: 30,
    myCar: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
console.log("nested object here");
console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.myCar.car1);
console.log(myObject.myCar.car2);
console.log(myObject.myCar.car3);


// another way to call nested object
let nestedObj = myObject['myCar']['car1'];
console.log("another way to call nested object " + nestedObj);


// object method in javascript
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName());


// object display in java script

let s = {
    name: "John",
    age: 30,
    city: "New Work"
};

document.getElementById("demo").innerHTML = s.city;
document.getElementById("demo1").innerHTML = "Name is " + s.name + " person age is " + s.age + " and city is " + s.city;


// use for loop in a object to interate all value of the object
var t = " ";
for (let i in s) {
    t += s[i] + " ";
}
document.getElementById("demo2").innerHTML = t;

// also can Iterate by creating object values method and insert into array
const myArray = Object.values(s);
document.getElementById("demo3").innerHTML = myArray;


// javascript constractor here

function teacher(fname, lname, id, age) {
    this.fname = fname;
    this.lname = lname,
        this.id = id;
    this.age = age;

    this.fullName = function () {
        return "Name is " + this.fname + " " + this.lname;
    }
}

// this is how to create object using constractor
const teacherObj = new teacher("sumon", "das", 2202014, 21);
let teacherObj2 = new teacher("Jhon", "Doe", 23244, 32);
console.log(teacherObj2);
console.log(teacherObj.fullName());
console.log(teacherObj2.fullName());

function hello() {
    document.getElementById("demo3").innerHTML = "Hello";
}

// javascript string

let string1 = "This is a string of javascript ";// double quote
let string2 = '  This is a string of javascript'; // single quote
let string3 = `Thi's i's a string of javascript`; // template string
console.log(string1);
console.log(string2);
console.log(string3);

//print length of string
console.log(string1.length);

//string method of javascript

console.log(string1.length);
console.log(string1.charAt(2));
console.log(string2.charCodeAt(2));
console.log(string1.at(10));
console.log(string1[8]);
console.log(string1.slice(10, 16));
console.log(string1.substring(3, 8));
console.log(string1.substr(-6, 6));

console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.concat(string2));
console.log(string1.trim());
console.log(string2.trimStart());
console.log(string1.trimEnd());
let str = "7";
console.log(str.padStart(4, "p"));
console.log(str.padEnd(4, "0"));

let stringr = "Hello world!";
console.log(stringr.repeat(3));
console.log(stringr.replace("world!", "Bangladesh"));

let teststr = " this is a new string";
console.log(teststr.replaceAll(" ", "space"));
console.log(teststr.split(" "));
let splitarr = teststr.split(" ");
for (let i in splitarr) {
    console.log(splitarr[i]);
}

// string search method of javascript

let searchstr = "Hello world!";
console.log(searchstr.search("world"));
console.log(searchstr.indexOf("llo"));
console.log(searchstr.lastIndexOf("l"));

//console.log(searchstr.match("world"));
console.log(searchstr.startsWith("Hello"));

let firstName = "John";
let lastName = "Doe";

let texttt = `Welcome ${firstName}, ${lastName}!`;
console.log(texttt);

// number method in javascript

let num = 9873.8734;
console.log(num);
let numStr = num.toString();
console.log(typeof (numStr));
console.log(num.toExponential(3));
console.log(num.toFixed(3));
console.log(num.toPrecision(2));
console.log(Number(numStr));

console.log(parseInt(numStr));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// array in javascript
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
for (x in cars) {
    console.log(cars[x]);
}

const carss = new Array("Saab", "Volvo", "BMW");
console.log(carss);
for (let i in carss) {
    console.log(carss[i]);
}
carss.push("volvo");
console.log(carss.length);


// setInterval(() => {
//     let date = new Date();
//     document.getElementById("demo3").innerHTML =date.getHours()+":"+date.getMinutes() +":"+ date.getSeconds()+" "+date.getMonth();
// }, 1000);

// for loop in javascript
for (let num = 0; num < carss.length; num++) {
    console.log(carss[num]);
}

for (c of carss) {
    console.log(" of loop " + c);
}


for (c in carss) {
    console.log(" in loop " + c);
}


// while loop in javascript

let nums = 0;
while (nums < 10) {
    console.log("while loop " + (nums + 1));
    nums++;
}


// set in javascript 
const letter = new Set(['a', 'b', 'c', 'd']);
letter.add('f');
console.log(letter);
letter.delete('a');

console.log(letter.has('b'));

for (const x of letter) {
    console.log(x);
}
letter.forEach(function(value){
    console.log(value);
});
for(const le of letter.values()){
    console.log(le);
}

// map in javascript
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
fruits.set("lichi", 200);

for(const i of fruits.keys()){
    console.log(i);
}
for (const [key, value] of fruits) {
    console.log(key + " " + value);
}

//type conersion in javascript
let ttof = Number("30293");
console.log(typeof(ttof));

//regular expression in java script

let stringtext = "w3school here";
let regex = "here";
console.log(stringtext.search(regex));

// try catch in javascript

try{
    addlert("hwllo ");
}catch(err){
    //throw "this is a err";  
    console.log(err);
}finally{
    console.log("this is finally");
}

// arrow function in javascript

let mu = (a,b)=>{
    return a+b;
}
let textfun =()=>{
    console.log("hello arrow function");
}
textfun();
console.log(mu(3,4));


// class in javascrrpt

class Holywood{
    constructor(name,year){
        this.name = name;
        this.year  = year;

    }
    print(){
        return "the name is "+this.name+" and the year is "+this.year;
    }
}


class Bolywood extends Holywood{
    constructor(name,year){
        super(name,year);

    }
    print(){
        console.log(super.print());
    }


}

const myFunc = new Holywood("holywood",1999);
console.log(myFunc.print());

// call import variable in javascript

console.log(mod);
console.log(obj.name);
console.log(obj.age);

funct();