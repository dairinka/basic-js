const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains) {
  let objResult = {};
  let reverseDomains = domains.map(domain => domain.split('.').reverse());
  for(const domain of reverseDomains){
    let levelWithDot = '';
    for(const level of domain){
      levelWithDot += '.' + level;
      if(objResult.hasOwnProperty(levelWithDot)){
        objResult[levelWithDot] += 1;
      }else{
      objResult[levelWithDot] = 1;
      }
    }
  }
  return objResult;
}

module.exports = {
  getDNSStats
};
