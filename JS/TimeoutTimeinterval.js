function sayHi(){
    console.log("Hi! I Am ABCD")
}

setTimeout(() =>{
    sayHi();
},5000)

console.log("Hello")

// setTimeout starts calling function after 5 Seconds


setInterval(()=>{
    let date = new Date();
    console.log("Time", date)
} ,1000)

