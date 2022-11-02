"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluraliseSamples = exports.pluraliseCopies = exports.pluralise = void 0;
function pluralise(_a) {
    var value = _a.value, single = _a.single, multiple = _a.multiple;
    return value === 1 ? single : multiple;
}
exports.pluralise = pluralise;
function pluraliseCopies(copies) {
    return pluralise({ value: copies, single: 'copy', multiple: 'copies' });
}
exports.pluraliseCopies = pluraliseCopies;
function pluraliseSamples(samples) {
    return pluralise({ value: samples, single: 'sample', multiple: 'samples' });
}
exports.pluraliseSamples = pluraliseSamples;
