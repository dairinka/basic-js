const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str) {
  let strArr = str.split('');
  let arrResult = [];
  let count = 1;
  for(let i = 0; i<strArr.length; i++){
    
    if(i+1 < strArr.length && strArr[i+1] == strArr[i]){
      count += 1
    }else if(count == 1){
      arrResult.push(strArr[i])
      count = 1;
    }else{
        arrResult.push(`${count}${strArr[i]}`)
        count = 1;
      
    }
  }
  
  return arrResult.join("");
}

module.exports = {
  encodeLine
};
