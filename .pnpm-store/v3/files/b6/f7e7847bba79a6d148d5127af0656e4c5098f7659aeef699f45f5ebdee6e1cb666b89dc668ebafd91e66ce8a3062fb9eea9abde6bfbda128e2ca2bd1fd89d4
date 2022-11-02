import React from 'react';
import { ExpandingResult } from './expanding-result';
import * as Parts from './parts';
function ErrorSection({ result }) {
    const message = result.message ? (React.createElement(Parts.Content, null,
        "Message: ",
        result.message)) : null;
    if (result.reason === 'unhandled') {
        return (React.createElement(React.Fragment, null,
            React.createElement(Parts.Heading, null, "Error \u274C"),
            React.createElement(Parts.Content, null, "An unhandled error has occurred while running this task"),
            message));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Parts.Heading, null, "Unsupported \u26A0\uFE0F"),
        React.createElement(Parts.Content, null, "This task is not supported in the current running environment"),
        message));
}
function Expanded({ task, result }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ErrorSection, { result: result }),
        React.createElement(Parts.Heading, null, "Description"),
        React.createElement(Parts.Content, null, task.description)));
}
export default function ErrorResultView({ task, result }) {
    const resultNode = result.reason === 'unsupported' ? (React.createElement(Parts.ValueLozenge, { type: "warning" }, "Unsupported")) : (React.createElement(Parts.ValueLozenge, { type: "negative" }, "Error"));
    return (React.createElement(ExpandingResult, { name: task.name, result: resultNode, getExpanded: ({ isExpanded }) => isExpanded ? React.createElement(Expanded, { task: task, result: result }) : null }));
}
