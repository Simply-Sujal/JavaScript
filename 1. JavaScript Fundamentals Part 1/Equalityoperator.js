// In this we gonna learn about the equality operator

const age = '18';
if (age === 18) {
    console.log("You are eligible to vote");
}

if(age == 18) console.log("You just become an adult");

const number = Number(prompt("What is you fav. number ?"));
console.log(number);
console.log(typeof number);

if (number === 20) {
    console.log("The number you have entered is quite amazing");
}else if (number === 18) {
    console.log("You are eligible to get a driving license");
}else if (number > 20) {
    console.log("Now you can go outside to make money");
}else{
    console.log("This is your study time , keep focus on your studies");
}