// This is challenge 1st of topic function

const calcAvg = (s1,s2,s3) => {
    const AvgScore = (s1 + s2 + s3)/3;
    return AvgScore;
}
// const number = calcAvg(90,32,35);
// console.log(number);

const scoreVarun = calcAvg(44,23,71);
const scoreSumjal = calcAvg(65,54,49);
console.log(scoreVarun,scoreSumjal);

const checkWinner = function(avgVarun,avgSumjal){
    if (avgVarun >= 2 * avgSumjal) {
        console.log(`Varun won the match ${avgVarun} vs. ${avgSumjal}`);
    }
    else if(avgSumjal >= 2 * avgVarun){
        console.log(`Sumjal won the match ${avgSumjal} vs. ${avgVarun}`);
    }else{
        console.log("No teams won");
    }
}
checkWinner(scoreVarun,scoreSumjal);
checkWinner(576,234);