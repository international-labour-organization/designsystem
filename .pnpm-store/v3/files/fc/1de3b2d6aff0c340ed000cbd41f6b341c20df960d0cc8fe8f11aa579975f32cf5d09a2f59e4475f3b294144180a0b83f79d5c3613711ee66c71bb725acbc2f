'use strict';

let Source = require('source-component');

module.exports = function(text) {
  return parse(text);
};

function stringParser(source) {
  const stringSym = source.currentChar();
  let char = source.nextChar();
  let string = '';
  while (char) {
    if (char === stringSym && source.peek(-1) !== '\\') {
      source.nextChar();
      return string;
    } else {
      string += char;
    }

    char = source.nextChar();
  }
}

function parseName(source) {
  let name = '';

  if (source.currentChar() !== '<') {
    throw Error('This is not a HTML tag. HTML tag has to start with "<"');
  }

  let char = source.nextChar();
  while (char) {
    if (char === ' ') {
      source.nextChar();
      return name;
    } else {
      name += char;
    }
    char = source.nextChar();
  }
  return name;
}

function parseAttributes(source) {
  let field = '';
  let char = source.currentChar();
  let attributes = {};

  while (char && char !== '>') {
    if (char === ' ') {
      if (!attributes[field]) {attributes[field] = true}
      field = '';
    } else {
      if (char === '=') {
        source.nextChar();
        attributes[field] = stringParser(source);
        char = source.currentChar();
        continue;
      } else {
        field += char;
      }
    }
    char = source.nextChar();
  }

  return attributes
}

function parseValue(source) {
  let char = source.currentChar();

  if (char === '>') {
    char = source.nextChar();
  }

  let value = '';
  while (char && char !== '<') {
    value += char;
    char = source.nextChar();
  }
  return value;
}

function parse(text) {
  let field = '';
  let source = new Source(text);
  

  return {
    tagName: parseName(source),
    attributes: parseAttributes(source),
    value: parseValue(source)
  }
}