class Employee {
    constructor(name,department){
        this.name = name;
        this.department = department;
    }
    slogan(){
        return `Hi!! I am ${this.name} and my company is best`
    }

    static add(a,b){
        return a + b;
    }
}

emp = new Employee("Akash","Software Developer")

console.log(emp.slogan())
console.log(emp)

class Programmer extends Employee{
    constructor(name,department,language){
        super(name,department);
        this.language = language;
    }

    favouriteLang(){
        if (this.language == "Python"){
            return "Python"
        }
        else {
            return "Java Script"
        }
    }
}

Prog1 = new Programmer("Aviral","SDE","Python")

console.log(Prog1)
console.log(Prog1.slogan())
console.log(Prog1.favouriteLang())
