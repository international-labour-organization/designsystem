import client from './preset/client';
import server from './preset/server';
import { getInteractionGroup } from './get-interaction-group';
import flatten from '../util/flatten';
import invariant from 'tiny-invariant';
function getDuplicateTaskNames(groups) {
    const tasks = flatten(groups.map((group) => group.tasks));
    const allNames = tasks.map((task) => task.name);
    const duplicates = allNames.filter((name) => {
        return allNames.filter((value) => value === name).length > 1;
    });
    return [...new Set(duplicates)];
}
export function getGroups({ allowedGroups, interactions, }) {
    const result = [];
    if (allowedGroups.includes('server')) {
        result.push(server);
    }
    if (allowedGroups.includes('client')) {
        const tasks = allowedGroups.includes('server')
            ? client.tasks
            : client.tasks.filter((task) => task.name !== 'Hydrate');
        result.push({
            ...client,
            tasks,
        });
    }
    result.push(getInteractionGroup(interactions));
    const duplicateNames = getDuplicateTaskNames(result);
    invariant(!duplicateNames.length, `Tasks found with duplicate names: [${duplicateNames.join(',')}]`);
    return result;
}
