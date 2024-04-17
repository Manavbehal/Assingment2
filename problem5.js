function OlderCars(carYearsData, inputYear) {
    const olderCars = carYearsData.filter(year => year < inputYear);
    const olderCarsCount = olderCars.length;
    return { olderCars, olderCarsCount };
}


module.exports = OlderCars;