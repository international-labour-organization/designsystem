import { flatten } from 'xstate/lib/utils';
export default function getTaskMap(groups) {
    return flatten(groups.map((group) => group.tasks)).reduce((acc, task) => {
        acc[task.name] = task;
        return acc;
    }, {});
}
