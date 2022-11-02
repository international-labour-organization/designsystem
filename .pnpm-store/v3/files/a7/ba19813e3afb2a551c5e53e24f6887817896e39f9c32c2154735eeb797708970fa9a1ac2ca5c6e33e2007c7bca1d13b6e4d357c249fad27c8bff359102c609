import { UnsupportedError } from './custom-errors';
export default function getErrorResult({ task, error }) {
    if (error instanceof UnsupportedError) {
        return {
            type: 'error',
            taskName: task.name,
            reason: 'unsupported',
            message: error.message,
        };
    }
    return {
        type: 'error',
        taskName: task.name,
        reason: 'unhandled',
        message: null,
    };
}
