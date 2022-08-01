// Here we will learn about the higher order function and call back function

// 1. Higher Order Function :
// Function which takes another function as an arguement is called HOF
// wo function jo dusre function ko as an arguesment accept karta ha use HOF

// 2. Call Back Function
// function which get passed as an arguement to annother function is called CBF
// A callback function is a function that is passed as ana arguement to another function to be "called back" at a later time

// jis bhi function ko hm kisi or function ke aandr as an arguements passed krte hai then usko hm callback fun bolte ha

// lets suppose we need to create a calculator

// const add = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// const mul = (a, b) => {
//   return a * b;
// };

// const calculator = (num1, num2, operator) => {
//   return operator(num1, num2);
// };

// const ans = calculator(5, 2, add); // here calculator function is higher order function becoz it is taking another function that is add function as an arguement and on the other hand add function is callback function which is here passed as an arguement
// console.log(calculator(5, 2, add));
// console.log(calculator(5, 2, sub));
// console.log(calculator(5, 2, mul));

// --------------Hoisting IN JavaScript---------------------
// we have a creation and execution phase
// Hoisting in a javascript is an mechanism where variables and function declaration are moved to the top of their scope befor the code

// for eg.
// console.log(name);
// var name; // or after ecmascript 2015 when let keyword came into the picture it says you cant call until uh define like let name;
// name = "sujal";

// How it will be in output during creation phase

// 1. var name;
// 2.console.log(name);
// 3.name = "sujal";

// In ES2015(ES6) , hoisting is avoided by using the let keyword instead of var.
// (The another difference is that variables declared with let are local to the surrounding block , not the entire function).

// What is scope chain and lexical scoping in JavaScript ?
// The scope chain is used to resolve the value of variable names in JS.

// scope chain in js is lexically defined , which means that we can see what the scope chain will be by looking at the code .

// At the top , we have a global scope , which is the window object in the browser

// Lexical scoping means now , the inner function can get access to their parent function varaibles but the vice versa is not true.

// eg1
// let a = "Hello guys ?"; // global scope

// const first = () => {
//   let b = "How are you?";

//   const second = () => {
//     let c = "Can i call you guys?";
//     console.log(a + b + c);
//   };
//   second();
// };
// first();

// What is closures in JavaScript?

// A closures in javascript is the combination of a function bundled together (enclosed) with refrences to its surrounding state (the lexical environment).
// In other words ,a closures gives you access to an outer function scope from an inner function
//In javascript , closures are created every time a function is created , at function creation time .
// for eg.

// it same like lexical scoping

// let a = 5;
// const outerfun = (a) => {
//   let b = 10;
//   const innerfun = () => {
//     let sum = a + b;
//     console.log(`the sum of two number is : ${sum}`);
//   };
//   return innerfun;
// };

// let checkClosures = outerfun(5);
// console.dir(checkClosures);

// -------------ADVANCED JS----------------
// Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
// Eg.
// const fun2 = () => {
//   console.log("Hey how are you ?");
// };

// const fun1 = () => {
//   console.log("Can i call you?00");
//   fun2();
//   console.log("My name is Sujal");
// };
// fun1();

// Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.

// const fun2 = () => {
//   setTimeout(() => {
//     console.log("Function 2 is called");
//   }, 2000);
// };

// const fun1 = () => {
//   console.log("Function 1 is called");
//   fun2();
//   console.log("Function 1 is called again.");
// };

// fun1();

// What is currying in JavaScript?
// Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of functions with a single argument.
// In other terms, currying is when a function — instead of taking all arguments at one time — takes the first one and returns a new function, which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.
// // eg.
// function sum(num1) {
//   return function (num2) {
//     return function (num3) {
//       console.log(num1 + num2 + num3);
//     };
//   };
// }

// sum(5)(10)(50); // this is done by currying

// --------------Bonus JSON----------------

// JSON.stringify turns a JavaScript object into JSON text and stores that JSON text in a string

// var my_Obj = { key_1: "some text", key_2: true, key_3: 3 };

// var obj_as_String = JSON.stringify(my_Obj);
// // { "key_1" : "some text", "key_2" : true , "key_3" : 3 };

// console.log(obj_as_String);
// typeof obj_as_String;
// // string

// // JSON.parse turns a string of JSON text into a JavaScript Object , eg.

// var object_as_string_as_object = JSON.parse(obj_as_String);
// // { key_1: "some text", key_2: true, key_3: 3 }

// typeof object_as_string_as_object;
// object
