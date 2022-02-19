
// In this section we gonna learn about Functions

function name(){
    console.log("Sujal");
}
// calling / running / invoking function
name();
name();
// name();
// we can call a function as many as we want.

function fruitProcessor(apple,orange){
    console.log(apple,orange);
    const juice = `Juice with ${apple} applese and ${orange} oranges.`;
    return juice;
}

// fruitProcessor(6,8);
const applejuice = fruitProcessor(3,2);
console.log(applejuice);

const orangejuice = fruitProcessor(5,10);
console.log(orangejuice);



// ------------------Function Declaration and Function Expression-----------------------

// Function Declaration : we can call a function before declaring it 
function calculateAge(birthYear){
    return 2022 - birthYear;
}

const myAge = calculateAge(2002);

// Function Expression : we cannot call the function before initialize it
// function without name is anonymous function 
const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const yourAgee = calcAge(1997);
console.log(myAge,yourAgee);


// ------------------Arrow Function------------------
const ageCalculator = birthYear => 2022 - birthYear;
const age3 = ageCalculator(1980);
console.log(age3);

const yearUntilRetirement = (birthYear,yourName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement 
    return `${yourName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1970 , "Sujal"));
console.log(yearUntilRetirement(1985 , "Varun"));



// ----------------------Function Calling other Function-----------------------

function countFruits(fruit){
    return 5 * fruit;
}

function foodProcessor(apple,mango){
    const noOfApple = countFruits(apple);
    const noOfMango = countFruits(mango);

    const juice = `Juice with ${noOfApple} piece of apple and ${noOfMango} piece of mango`;
    return juice;
}

console.log(foodProcessor(4,6));