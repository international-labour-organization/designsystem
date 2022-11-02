'use strict';

module.exports = class {
  constructor(html) {
    this.html = html;
    this.index = 0;
  }

  currentChar() {
    return this.html[this.index];
  }

  currentIndex() {
    return this.index;
  }

  charAt(index) {
    return this.html[index];
  }

  nextChar() {
    this.index++;
    if (this.index >= this.html.length) return undefined;
    return this.currentChar();
  }

  getSubstring(start, end) {
  	end = end || this.html.length;
    return this.html.slice(start, end);
  }

  peek(offset) {
  	offset = offset == undefined ? 1 : offset;
    return this.html[this.index + offset];
  }

  skip(offset) {
    this.index += offset;
  }

  getNext(offset) {
    return this.getSubstring(this.index, this.index + offset);
  }

  isNext(substring) {
    for (let i = 0; i < substring.length; i++) {
      if (this.peek(i) !== substring[i]) return false;
    }
    return true;
  }

  length() {
    return this.html.length;
  }

  static isNumber(value) {
    return this.isDefined(value) && typeof value === 'number';
  }

  static isDigit(value) {
    return this.isDefined(value) && !isNaN(parseFloat(value)) && isFinite(value) && (value.length === 1 || (value < 10 && value > 0));
  }

  static isLetter(value) {
    return this.isDefined(value) && /^[a-zA-Z]/.test(value) && value.length === 1;
  }

  static isDefined(value) {
    return value !== undefined;
  }

  static isLetterOrDigit(value) {
    return this.isDefined(value) && this.isDigit(value) || this.isLetter(value);
  }

  static isSpecialCharacter(value) {
    return this.isDefined(value) && typeof value === 'string' && /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(char) && char.length === 1;
  }
}