
const countOlderCars = require('../problem5');
const extractCarYears = require('../problem4');
const inventory = require('../inventory');


const carYearsData = extractCarYears(inventory);


const inputYear = parseInt(process.argv[2]); 





const { olderCars, olderCarsCount } = countOlderCars(carYearsData, inputYear);


console.log("Cars made before", inputYear + ":");
console.log(olderCars);
console.log("Number of cars made before", inputYear + ":", olderCarsCount);
