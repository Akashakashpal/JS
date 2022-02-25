// async fucntion return promise

async function getData(){
    await fetch("https://api.github.com/users")
        .then(response => response.json())
        .then( data => console.log(data))
        .catch(err => console.log(err))
} 

getData()