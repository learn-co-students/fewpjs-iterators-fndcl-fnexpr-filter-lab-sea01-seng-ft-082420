// Code your solution here
function findMatching(drivers, string) {
    let d = drivers.filter(dr => dr.toUpperCase() === string.toUpperCase())
    return d
}

function fuzzyMatch(drivers, string) {
    let d = drivers.filter(dr => dr.slice(0,string.length) === string)
    return d
}

function matchName(drivers, string) {
    let d = drivers.filter(dr => dr.name === string)
    return d
}