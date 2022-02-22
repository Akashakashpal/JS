let myvar = 10;
console.log(typeof myvar)

myvar = String(myvar)
console.log( typeof myvar )

arr = [1,2,3,4,5]
console.log("arr "+typeof arr)

console.log("arr" + typeof String(arr))
// now we can use string functions on arr




// also use "toString()"

let i = 54;
console.log("54: :" + typeof i.toString())


// number

let b = true
console.log(typeof b)
console.log(typeof Number(b))

// parseInt

let a = parseInt(23.54)
console.log("23.54 is now " + a);


let c = parseFloat(23.54)
// numbre remains as float
// but for count of decimal palces we need 

console.log(c.toFixed(1))
console.log(c.toFixed(5))



// Type coercion is automatic or implicit conversion of values
// from one datatype to another....
console.log("------Coercion-----")
let x = "55"
let y = 6

console.log(x + y)

console.log(Number(x) + y)


