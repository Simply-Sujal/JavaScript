
//---------------------------Basic JavaScript-----------------------------
let js = "Sujal";
if (js === "Sujal") alert("Hey ! I guess you get the idea about the JavaScript");

console.log(56+78+8);
console.log("Can i hit you");

// // Variable name conventions -> this is comment , this comment is not the part of code.
let firstName = "Suja Kumar Timilsina";
let second_Name = "Varun Timilsina";
let PI = 3.145;

let job1 = "Teaching";
let job2 = "Coder";

let _profession = "Programmer";
let $work = "Data Entry";

console.log(firstName);
console.log(second_Name);
console.log(_profession);
console.log($work);


// -----------------------------Data Types--------------------------------
// JavaScript has a dynamic typing : we do not have to manually define the data types of the value stpred in a variable .Instead , data types are determined automatically 

let firstName = true;
console.log(firstName);

firstName = "Yes ! am happy";
console.log(firstName);

// // typeof keyword is use to know the exact type of the value which are assigned to a variable.

let number = 67;
console.log(typeof number);
number = "FiftyFive";
console.log(typeof number);
console.log(typeof true);
console.log(typeof null);  // typeof null is Object , regarded as bug or an error in javascript
console.log(typeof 'a');

let year;
console.log(year);
console.log(typeof year);


// ------------------------- let , const and var keyword in JS-------------------------------


// let keyword in JavaScript: The let keyword is an improved version of the var keyword. 
// Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block})
let age = 19;
age = 23;


// const keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.
// Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 
const birthday = 11;
// birthday = 03; we can do or we can reassign the const keyword right , we use const to fix the value


// var keyword in JavaScript: The var is the oldest keyword to declare a variable in JavaScript. 
// Scope: Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 
var job = "Programmer";
job = "Console Coder";

lastName = "Timilsina";
console.log(lastName);



// -----------------------Basic Operators--------------------------

// Maths Operator
let now = 2021;
let varunAge = now - 2002;
let sandhyAge = now - 2004;

console.log(varunAge , sandhyAge);
console.log(varunAge * 2 , varunAge / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power 3 means (2)^3

console.log("Sujal" + " " + "Kumar" + " " + "Timilsina");
console.log(typeof 45);

// // Assignment Operators
let x = 25;
x += 10;
x -= 2;
x *= 2;
x++;
x--;

console.log(x);

// //Comparision Operator
console.log(varunAge > sandhyAge); // > , < , <= , >=
console.log(varunAge - 7 > sandhyAge);
console.log(5 >= 5);


// -------------------Operator Precedence-------------------
let now = 2021;
let varunAge = now - 2002;
let sandhyAge = now - 2004;

console.log(now - 2002 > now - 2004);

let x , y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = ((varunAge + sandhyAge)/2);
console.log(varunAge,sandhyAge,averageAge);
