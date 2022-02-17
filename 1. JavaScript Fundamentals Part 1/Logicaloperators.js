
// In this lecture we will talk about the lofical opertaors and that gonna be super amazing

const isRed = true; // A
const isyellow = false; // B

console.log(isRed && isyellow);
console.log(isRed || isyellow);
console.log(!(isRed || isyellow));
console.log(!isRed || isyellow);

if(isRed && isyellow){
    console.log("This is your fav color");
}else{
    console.log("I think you hate this color");
}

const isBlack = true; // C
console.log(isRed && isyellow && isBlack);
console.log(!isBlack || isRed || !isyellow);
