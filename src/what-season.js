const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let dateWrapper = new Date(date);
  if (date == null || date == "underfined") {
    return "Unable to determine the time of year!";
  }
  if (isNaN(dateWrapper.getDate())) {
    throw new Error("Invalid date!");
  }
  if (
    typeof date.toString !== "function" ||
    typeof date.getFullYear !== "function" ||
    typeof date.getDate !== "function" ||
    typeof date.getHours !== "function" ||
    typeof date.getMinutes !== "function" ||
    typeof date.getSeconds !== "function" ||
    typeof date.getMilliseconds !== "function" ||
    typeof date.getDay !== "function" ||
    !(date instanceof Date)
  ) {
    throw new Error("Invalid date!");
  }
  
  
    let month = date.getMonth();
 

  if (month < 2 || month == 11) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else if (month < 11) {
    return "fall";
  }
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason
};
