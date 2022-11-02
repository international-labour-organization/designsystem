"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var addon_constants_1 = require("./../addon-constants");
function withContainer(fn) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var container, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    container = document.createElement('div');
                    container.setAttribute("data-" + addon_constants_1.packageName + "-managed-container", 'true');
                    container.style.visibility = 'invisible';
                    document.body.appendChild(container);
                    return [4, fn(container)];
                case 1:
                    result = _a.sent();
                    react_dom_1.default.unmountComponentAtNode(container);
                    if (document.body.contains(container)) {
                        document.body.removeChild(container);
                    }
                    return [2, result];
            }
        });
    });
}
exports.default = withContainer;
