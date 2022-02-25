car  = {
    name: "Audi R8",
    speed: 320,
    run: function(){
        console.log(`${car.name} is running`);
    }
}

console.log(car.name)
console.log(car.speed)
console.log(car.run())

// proper object is made throgh constructor

function GeneralCar(name,speed){
    this.name = name;
    this.speed = speed;
    this.run = function(){
        console.log(`Hello user, Your Car ${this.name} is ruuning`)
    }
}

car1 = new GeneralCar("Suzuki Swift",120)
car2 = new GeneralCar("Tata Hexa", 220)

console.log(car1)
console.log(car2)

console.log(car1.run())

// object.prototype
// it is used only when object is created through constructor..
// obj.prototype contains the functions to set and some other functionalities , also it have some inbuilt.


GeneralCar.prototype.setName = function(name){
    this.name = name;
}

GeneralCar.prototype.getName = function(){
    return this.name;
}

// these functions can only be seen in console...inside proto of object..

console.log(car1.setName("Ferrari"))
console.log(car1.getName())