class StringBuilder {
  #value;
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};

StringBuilder.prototype.padEnd = function (str) {
  this.value += str;
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};

StringBuilder.prototype.padBoth = function (str) {
  this.padStart(str);
  this.padEnd(str);
};
