const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter 2 Number :', (n1) => {
    console.log(n1);
  });

  