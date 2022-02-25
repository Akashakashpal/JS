
function getData(){
    let url = "https://api.github.com/users"
    fetch(url).then(response=> response.json())
    .then((data)=> {
        console.log(data)
        displayData(data)
    })
}

getData()
function displayData(data){
    console.log(data)
    data.forEach(e => { 
        document.write(`<img src= ${e.login} alt=${e.id}`)   
    });
}
