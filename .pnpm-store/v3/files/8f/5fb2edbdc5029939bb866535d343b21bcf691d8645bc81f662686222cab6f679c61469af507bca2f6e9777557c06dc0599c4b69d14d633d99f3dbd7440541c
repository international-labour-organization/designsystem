import React from 'react';
import invariant from 'tiny-invariant';
import ErrorResultView from './error-result';
import StaticResultView from './static-result';
import TimedResultView from './timed-result';
export default function TaskResult({ task, result, pinned }) {
    if (result == null) {
        return null;
    }
    if (result.type === 'error') {
        return React.createElement(ErrorResultView, { key: task.name, task: task, result: result });
    }
    if (result.type === 'static') {
        invariant(task.type === 'static', `Unexpected task type: ${task.type}`);
        const pin = pinned && pinned.type === 'static' ? pinned : null;
        return React.createElement(StaticResultView, { key: task.name, task: task, result: result, pinned: pin });
    }
    if (result.type === 'timed') {
        invariant(task.type === 'timed' || task.type === 'interaction', `Unexpected task type: ${task.type}`);
        const pin = pinned && pinned.type === 'timed' ? pinned : null;
        return React.createElement(TimedResultView, { key: task.name, task: task, result: result, pinned: pin });
    }
    console.error('Incorrect data passed to TaskResult', { result, task, pinned });
    return null;
}
