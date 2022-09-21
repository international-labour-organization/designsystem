/**
 * Global namespaces
 */

const path = require('path');

const patterns = path.resolve(__dirname, 'patterns');

module.exports = {
  patterns: patterns,
  components: path.resolve(patterns, 'components'),
  tokens: path.resolve(__dirname, 'tokens'),
  svgs: path.resolve(__dirname, 'svgs'),
};
