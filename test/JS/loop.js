// array

arr = [1,2,3,4,5]

for( let i=0; i< arr.length; i++){
    console.log(arr[i])
}
console.log("Advance way for loop--> forEach")
arr.forEach(function(element){
    console.log(element)
})

console.log("Complete forEach")
arr.forEach(function(element, index, array){
    console.log(element,index,array)
})

// object
console.log("--Object--")
obj = {
    1: 100,
    2: 200
}

for( let key in obj){
    console.log(key)
    console.log(obj[key])
    console.log(`${key} with value ${obj[key]}`)
}

