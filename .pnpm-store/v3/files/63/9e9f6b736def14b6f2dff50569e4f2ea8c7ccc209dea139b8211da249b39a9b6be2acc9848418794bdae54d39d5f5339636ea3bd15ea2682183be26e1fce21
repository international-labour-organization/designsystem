import { packageName } from './../addon-constants';
const startMark = `${packageName}-start`;
const endMark = `${packageName}-end`;
export default async function mark(taskName, fn) {
    performance.mark(startMark);
    try {
        const result = await fn();
        performance.mark(endMark);
        performance.measure(`🚀 (Task: ${taskName})`, startMark, endMark);
        return result;
    }
    catch (e) {
        performance.mark(endMark);
        performance.measure(`🚀❌ (Task: ${taskName})`, startMark, endMark);
        throw e;
    }
}
