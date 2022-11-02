import React from 'react';
import toFixed from '../../util/to-fixed';
import { ExpandingResult } from './expanding-result';
import * as Parts from './parts';
import getChange from '../../util/get-change';
function getDiff({ result, pinned }) {
    if (!pinned) {
        return 0;
    }
    return getChange({
        baseline: pinned.averageMs,
        value: result.averageMs,
    });
}
function DiffToPinned({ result, pinned }) {
    if (pinned == null) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Parts.Heading, null, "Compared with pinned"),
        React.createElement(Parts.Content, null,
            React.createElement(Parts.Table, null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement(Parts.TitleCell, null, "Pinned value"),
                        React.createElement(Parts.ValueCell, null,
                            React.createElement(Parts.ValueLozenge, { type: "raw" },
                                toFixed(pinned.averageMs, 1),
                                "ms"))),
                    React.createElement("tr", null,
                        React.createElement(Parts.TitleCell, null, "Current value"),
                        React.createElement(Parts.ValueCell, null,
                            React.createElement(Parts.ValueLozenge, { type: "raw" },
                                toFixed(result.averageMs, 1),
                                "ms"))),
                    React.createElement("tr", null,
                        React.createElement(Parts.TitleCell, null, "Difference"),
                        React.createElement(Parts.ValueCell, null,
                            React.createElement(DiffLozenge, { diff: getDiff({ result, pinned }) }))))))));
}
function Variance({ result }) {
    if (result.samples === 1) {
        return null;
    }
    const wasStable = result.variance.standardDeviation < 1;
    return (React.createElement(React.Fragment, null,
        React.createElement(Parts.Heading, null, "Variance"),
        React.createElement(Parts.Note, null, "When doing multiple runs there can be differences between the runs. The lower the variance, the higher confidence you can have"),
        React.createElement(Parts.Table, null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement(Parts.TitleCell, null, "Samples"),
                    React.createElement(Parts.ValueCell, null,
                        React.createElement(Parts.ValueLozenge, { type: "info" }, result.samples))),
                React.createElement("tr", null,
                    React.createElement(Parts.TitleCell, null, "Standard deviation"),
                    React.createElement(Parts.ValueCell, null,
                        React.createElement(Parts.ValueLozenge, { hasWarningIcon: wasStable, type: wasStable ? 'positive' : 'negative' }, toFixed(result.variance.standardDeviation)))),
                React.createElement("tr", null,
                    React.createElement(Parts.TitleCell, null, "Lowest"),
                    React.createElement(Parts.ValueCell, null,
                        React.createElement(Parts.ValueLozenge, { type: "raw" },
                            "-",
                            toFixed(result.variance.lowerPercentage),
                            "%"))),
                React.createElement("tr", null,
                    React.createElement(Parts.TitleCell, null, "Highest"),
                    React.createElement(Parts.ValueCell, null,
                        React.createElement(Parts.ValueLozenge, { type: "raw" },
                            "+",
                            toFixed(result.variance.upperPercentage),
                            "%")))))));
}
function Expanded({ task, result, pinned, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(DiffToPinned, { result: result, pinned: pinned }),
        React.createElement(Variance, { result: result }),
        React.createElement(Parts.Heading, null, "Description"),
        React.createElement(Parts.Content, null, task.description)));
}
function DiffLozenge({ diff }) {
    const type = (() => {
        const threshold = 5;
        if (diff > threshold) {
            return 'negative';
        }
        if (diff < -threshold) {
            return 'positive';
        }
        return 'faint';
    })();
    const sign = diff >= 0 ? '+' : '-';
    return (React.createElement(Parts.ValueLozenge, { type: type },
        sign,
        toFixed(Math.abs(diff), 1),
        "%"));
}
export default function TimedResultView({ task, pinned, result }) {
    const diff = getDiff({ result, pinned });
    const resultNode = (React.createElement(React.Fragment, null,
        diff ? React.createElement(DiffLozenge, { diff: diff }) : null,
        React.createElement(Parts.ResultValue, null, toFixed(result.averageMs)),
        ' ',
        React.createElement(Parts.ResultScale, null, "ms")));
    return (React.createElement(ExpandingResult, { name: task.name, result: resultNode, getExpanded: ({ isExpanded }) => isExpanded ? React.createElement(Expanded, { task: task, result: result, pinned: pinned }) : null }));
}
