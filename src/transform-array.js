const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let newArr = [...arr];
  let resultArr = [];
  let constArr = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
    "delete",
  ];
  for (let i = 0; i < newArr.length; i++) {
    
    switch (newArr[i]) {
      case "--discard-next":
        if (newArr[i + 1] && !(constArr.includes(newArr[i + 1]))) {
          newArr[i + 1] = "delete";
          i += 1;
        }
        break;
      case "--discard-prev":
        if (resultArr.length > 0 && !(constArr.includes(newArr[i - 1]))) {
       
          newArr[i - 1] = "delete";
          resultArr.pop();
        } 
        break;
      case "--double-next":
        if (newArr[i + 1] && !(constArr.includes(newArr[i + 1]))) {
        
          resultArr.push(newArr[i + 1]);
          
        }
        break;
      case "--double-prev":
        if (newArr[i - 1] && !(constArr.includes(newArr[i - 1]))) {
          
          resultArr.push(resultArr[resultArr.length - 1]);
         
        }
        break;
      default:
        resultArr.push(newArr[i]);
    }
  }
  return resultArr;
}
module.exports = {
  transform
};
