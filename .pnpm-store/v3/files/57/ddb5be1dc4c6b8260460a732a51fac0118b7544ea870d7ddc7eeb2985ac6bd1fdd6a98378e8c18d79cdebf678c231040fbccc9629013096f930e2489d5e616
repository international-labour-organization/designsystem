import getErrorResult from './get-error-result';
import printError from './print-error';
import mark from './mark';
import withContainer from './with-container';
async function runStaticTask({ task, getElement }) {
    return await withContainer(async (container) => {
        return await mark(task.name, () => task.run({ getElement, container }));
    });
}
export async function getResultForStaticTask({ task, getElement, }) {
    try {
        const value = await runStaticTask({ task, getElement });
        const result = {
            type: 'static',
            taskName: task.name,
            value,
        };
        return result;
    }
    catch (error) {
        printError({ task, error });
        return getErrorResult({ task, error });
    }
}
