// callback are both..synchronous and asynchronous

// forEach--> synchronous callback
// setTimeout --> Asynchronous callback

let students = [
    {
        name: "Akash",
        Age: 22
    },
    {
        name: "Aviral",
        Age: 23
    }
]

function enrollSutdent(student,callback){
    setTimeout(function(){
        students.push(student);
        callback();
    },1000)
}

function getStudents(){
    setTimeout(function(){
        students.forEach((student)=>{
            console.log(`Name: ${student.name}, Age: ${student.Age}`)
        })
    },3000)
}

enrollSutdent({name:"Akshay",Age:25},getStudents)

