let today = new Date();

console.log(today)

let otherDate = new Date("10-06-2000 10:34:58")
// month.. day...year
console.log(otherDate)

let a;
a = otherDate.getDate()
a = otherDate.getMonth()
a= otherDate.getFullYear()
a = otherDate.getHours()
console.log(a)

otherDate.setDate(15)
otherDate.setMonth(09)
console.log(otherDate)

// month is an array--> 09 is actually 10th month...