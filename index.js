// Code your solution here
function findMatching(allDrivers, driver){
    return allDrivers.filter(dr => dr.toLowerCase() === driver.toLowerCase());
}

function fuzzyMatch(allDrivers, matchString){
    return allDrivers.filter(dr => dr.slice(0, matchString.length) === matchString);
}

function matchName(allDrivers, driver){
    return allDrivers.filter(dr => dr.name === driver);
}