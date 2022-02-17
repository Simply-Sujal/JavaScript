
//In this part we gonna learn about the Truthy and Falsey values 
//In JS there are 5 falsey values : 0 , ' ' , undefined , null , NaN

console.log(0);
console.log(undefined);
console.log('');
console.log("Sujal");
console.log({});

const money = 0; // 0 is falsey value so it will print the else part
if (money) {
    console.log("Do not spent money!");
}else{
    console.log("You have to work hard!")
}

let height; // undefined is also a falsey value so it will alsi print the else part
if (height) {
   console.log("Literally you are tall !!!") 
}else{
    console.log("You are super tiny");
}