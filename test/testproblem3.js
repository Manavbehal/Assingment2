const result = require('../problem3'); 
let inventory = require('../inventory');

const sortedInventory = result(inventory);

console.log("Sorted car models:", sortedInventory);