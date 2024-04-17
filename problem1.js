
function findCarById(inventory, id) {
    return inventory.find(car => car.id === id);
}

module.exports = findCarById;