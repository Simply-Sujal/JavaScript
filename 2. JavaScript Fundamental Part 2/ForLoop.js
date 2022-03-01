
// console.log("I am your first friend");
// console.log("I am your second friend");
// console.log("I am your third friend");
// console.log("I am your fourth friend");
// console.log("I am your fifith friend");
// console.log("I am your sixth friend");
// console.log("I am your seventh friend");
// console.log("I am your eight friend");
// console.log("I am your nine friend");r
// console.log("I am your ten friend");

// for loops keeps running while condtion is TRUE 
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`I am your ${rep} friend`);
// }


// const sujal = [
//     'Sujal',
//     'Timilsina',
//     2022 - 2002,
//     'Teacher',
//     ["Sujal" , "Varun" , "Roshan"]
// ];


// for(let j = 0; j < sujal.length; j++){
//     console.log(j , sujal[j]);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log("Hey can i be your friend");
//     rep++;
// }


let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("The loop is going to end....");
    }
}