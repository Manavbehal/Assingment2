function CarYears(inventory) {
    const carYears = inventory.map(car => car.car_year);
    return carYears;
}
module.exports = CarYears;