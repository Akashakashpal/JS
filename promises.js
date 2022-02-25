let students = [{ name: "Akash",age: 22},{name: "Aviral",age: 23}]

function enrollSutdent(student){
    return new Promise((resolve,reject)=> {
        if(students.push(student)){
            resolve("Success")
        }
        else {
            reject("Failure")
        }
    })
}

function fetchStudent(){
    
    setTimeout(function(){
        enrollSutdent({name: "Akshay", age: 25}).then(function(){
            students.forEach((element)=>{
                console.log(`${element.name} and ${element.age}`)
            })
        }).catch((e)=>{
            console.log(e)
        })
    },1000)
}


fetchStudent()
