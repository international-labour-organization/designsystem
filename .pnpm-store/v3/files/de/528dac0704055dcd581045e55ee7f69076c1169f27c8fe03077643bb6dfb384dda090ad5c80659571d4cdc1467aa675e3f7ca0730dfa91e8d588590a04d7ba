import getResultMap from '../util/get-result-map';
import { asyncMap } from './async';
import { getResultForStaticTask } from './run-static-task';
import { getResultForTimedTask } from './run-timed-task';
export default async function runGroup({ group, getElement, samples, }) {
    const staticResults = await asyncMap({
        source: group.tasks.filter((task) => task.type === 'static'),
        map: async function map(task) {
            return getResultForStaticTask({
                task,
                getElement,
            });
        },
    });
    const timedResults = await asyncMap({
        source: group.tasks.filter((task) => task.type === 'timed'),
        map: async function map(task) {
            return getResultForTimedTask({
                task,
                getElement,
                samples,
            });
        },
    });
    const interactionResults = await asyncMap({
        source: group.tasks.filter((task) => task.type === 'interaction'),
        map: async function map(task) {
            return getResultForTimedTask({
                task,
                getElement,
                samples,
            });
        },
    });
    const results = {
        groupId: group.groupId,
        map: getResultMap([...timedResults, ...staticResults, ...interactionResults]),
    };
    return results;
}
