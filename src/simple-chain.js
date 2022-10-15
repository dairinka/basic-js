const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
 resultArr: [],
  getLength() {
    return this.resultArr.length;
  },
  addLink(value = " ") {
       this.resultArr.push(`( ${value} )`);
      return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.resultArr = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.resultArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.resultArr.reverse();
    return this;
  },
  finishChain() {
    let resultStr = this.resultArr.join("~~");
    this.resultArr = [];
    return resultStr;
  },
};


module.exports = {
  chainMaker
};
