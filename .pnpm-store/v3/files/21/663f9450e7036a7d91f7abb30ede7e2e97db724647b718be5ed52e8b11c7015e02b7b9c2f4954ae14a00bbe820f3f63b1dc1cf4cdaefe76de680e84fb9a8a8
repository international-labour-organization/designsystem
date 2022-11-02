"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPinned = exports.clearPinned = exports.savePinned = void 0;
var addon_constants_1 = require("../addon-constants");
function hasProperty(value, key) {
    return Object.prototype.hasOwnProperty.call(value, key);
}
function isValidContext(value) {
    if (typeof value !== 'object') {
        return false;
    }
    if (value == null) {
        return false;
    }
    if (Array.isArray(value)) {
        return false;
    }
    var hasAllProperties = ['results', 'samples', 'copies'].every(function (key) {
        return hasProperty(value, key);
    });
    if (!hasAllProperties) {
        return false;
    }
    var map = value && value.results && value.results[0] ? value.results[0].map : undefined;
    if (map == null) {
        return false;
    }
    var hasTaskId = Object.keys(map).some(function (key) {
        var entry = map[key];
        return hasProperty(entry, 'taskId');
    });
    return hasTaskId ? false : true;
}
function getKey(storyName) {
    return addon_constants_1.packageName + "-" + storyName;
}
function savePinned(storyName, results) {
    localStorage.setItem(getKey(storyName), JSON.stringify(results));
}
exports.savePinned = savePinned;
function clearPinned(storyName) {
    localStorage.removeItem(getKey(storyName));
}
exports.clearPinned = clearPinned;
function getPinned(storyName) {
    var raw = localStorage.getItem(getKey(storyName));
    if (!raw) {
        return null;
    }
    var value = JSON.parse(raw);
    if (!isValidContext(value)) {
        console.warn('Unsupported value found in localStorage. Value cleared');
        clearPinned(storyName);
        return null;
    }
    return value;
}
exports.getPinned = getPinned;
