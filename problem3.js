function CarModels(inventory) {
    const carModels = inventory.map(car => car.car_model);
    const sortedCarModels = carModels.sort();
    return sortedCarModels;
   
}

module.exports = CarModels;