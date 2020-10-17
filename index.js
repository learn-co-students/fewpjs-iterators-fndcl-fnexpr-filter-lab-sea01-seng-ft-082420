// Code your solution here

const findMatching = (drivers, string) => {
    let result = drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() )

    return result
}

const fuzzyMatch = (drivers, string) => {
    let result = drivers.filter( driver => driver.slice(0, string.length) === string )

    return result
}

const matchName = (drivers, string) => {
    let result = drivers.filter( driver => driver.name === string )

    return result
}