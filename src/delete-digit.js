const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  
  n = n.toString();
  let arrNumber = [...n];
  let min = Math.min(...n).toString();
  let minInd = arrNumber.indexOf(min);
  if(minInd == arrNumber.length-1 && arrNumber.length > 2 ){
    let tempArr = arrNumber.slice(0, arrNumber.length-1);
    min = Math.min(...tempArr).toString();
    arrNumber.splice(arrNumber.indexOf(min), 1);
  }else{
   arrNumber.splice(arrNumber.indexOf(min), 1);
  }
  return Number(arrNumber.join(''));
}

module.exports = {
  deleteDigit
};
