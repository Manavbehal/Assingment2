function getLastCarInfo(inventory) {
    const lastCar = inventory[inventory.length - 1];
    
    return [lastCar.car_make, lastCar.car_model];
  
}


module.exports = getLastCarInfo;