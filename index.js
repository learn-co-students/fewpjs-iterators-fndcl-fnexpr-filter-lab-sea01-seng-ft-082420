function findMatching(drivers, string) {
    let result = drivers.filter(d => d.toLowerCase() === string.toLowerCase())
    return result
}

const fuzzyMatch = (drivers, string) => {
    let result = drivers.filter( d => d.slice(0, string.length) === string )
    return result
}

const matchName = (drivers, string) => {
    let result = drivers.filter( d => d.name === string )
    return result
}