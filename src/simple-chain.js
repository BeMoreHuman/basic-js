const chainMaker = {
  count: 0,
  chain: "",
  getLength() {
    return this.count;
  },
  addLink(...value) {
    this.count++;
    if (value.length) {
      this.chain += this.count > 1 ? `~~( ${value[0]} )` : `( ${value[0]} )`;
    } else {
      this.chain += `~~( )`;
    }
    return this;
  },
  removeLink(position) {
    if (!isValidPosition(position, this.chain)) {
      this.resetChain();
      throw "Notexisting link position";
    }
    this.count--;
    const chainArr = this.chain.split("~~");
    chainArr.splice(position - 1, 1);
    this.chain = chainArr.join("~~");
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const _chain = this.chain;
    this.resetChain();
    return _chain;
  },
  resetChain() {
    this.count = 0;
    this.chain = "";
  },
};
function isValidPosition(position, chain) {
  const chainArr = chain.split("~~");
  const posInArr = position - 1;

  if (typeof position !== "number" || !isInt(position) || !chainArr[posInArr]) {
    return false;
  }
  return true;
}
function isInt(n) {
  return n % 1 === 0;
}

module.exports = chainMaker;
