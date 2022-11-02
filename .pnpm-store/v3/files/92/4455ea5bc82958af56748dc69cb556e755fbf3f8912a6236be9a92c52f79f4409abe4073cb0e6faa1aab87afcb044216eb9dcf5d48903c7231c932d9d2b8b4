export default function printError({ task, error }) {
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    console.group(`🚀❌ Error in task: (${task.name})`);
    console.error(error);
    console.groupEnd();
}
