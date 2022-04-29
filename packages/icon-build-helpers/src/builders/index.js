/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const react = require("./react/builder");
const reactNext = require("./react/next");
const scss = require("./scss");
const svg = require("./svg");
const vanilla = require("./vanilla");
const vue = require("./vue/builder");

const builders = {
  react: {
    run: react,
  },
  reactNext: {
    run: reactNext,
  },
  svg: {
    run: svg,
  },
  scss: {
    run: scss,
  },
  vanilla: {
    run: vanilla,
  },
  vue: {
    run: vue,
  },
};

module.exports = builders;
