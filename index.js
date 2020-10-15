function findMatching(drivers, string){
  let result = drivers.filter( driver => driver.toLowerCase() === string.toLowerCase())
  return result
}

function fuzzyMatch (drivers, string){
  let result = drivers.filter(driver => driver.slice(0, string.length) === string)
  return result
}

function matchName(drivers, string){
  let result = drivers.filter( driver => driver.name === string)
  return result
}