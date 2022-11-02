"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Parts = tslib_1.__importStar(require("./parts"));
var expanding_result_1 = require("./expanding-result");
function DiffToPinned(_a) {
    var task = _a.task, result = _a.result, pinned = _a.pinned;
    if (pinned == null) {
        return null;
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Parts.Heading, null, "Compared with pinned"),
        react_1.default.createElement(Parts.Content, null,
            react_1.default.createElement(Parts.Table, null,
                react_1.default.createElement("tbody", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(Parts.TitleCell, null, "Pinned value"),
                        react_1.default.createElement(Parts.ValueCell, null,
                            react_1.default.createElement(Parts.ValueLozenge, { type: "raw" },
                                pinned.value,
                                task.scale))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(Parts.TitleCell, null, "Current value"),
                        react_1.default.createElement(Parts.ValueCell, null,
                            react_1.default.createElement(Parts.ValueLozenge, { type: pinned.value === result.value ? 'raw' : 'info' },
                                result.value,
                                task.scale))))))));
}
function Expanded(_a) {
    var task = _a.task, result = _a.result, pinned = _a.pinned;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DiffToPinned, { task: task, result: result, pinned: pinned }),
        react_1.default.createElement(Parts.Heading, null, "Description"),
        react_1.default.createElement(Parts.Content, null, task.description)));
}
function StaticResultView(_a) {
    var task = _a.task, result = _a.result, pinned = _a.pinned;
    var resultNode = (react_1.default.createElement(react_1.default.Fragment, null,
        pinned && pinned.value !== result.value ? (react_1.default.createElement(Parts.ValueLozenge, { type: "info" },
            pinned.value,
            task.scale)) : null,
        react_1.default.createElement(Parts.ResultValue, null, result.value),
        ' ',
        react_1.default.createElement(Parts.ResultScale, null, task.scale)));
    return (react_1.default.createElement(expanding_result_1.ExpandingResult, { name: task.name, result: resultNode, getExpanded: function (_a) {
            var isExpanded = _a.isExpanded;
            return isExpanded ? react_1.default.createElement(Expanded, { task: task, result: result, pinned: pinned }) : null;
        } }));
}
exports.default = StaticResultView;
