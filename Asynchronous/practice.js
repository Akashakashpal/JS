let n= parseInt(window.prompt("Enter number"))

let x,y;

for(x=1,y=2; x<n+1 || y<n+1; x+=2,y+=2){
    console.log(x)
    x += 2
    if(x<=n) console.log(x)
    if(y<=n)console.log(y)
    y += 2
    if(y<=n) console.log(y)
}