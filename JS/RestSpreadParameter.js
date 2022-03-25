console.log("Rest Parameter")
function fun1(...input){
    let sum=0
    for( let i of input){
        sum += i;
    }
    return sum;
}

console.log(fun1(1,2,3))
console.log(fun1(1,2,3,4))

console.log("Spread Parameter")

arr1 = [1,2,3]
arr2 = [4,5,6]

arr = [...arr1, ...arr2]

console.log(arr)