let element = document.createElement("h3")

element.id = 'dynamicallyCreatedID'
element.className = 'dynamic_created'
element.setAttribute("title","MyOwnTitle")

element.innerText = "Dynamicaaly added element in DOM"

console.log(element)
// element created but not yet added to Dom

let f = document.querySelector(".formP")

// aading element into f
f.append(element)

console.log(f)




