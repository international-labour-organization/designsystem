"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var to_fixed_1 = tslib_1.__importDefault(require("../../util/to-fixed"));
var expanding_result_1 = require("./expanding-result");
var Parts = tslib_1.__importStar(require("./parts"));
var get_change_1 = tslib_1.__importDefault(require("../../util/get-change"));
function getDiff(_a) {
    var result = _a.result, pinned = _a.pinned;
    if (!pinned) {
        return 0;
    }
    return get_change_1.default({
        baseline: pinned.averageMs,
        value: result.averageMs,
    });
}
function DiffToPinned(_a) {
    var result = _a.result, pinned = _a.pinned;
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
                                to_fixed_1.default(pinned.averageMs, 1),
                                "ms"))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(Parts.TitleCell, null, "Current value"),
                        react_1.default.createElement(Parts.ValueCell, null,
                            react_1.default.createElement(Parts.ValueLozenge, { type: "raw" },
                                to_fixed_1.default(result.averageMs, 1),
                                "ms"))),
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement(Parts.TitleCell, null, "Difference"),
                        react_1.default.createElement(Parts.ValueCell, null,
                            react_1.default.createElement(DiffLozenge, { diff: getDiff({ result: result, pinned: pinned }) }))))))));
}
function Variance(_a) {
    var result = _a.result;
    if (result.samples === 1) {
        return null;
    }
    var wasStable = result.variance.standardDeviation < 1;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Parts.Heading, null, "Variance"),
        react_1.default.createElement(Parts.Note, null, "When doing multiple runs there can be differences between the runs. The lower the variance, the higher confidence you can have"),
        react_1.default.createElement(Parts.Table, null,
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(Parts.TitleCell, null, "Samples"),
                    react_1.default.createElement(Parts.ValueCell, null,
                        react_1.default.createElement(Parts.ValueLozenge, { type: "info" }, result.samples))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(Parts.TitleCell, null, "Standard deviation"),
                    react_1.default.createElement(Parts.ValueCell, null,
                        react_1.default.createElement(Parts.ValueLozenge, { hasWarningIcon: wasStable, type: wasStable ? 'positive' : 'negative' }, to_fixed_1.default(result.variance.standardDeviation)))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(Parts.TitleCell, null, "Lowest"),
                    react_1.default.createElement(Parts.ValueCell, null,
                        react_1.default.createElement(Parts.ValueLozenge, { type: "raw" },
                            "-",
                            to_fixed_1.default(result.variance.lowerPercentage),
                            "%"))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(Parts.TitleCell, null, "Highest"),
                    react_1.default.createElement(Parts.ValueCell, null,
                        react_1.default.createElement(Parts.ValueLozenge, { type: "raw" },
                            "+",
                            to_fixed_1.default(result.variance.upperPercentage),
                            "%")))))));
}
function Expanded(_a) {
    var task = _a.task, result = _a.result, pinned = _a.pinned;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DiffToPinned, { result: result, pinned: pinned }),
        react_1.default.createElement(Variance, { result: result }),
        react_1.default.createElement(Parts.Heading, null, "Description"),
        react_1.default.createElement(Parts.Content, null, task.description)));
}
function DiffLozenge(_a) {
    var diff = _a.diff;
    var type = (function () {
        var threshold = 5;
        if (diff > threshold) {
            return 'negative';
        }
        if (diff < -threshold) {
            return 'positive';
        }
        return 'faint';
    })();
    var sign = diff >= 0 ? '+' : '-';
    return (react_1.default.createElement(Parts.ValueLozenge, { type: type },
        sign,
        to_fixed_1.default(Math.abs(diff), 1),
        "%"));
}
function TimedResultView(_a) {
    var task = _a.task, pinned = _a.pinned, result = _a.result;
    var diff = getDiff({ result: result, pinned: pinned });
    var resultNode = (react_1.default.createElement(react_1.default.Fragment, null,
        diff ? react_1.default.createElement(DiffLozenge, { diff: diff }) : null,
        react_1.default.createElement(Parts.ResultValue, null, to_fixed_1.default(result.averageMs)),
        ' ',
        react_1.default.createElement(Parts.ResultScale, null, "ms")));
    return (react_1.default.createElement(expanding_result_1.ExpandingResult, { name: task.name, result: resultNode, getExpanded: function (_a) {
            var isExpanded = _a.isExpanded;
            return isExpanded ? react_1.default.createElement(Expanded, { task: task, result: result, pinned: pinned }) : null;
        } }));
}
exports.default = TimedResultView;
