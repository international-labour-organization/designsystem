import React from 'react';
import * as Parts from './parts';
import { ExpandingResult } from './expanding-result';
function DiffToPinned({ task, result, pinned, }) {
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
                                pinned.value,
                                task.scale))),
                    React.createElement("tr", null,
                        React.createElement(Parts.TitleCell, null, "Current value"),
                        React.createElement(Parts.ValueCell, null,
                            React.createElement(Parts.ValueLozenge, { type: pinned.value === result.value ? 'raw' : 'info' },
                                result.value,
                                task.scale))))))));
}
function Expanded({ task, result, pinned, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(DiffToPinned, { task: task, result: result, pinned: pinned }),
        React.createElement(Parts.Heading, null, "Description"),
        React.createElement(Parts.Content, null, task.description)));
}
export default function StaticResultView({ task, result, pinned, }) {
    const resultNode = (React.createElement(React.Fragment, null,
        pinned && pinned.value !== result.value ? (React.createElement(Parts.ValueLozenge, { type: "info" },
            pinned.value,
            task.scale)) : null,
        React.createElement(Parts.ResultValue, null, result.value),
        ' ',
        React.createElement(Parts.ResultScale, null, task.scale)));
    return (React.createElement(ExpandingResult, { name: task.name, result: resultNode, getExpanded: ({ isExpanded }) => isExpanded ? React.createElement(Expanded, { task: task, result: result, pinned: pinned }) : null }));
}
