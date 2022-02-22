console.log("Event Listener")

document.getElementById("heading").addEventListener("click",function(e){
    console.log("Heading Clicked")
    console.log(e)
})

document.getElementById("heading2").addEventListener("dblclick",function(e){
    console.log("Heading Double Clicked")
    console.log(e)
})

document.getElementById("name").addEventListener("change",function(e){
    console.log(e.target.value)
})

document.getElementById("mouseOver").addEventListener("mouseover",function(e){
    console.log(e)
})

document.getElementById("mouseOut").addEventListener("mouseout",function(e){
    console.log(e)
})

document.getElementById("mouseMove").addEventListener("mousemove",function(e){
    console.log("Mouse Moved")
})

