// In this we gonna learn about the Dot vs. Bracket Notation

const sumjal = {
    firstName : "Sujal Kumar Timilsina",
    secondName : "Varun Timilsina",
    age : 2022 - 2002,
    job : "Programmer",
    friend:["Avinash" , "Prince" , "Piyush" , "Naman" , "Aniket"]
};

console.log(sumjal);
console.log(sumjal.firstName);
console.log(sumjal['secondName']);

const nameKey = 'Name';
console.log(sumjal['first' + nameKey]);
console.log(sumjal['second' + nameKey]);


sumjal.location = "India";
sumjal['twitter'] = "@362sujal";
console.log(sumjal);

// challenge 
// sumjal has 5 friends , and his best friend is called Avinash.

console.log(`${sumjal.firstName} has ${sumjal.friend.length} fiends,and his best friend is called 4 ${sumjal.friend[0]}`);