function findMatching(drivers, input) {
    return drivers.filter(driver => driver.toLowerCase() === input.toLowerCase())
}

function fuzzyMatch (drivers, input) {
    return drivers.filter(driver => driver.slice(0, input.length).toLowerCase() === input.toLowerCase())
}

function matchName (drivers, input) {
    return drivers.filter(driver => driver.name.toLowerCase() === input.toLowerCase())
}