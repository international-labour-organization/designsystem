"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var expanding_result_1 = require("./expanding-result");
var Parts = tslib_1.__importStar(require("./parts"));
function ErrorSection(_a) {
    var result = _a.result;
    var message = result.message ? (react_1.default.createElement(Parts.Content, null,
        "Message: ",
        result.message)) : null;
    if (result.reason === 'unhandled') {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Parts.Heading, null, "Error \u274C"),
            react_1.default.createElement(Parts.Content, null, "An unhandled error has occurred while running this task"),
            message));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Parts.Heading, null, "Unsupported \u26A0\uFE0F"),
        react_1.default.createElement(Parts.Content, null, "This task is not supported in the current running environment"),
        message));
}
function Expanded(_a) {
    var task = _a.task, result = _a.result;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ErrorSection, { result: result }),
        react_1.default.createElement(Parts.Heading, null, "Description"),
        react_1.default.createElement(Parts.Content, null, task.description)));
}
function ErrorResultView(_a) {
    var task = _a.task, result = _a.result;
    var resultNode = result.reason === 'unsupported' ? (react_1.default.createElement(Parts.ValueLozenge, { type: "warning" }, "Unsupported")) : (react_1.default.createElement(Parts.ValueLozenge, { type: "negative" }, "Error"));
    return (react_1.default.createElement(expanding_result_1.ExpandingResult, { name: task.name, result: resultNode, getExpanded: function (_a) {
            var isExpanded = _a.isExpanded;
            return isExpanded ? react_1.default.createElement(Expanded, { task: task, result: result }) : null;
        } }));
}
exports.default = ErrorResultView;
