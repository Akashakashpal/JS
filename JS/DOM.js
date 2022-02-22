console.log("--Document object model")
// DOM is structural representation of HTMl document in web browser console.
// understand the document design of html page from web browser in better manner
// it have fucntions to know 
// number of links
// number of 

let a = document
a = document.all;
a = document.body;
a = document.forms;
a = document.forms[0];

// a = document.images;
a = document.links;
a = document.links[0].href;
a = document.links[0].href.toString();
console.log(a)

// 2 document selectors

// 1.
x = document.getElementById("inputField")

document.getElementById("abc").innerText = "Hello, text change"

//2.  multi element selector... 
document.getElementsByClassName("xyz")

// 3. 
let x = document.querySelector('#abc')

// # represent ID and . represent class name




