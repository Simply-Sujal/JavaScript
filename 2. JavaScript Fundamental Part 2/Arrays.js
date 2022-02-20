// In this lecture we gonna learn about Arrays 

const friend1 = "Sujal";
const friend2 = "Varun";
const friend3 = "Keta";

// First way to create an array
const friends = ["Sujal" , "Varun" , "Keta"];
console.log(friends);

// Second way to create an array 
const year = new Array(1976,2002,1948,1290,3674);
console.log(year);

console.log(year[2]);
console.log(year[4]);
console.log(friends[1]);

console.log(friends.length);
console.log(year.length);

console.log(friends[friends.length - 1]);

friends[2] = "Avinash";
console.log(friends);
// friends = ["Piyush" , "Prince"]; // we can do this 

const name = "Aniket";
const sumjal = [name,"Hemlo",2022 - 2002,"Teacher",friends];
console.log(sumjal);
console.log(sumjal.length);


// Exrercise 
const calcAge = function(birthyear){
    return 2022 - birthyear;
}

const y = [1987,2002,2001,1967,2004];
const age1 = calcAge(y[0]);
const age2 = calcAge(y[1]);
const age3 = calcAge(y[2]);
const age4 = calcAge(y[y.length - 1]);

console.log(age1 , age2 , age3 , age4);

const age = [calcAge(y[0]),calcAge(y[1]),calcAge(y[y.length - 1])];
console.log(age);


