// key is the datatype and value is value
console.log("same key and value using ==")
let a = 25;

if (a == 25){
    console.log(true)
}
else{
    console.log(false)
}

console.log("Different key and value using ==")
let b = "25";

if (b == 25){
    console.log(true)
}
else{
    console.log(false)
}

console.log("Different key and value using ===")
let c = "25";

if (c === 25){
    console.log(true)
}
else{
    console.log(false)
}

console.log("Ternary Operator")
let age = 20
let x = age>18 ? 'You can drive' : 'You can not drive'

console.log(x)


console.log("Swtich statement")

switch(age){
    case 10: console.log("Age is 10");
    break;
    case 20: console.log("Age is 20");
    break;
    default : console.log("Age is 30");
}