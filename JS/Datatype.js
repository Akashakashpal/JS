console.log("Data type")
/* 2 types of Datatype
1. Primitive
2. reference

Primitive
    Stack
    string
    numbers
    boolean
    null
    undefined
    symbol

reference 
    heap
    object
    arrays
    funtions
    dates

typeof(arr)
typeof(dates)
typeof(object) All shows Object...

typeof(func) shows function
*/

// Number
let num = 5;
console.log("DataType is-", typeof(num));

// undefined
let a;
console.log("DataType is: "+ typeof(a));

let c = null;
console.log("DataType is:"+ typeof(c))

// Array
let arr = [1,2,3,4,5,true,"Akash"]
console.log("DataType is array is:"+ typeof(c))

// Object
let obj = {"name": "Akash",
            "age": 21};

console.log("DataType is object is:"+ typeof(obj))

let date = new Date();
console.log(date)