//synchronous vs asynchronous

console.log("Synchronous")
function synchronous(){
    console.log("Start");
    for ( let i=0; i<10; i++){
        console.log(i)
    }
    console.log("End")
}

synchronous()

console.log("--Asynchronous--")
function asynchronous(){
    console.log("Start")
    setTimeout(()=>{
        for ( let i=0; i<10; i++){
            console.log(i)
        }
    },1);
    console.log("End")
}
asynchronous()
