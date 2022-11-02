/*!
 * strip-use-strict <https://github.com/jonschlinkert/strip-use-strict>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new Error('expected a string');
  }
  return str.replace(/['"]use strict['"];/g, '');
};
