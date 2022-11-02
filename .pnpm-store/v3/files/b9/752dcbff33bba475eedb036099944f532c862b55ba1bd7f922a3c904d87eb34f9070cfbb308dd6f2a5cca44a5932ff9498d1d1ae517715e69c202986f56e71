"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
var tslib_1 = require("tslib");
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var server_1 = tslib_1.__importDefault(require("react-dom/server"));
var custom_errors_1 = require("../../task-runner/custom-errors");
var render = {
    type: 'timed',
    name: 'Initial render',
    description: "This task records how long ReactDOM.render() takes with your component",
    run: function (_a) {
        var getElement = _a.getElement, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                react_dom_1.default.render(getElement(), container);
                return [2];
            });
        });
    },
};
var hydrate = {
    type: 'timed',
    name: 'Hydrate',
    description: "\n      This task records how long a ReactDOMServer.hydrate() call\n      takes. If you are server side rendering a React component then html is\n      sent down to the browser. Hydration is the process of React reading through\n      the HTML and building up it's internal virtual model. After hydration React\n      is able to take over the HTML as if it had done the original render on the client.\n  ",
    run: function (_a) {
        var getElement = _a.getElement, controls = _a.controls, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var html;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        html = server_1.default.renderToString(getElement());
                        container.innerHTML = html;
                        return [4, controls.time(function mount() {
                                return tslib_1.__awaiter(this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        react_dom_1.default.hydrate(getElement(), container);
                                        return [2];
                                    });
                                });
                            })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    },
};
var reRender = {
    type: 'timed',
    name: 'Re render',
    description: "\n      This task records how long it takes to re-render the component with no prop changes.\n      Note: You can improve this score quickly by using React.memo near the top of your\n      component tree.\n  ",
    run: function (_a) {
        var getElement = _a.getElement, controls = _a.controls, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        react_dom_1.default.render(getElement(), container);
                        return [4, controls.time(function mount() {
                                return tslib_1.__awaiter(this, void 0, void 0, function () {
                                    return tslib_1.__generator(this, function (_a) {
                                        react_dom_1.default.render(getElement(), container);
                                        return [2];
                                    });
                                });
                            })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    },
};
function getAllChildren(container) {
    return Array.from(container.querySelectorAll('*'));
}
var domElementCount = {
    type: 'static',
    name: 'DOM element count',
    description: "\n    The more DOM element your component creates, the more work the browser needs to do\n  ",
    run: function (_a) {
        var getElement = _a.getElement, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var allChildren;
            return tslib_1.__generator(this, function (_b) {
                react_dom_1.default.render(getElement(), container);
                allChildren = getAllChildren(container);
                return [2, String(allChildren.length)];
            });
        });
    },
};
var domElementCountWithoutSvg = {
    type: 'static',
    name: 'DOM element count (no nested inline svg elements)',
    description: "\n    The count of DOM elements excluding inner SVG elements\n  ",
    run: function (_a) {
        var getElement = _a.getElement, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var allChildren;
            return tslib_1.__generator(this, function (_b) {
                react_dom_1.default.render(getElement(), container);
                allChildren = getAllChildren(container).filter(function (el) {
                    var parent = el.closest('svg');
                    if (!parent) {
                        return true;
                    }
                    if (parent === el) {
                        return true;
                    }
                    return false;
                });
                return [2, String(allChildren.length)];
            });
        });
    },
};
var completeRender = {
    type: 'timed',
    name: 'Complete render (mount + layout + paint)',
    description: "\n    Time taken for the CPU to become idle after starting ReactDOM.render.\n    This will include React's time to create the element and mount it into the DOM,\n    as well as subsequent browser layout and painting\n  ",
    run: function (_a) {
        var getElement = _a.getElement, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var idle;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        idle = window.requestIdleCallback;
                        if (typeof idle !== 'function') {
                            throw new custom_errors_1.UnsupportedError('requestIdleCallback is not supported in this browser');
                        }
                        react_dom_1.default.render(getElement(), container);
                        return [4, new Promise(function (resolve) {
                                idle(function () { return resolve(); });
                            })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    },
};
function traverse(rootNode, callback) {
    function walk(node) {
        callback(node);
        if (!node.child && !node.sibling) {
            return;
        }
        node.child && walk(node.child);
        node.sibling && walk(node.sibling);
    }
    walk(rootNode);
}
exports.traverse = traverse;
var reactFiberNodeCount = {
    type: 'static',
    name: 'React Fiber node count',
    description: "\n    The number of React Elements or internal objects (\"fibers\") that hold information about the component tree state.\n  ",
    run: function (_a) {
        var getElement = _a.getElement, container = _a.container;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var fiberRoot, count;
            var _b, _c;
            return tslib_1.__generator(this, function (_d) {
                react_dom_1.default.render(getElement(), container);
                fiberRoot = (_c = (_b = container === null || container === void 0 ? void 0 : container._reactRootContainer) === null || _b === void 0 ? void 0 : _b._internalRoot) === null || _c === void 0 ? void 0 : _c.current;
                count = 0;
                fiberRoot && traverse(fiberRoot, function () { return count++; });
                return [2, String(count)];
            });
        });
    },
};
var group = {
    groupId: 'Client',
    name: 'Client 👩‍💻',
    tasks: [
        render,
        reRender,
        hydrate,
        domElementCount,
        domElementCountWithoutSvg,
        completeRender,
        reactFiberNodeCount,
    ],
};
exports.default = group;
