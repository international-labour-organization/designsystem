"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.saveFile = void 0;
var tslib_1 = require("tslib");
var selectors_1 = require("../selectors");
function saveFile(storyName, current) {
    var anchor = document.getElementById(selectors_1.hiddenFileAnchorId);
    if (anchor) {
        anchor.setAttribute('href', 'data:text/json,' + encodeURIComponent(JSON.stringify(current, null, 2)));
        anchor.setAttribute('download', storyName + ".json");
        anchor.click();
    }
}
exports.saveFile = saveFile;
function readFile(e, callback) {
    var reader = new FileReader();
    var files = e.currentTarget.files;
    if (files && files.length) {
        reader.readAsText(files[0]);
        reader.onload = function (_a) {
            var target = _a.target;
            if (target) {
                var context = JSON.parse(target.result);
                var _b = tslib_1.__read(files[0].name.split('.json'), 1), storyName = _b[0];
                callback(context, storyName);
            }
        };
    }
}
exports.readFile = readFile;
