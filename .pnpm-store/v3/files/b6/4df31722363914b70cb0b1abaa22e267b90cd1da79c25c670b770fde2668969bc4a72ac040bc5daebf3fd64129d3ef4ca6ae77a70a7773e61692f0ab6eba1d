import toSafeElement from './to-safe-element';
import runGroup from './run-group';
import { getResultForStaticTask } from './run-static-task';
import { getResultForTimedTask } from './run-timed-task';
export async function runAll({ groups, getNode, samples, copies, }) {
    const value = [];
    for (const group of groups) {
        const results = await runGroup({
            group,
            getElement: () => toSafeElement({ getNode, copies }),
            samples,
        });
        value.push(results);
    }
    return value;
}
export async function runOneTimed({ task, getNode, copies, samples, }) {
    const result = await getResultForTimedTask({
        task,
        getElement: () => toSafeElement({ getNode, copies }),
        samples,
    });
    return result;
}
export async function runOneStatic({ task, getNode, copies, }) {
    return getResultForStaticTask({
        task,
        getElement: () => toSafeElement({ getNode, copies }),
    });
}
