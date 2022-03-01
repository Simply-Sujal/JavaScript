// Coding challlenge 3 

const Sujal = {
    fullname: "Johnson",
    mass: 65,
    height: 1.9,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};  

const Varun = {
    fullname : "Scarlett",
    mass : 73,
    height : 1.9,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};  

Sujal.calcBMI();
Varun.calcBMI();
console.log(Sujal.bmi , Varun.bmi);

if (Sujal.bmi > Varun.bmi) {
    console.log(`${Varun.fullname}'s BMI (${Varun.bmi}) is higher than ${Sujal.fullname}'s BMI (${Sujal.bmi})`);
}else{
    console.log(`${Sujal.fullname}'s BMI (${Sujal.bmi}) is higher than ${Varun.fullname}'s BMI (${Varun.bmi})`);
}