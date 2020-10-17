function findMatching(drivers, string) {
    let driver = drivers.filter(d => d.toLowerCase() === string.toLowerCase())
    return driver
}

const fuzzyMatch = (drivers, string) => {
    let driver = drivers.filter( d => d.slice(0, string.length) === string )
    return driver
}

const matchName = (drivers, string) => {
    let driver = drivers.filter( d => d.name === string )
    return driver
}