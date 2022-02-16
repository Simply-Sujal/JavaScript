// In this we gonna learn about string and Template Literals
const firstName = "Sujal";
const job = "WebDeveloper";
const birthYear = 2002;
const year = 2022;

const sumjal = "I'm " + firstName +', a ' + (year - birthYear) + ' year old ' + job + ' ! ';
// this kind of line or concatinating this way is litera;;y a bad way , to make it easy ..
console.log(sumjal);

// here we gonna literals -> so we need backtick `` , to tell js that we are writing template string 

const newSujal = `I'm ${firstName} a ${year - birthYear} year old ${job} !`;
console.log(newSujal);
console.log(`hey this is my way of 'writing' any "string" so do you have any problem !!! `);
console.log(`hey 
how are you?
let me what are the things you are focussing on.`);