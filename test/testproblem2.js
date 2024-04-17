const result = require('../problem2'); 
let inventory = require('../inventory');

const LastCar = result(inventory);

if (LastCar) {
    console.log(`Last car is a ${LastCar[0]}, ${LastCar[1]}`);
} else {
    console.log("Car not found");
}
