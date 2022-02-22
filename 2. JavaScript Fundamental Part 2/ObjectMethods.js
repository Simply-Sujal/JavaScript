

const sumjal = {
    firstName : "Sujal Kumar Timilsina",
    secondName : "Varun Timilsina",
    birthyear: 2002,
    job : "Programmer",
    friend:["Avinash" , "Prince" , "Piyush" , "Naman" , "Aniket"],
    hasDriverLicenese : true,

    // calcAge: function(birthyear){
    //     return 2022 - birthyear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2022 - this.birthyear;
    // }
    
    calcAge: function(){
        this.age = 2022 - this.birthyear;
        return this.age;
    }
};

console.log(sumjal.calcAge());
console.log(sumjal.age());
console.log(sumjal.age());
console.log(sumjal.age());
console.log(sumjal.age());

// console.log((sumjal['calcAge'](2002)));
