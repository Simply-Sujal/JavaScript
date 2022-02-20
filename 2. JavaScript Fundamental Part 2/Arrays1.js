

const friends = ["Sujal" , "Varun" , "Rohan" , "Mohan"];

// Add element
const newLength = friends.push("Jay");
console.log(newLength);
console.log(newLength);

friends.unshift("Jhon");
console.log(friends);

// Remove elements
friends.pop(); // remove the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Varun"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Varun"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Varun")) {
    console.log("You have friend called Bob");
}