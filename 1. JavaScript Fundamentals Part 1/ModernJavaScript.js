// Now its time for Modern JavaScript

// Feature of ECMAScript 2015 also known as ES6

// 1. LET VS CONST VS VAR

// var nam = "Sujal";
// console.log(nam);
// nam = "Kumar";
// console.log(nam);

// let nam = "Sujal";
// console.log(nam);
// nam = "Kumar";
// console.log(nam);

// const nam = "Sujal";
// console.log(nam);
// nam = "Kumar"; // we cant change once if i already use const keyword
// console.log(nam);

// function bioData() {
//   let firstName = "Sujal";
//   console.log(firstName);

//   if (true) {
//     let lastName = "Timilsina";
//     console.log("My first name is : " + firstName);
//     console.log("My last name is : " + lastName);
//   }
//   console.log("My last name is : " + lastName);
// }

// bioData();

// var => Function Scope
// let and const => Block scope

// 2. Template Literals

// Js to print the table of 12
// for (let num = 1; num <= 10; num++) {
//   let tableOf = 15;
//   console.log(` ${tableOf} * ${num} = ${tableOf * num}`);
// }

// 3. Default Parameters
// Default function parametrs allow named parameters to be
// initialized with default values if no value or undefined is passed.

// function mult(a, b = 10) {
//   // here b = 10 act as a default parameter
//   return a * b;
// }

// console.log(mult(5)); // so here we dont need to pass two arguement becoz we have already seted the one paramete as a default parameter

// Normal function to add two number
// console.log(sum());

// function sum() {
//   const a = 10;
//   const b = 20;
//   const adding = a + b;
//   return `The sum of two number is : ${adding}`;
// }

// Now convert it into Fat arrow function
// const sum = () => `The sum of two number is : ${(a = 5) + (b = 10)}`;

// console.log(sum());

// Arrays in JavaScript
// In javascript , array means we can store multiple value of different types in single variable.
// var myFriends = ["Sujal", 20, "Varun", 21, true, "Avinash", 21];
// console.log(myFriends);
// In JS , we have an array class , and arrays are the prototype of this class.

// Traversal in an array
// var myFriends = ["Sujal", "Varun", "Avinash", "Keta"];
// console.log(myFriends[myFriends.length - 1]); // last element of an array
// console.log(myFriends.length); // length of the array

// For in and For of loop in an array  , loop to navigate introduced in ES6 2015
// var myFriends = ["Sujal", "Varun", "Avinash", "Keta"];
// for (var i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

// var myFriends = ["Sujal", "Varun", "Avinash", "Keta"];
// for in loop :- Only Provides the index number of an array
// for (let element in myFriends) {
//   console.log(element); // 0 1 2 3
// }

// for of loop :- Provides the actual data in an array
// for (let element of myFriends) {
//   console.log(element);
// }

// Array.prototype.forEach()
// Calls a function for each element in the array
// var myFriends = ["Sujal", "Varun", "Avinash", "Keta"];
// myFriends.forEach(function (element, index, array) {
//   console.log(element + " index : " + index + " array : " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " + index + " array : " + array);
// });

// Searching and Filter in an Array
// 1. indexOf() : array.indexOf(item, start)
// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right.

// const myFriends = ["Sujal", "Varun", "Avinash", "Keta", "Avinash", "Piyush"];
// let index = myFriends.indexOf("Varun");
// // let index = myFriends.indexOf("Varun", 2);

// console.log(index);

// 2. lastIndexOf() : array.lastIndexOf(item, start)
// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() starts at a specified index and searches from right to left.

// const myFriends = ["Sujal", "Varun", "Avinash", "Keta", "Avinash", "Piyush"];
// let index = myFriends.lastIndexOf("Piyush");
// console.log(index);

// 3. filter() : array.filter(function(currentValue, index, arr), thisValue)
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// 4. Array Subsection 4 : Prform CRUD
// Array.prototype.push() : array.push(item1, item2, ..., itemX)
// The push() method adds one or more elements to the end of ana aaray and returns the new leneght of the array

// const animals = ["Pigs", "Lion", "Tiger", "Cow"];
// // var count = animals.push("Monkey");
// // console.log(animals);
// // console.log(count);

// var count = animals.push("Monkey", "Donkey", "Crow");
// console.log(animals);

// Array.prototype.unshift()
// The unshift() method adds or more element to the beginning of an array and returns the new length of the array.

// --------------------------------Array Destructring-----------------------
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// eg
// let name = ["Sujal", "Varun", "Keta"];
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);

// let [myName, fName, sName, mName = "Pratima"] = name;
// console.log(myName);
// console.log(mName);

// ---------------------------------Object Destructring--------------------------
// const myData = {
//   myName: "Sujal",
//   roll: 21053362,
//   collegeName: "KIIT",
//   age: 20,
// };

// // let age = myData.age;
// // console.log(age);

// let { myName, roll, collegeName, age, lName = "Timilsina" } = myData;
// console.log(roll);

// -----------------------------Object Properties------------------------
//we can use dynamic key

// let myName = "Sujal";
// const myBio = {
//   [myName]: "Hey how are you all ?",
//   [20 + 1]: "is my age",
// };

// console.log(myBio);

// no need to write key and value , if both are same
// let myName = "Sujal";
// let myAge = 21;

// const myBio = { myName, myAge };
// console.log(myBio);

// -------------------------- Spread Operator ----------------------
let colors = ["red", "green", "pink"];
let mycolors = ["red", "green", "pink", "Orange", "Yellow"];

const myFavColors = [...colors, "yellow", "black"];
console.log(myFavColors);
