class VigenereCipheringMachine {
  _vigenereTable = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy",
  };

  /**
   * Accepts true (or nothing) to create direct machine and false to create reverse machine.
   * @param {boolean} dirrect
   */
  constructor(dirrect = true) {
    this.dirrect = dirrect;
  }

  /**
   * Encode message with provided key.
   * @param {string} message - String to encode.
   * @param {string} key - String keyword.
   */
  encrypt(message, key) {
    if (!message || !key) {
      throw "You must provide two parameters";
    }

    message = message.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let encryptedText = "";
    let specialCharacterCount = 0;

    for (let i = 0; i < message.length; i++) {
      const keyLetter = (i - specialCharacterCount) % key.length;
      const keywordIndex = this._vigenereTable.a.indexOf(key[keyLetter]);

      if (this._vigenereTable[message[i]]) {
        encryptedText += this._vigenereTable[message[i]][keywordIndex];
      } else {
        encryptedText += message[i];
        specialCharacterCount++;
      }
    }

    return this.dirrect
      ? encryptedText.toUpperCase()
      : encryptedText.toUpperCase().split("").reverse().join("");
  }

  /**
   * Decode message with provided key.
   * @param {string} encryptedMessage - String to decode.
   * @param {string} key - String keyword.
   */
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw "You must provide two parameters";
    }

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const keyLetter = (i - specialCharacterCount) % key.length;
      const keyRow = this._vigenereTable[key[keyLetter]];

      if (keyRow.indexOf(encryptedMessage[i]) !== -1) {
        decryptedText += this._vigenereTable.a[
          keyRow.indexOf(encryptedMessage[i])
        ];
      } else {
        decryptedText += encryptedMessage[i];
        specialCharacterCount++;
      }
    }

    return this.dirrect
      ? decryptedText.toUpperCase()
      : decryptedText.toUpperCase().split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
