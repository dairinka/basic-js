const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(param) {
    this.direct = param;
  }
  getEncrypt(message, correctKey) {
   message = message.toUpperCase();
   correctKey = correctKey.toUpperCase();
    let result = ''
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    for(let i = 0; i < correctKey.length; i++){
      
        if(message[i] == ' ') {
          result += " ";
        } else if(!alphabet.includes(message[i])){
          result += message[i];
        } else {
          
          let shift = alphabet.indexOf(correctKey[i]) + alphabet.indexOf(message[i]);
          result += shift >= alphabet.length ? alphabet[shift - alphabet.length]: alphabet[shift]; 
        } 
       
    }
    return result;
  }

  getDecrypt(encrypt, correctKey){
    encrypt = encrypt.toUpperCase();
    correctKey = correctKey.toUpperCase();
    let result = '';
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    for(let i = 0; i < correctKey.length; i++){
      if(encrypt[i] == ' ') {
          result += " ";
        } else if(!alphabet.includes(encrypt[i])){
          result += encrypt[i];
        } else {
            let shift = alphabet.indexOf(encrypt[i]) < alphabet.indexOf(correctKey[i]) ?
            alphabet.length  - alphabet.indexOf(correctKey[i]) + alphabet.indexOf(encrypt[i]):
            alphabet.indexOf(encrypt[i]) - alphabet.indexOf(correctKey[i]);
            result +=  alphabet[shift]; 
        } 
    }
  return result;
  }

  getCorrectKey(sentence, key){
    let countKey = Math.ceil(sentence.length / key.length);
    let correctKey = key.repeat(countKey);
    let sentenceArr = sentence.split(' ');
    let keyArr = [];
    let indStart = 0;
   
    for(const word of sentenceArr){
      let keyWord = '';
      keyWord = correctKey.slice(indStart, indStart + word.length); 
       
      keyArr.push(keyWord);
     
      indStart += word.length;
          
    }
    
    correctKey = keyArr.join(' ');
    return correctKey;
  }
  // ///////////////////////////////////////////////////////
  encrypt(message, key) {
    if(typeof message == 'undefined'|| typeof key =='undefined'){
      throw new Error ('Incorrect arguments!');
    }
     
    
   let keyWithSpace = this.getCorrectKey(message, key);
   let result = this.getEncrypt(message, keyWithSpace);
   if (this.direct === false) {
      result = result.split('').reverse().join('');
    }
    return result;
    }
  // ////////////////////////////////////////////////////
  decrypt(message, key) {
    if(typeof message == 'undefined'|| typeof key =='undefined'){
      throw new Error ('Incorrect arguments!');
    }
    let keyWithSpace = this.getCorrectKey(message, key);
    let result = this.getDecrypt(message, keyWithSpace);
    if (this.direct === false) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
