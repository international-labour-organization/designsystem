import { asyncMap } from './async';
import getErrorResult from './get-error-result';
import mark from './mark';
import printError from './print-error';
import runInteractionTask from './run-interaction-task';
import withContainer from './with-container';
import withDuration from './with-duration';
function getAverage(values) {
    return values.reduce((total, current) => total + current, 0) / values.length;
}
function getStandardDeviation(average, values) {
    const squaredDifferences = values.map((value) => (value - average) ** 2);
    const squareDifferenceAverage = getAverage(squaredDifferences);
    return Math.sqrt(squareDifferenceAverage);
}
function getDifferenceFrom(relativeTo, target) {
    const diff = Math.abs(target - relativeTo);
    return (diff / relativeTo) * 100;
}
function getUpperAndLower(average, values) {
    const ordered = [...values].sort((a, b) => a - b);
    const lowest = ordered[0];
    const highest = ordered[ordered.length - 1];
    return {
        lowerPercentage: getDifferenceFrom(average, lowest),
        upperPercentage: getDifferenceFrom(average, highest),
    };
}
async function runTimedTask({ task, getElement }) {
    return withContainer((container) => {
        return mark(task.name, () => withDuration((controls) => task.run({ controls, container, getElement })));
    });
}
export async function getResultForTimedTask({ task, getElement, samples, }) {
    try {
        const durations = await asyncMap({
            source: Array.from({ length: samples }),
            map: async function map() {
                if (task.type === 'timed') {
                    return runTimedTask({
                        task,
                        getElement,
                    });
                }
                return runInteractionTask({
                    task,
                    getElement,
                });
            },
        });
        const average = getAverage(durations);
        const { upperPercentage, lowerPercentage } = getUpperAndLower(average, durations);
        const standardDeviation = getStandardDeviation(average, durations);
        const result = {
            type: 'timed',
            taskName: task.name,
            averageMs: average,
            samples,
            variance: {
                upperPercentage,
                lowerPercentage,
                standardDeviation,
            },
        };
        return result;
    }
    catch (error) {
        printError({ task, error });
        return getErrorResult({ task, error });
    }
}
