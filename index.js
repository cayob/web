var Greate_height = 5.8
var Greate_weight = 70
var Davido_height = 5.5
var Davido_weight= 69
var Greate_Bmi = Greate_weight/Greate_height
var Davido_Bmi = Davido_weight/Davido_height
if (Greate_Bmi>Davido_Bmi){
    console.log("Great has a better Bmi")
}else{
    console.log(`David has a better Bmi which is ${Davido_Bmi}`)
}

function calc_age(birth_year){
    var age = birth_year - 2024
    return age
}

console.log(calc_age(2000));

var conver = function (dollar){
    var rate = dollar * 1700
    return rate
}

console.log(conver(50000));