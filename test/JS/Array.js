arr = [1,2,3,4,"Akash", true, {"name": "James Bond"}]
// Find --> it just goes thorugh all elements of array, one by one
// if found hen value else undefined....

// basic
arr.find(function(e){
    console.log('elements: '+e)
})

let x  = arr.find((e) => e==3)
if(x ==3) console.log('Found')
else console.log("Not Found")

// array of object
arr2 = [{"empId": 1, "name":"ABC"}, {"empId": 2, "name":"DEF"},{"empId": 3, "name":"GHI"}]

//2 ways to access
arr2.find(function(e){
    if(e.empId == 2){
        console.log(e)
    }
})

// Another way
x = arr.find((element)=> element.name=="James Bond")
console.log(x)


console.log("------filter function------")
// return array
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter((element) => element.length > 6)
console.log(result)


console.log("----map function----")
// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.

result = words.map((element)=> element.length>6)
console.log(result)