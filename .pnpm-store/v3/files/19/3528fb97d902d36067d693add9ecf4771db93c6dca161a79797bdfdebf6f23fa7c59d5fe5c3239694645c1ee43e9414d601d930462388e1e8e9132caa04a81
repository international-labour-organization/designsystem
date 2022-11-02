import invariant from 'tiny-invariant';
async function getDuration(fn) {
    const start = performance.now();
    await fn();
    const finish = performance.now();
    return finish - start;
}
export default async function withDuration(fn) {
    let timedDuration = null;
    let isControlled = false;
    const controls = {
        time: async function time(fn) {
            invariant(!isControlled, 'controls.time has already been used');
            isControlled = true;
            timedDuration = await getDuration(fn);
        },
    };
    const wholeTaskDuration = await getDuration(() => fn(controls));
    if (isControlled) {
        invariant(timedDuration != null, `
      You have used controls.timed but have not waited for the result to finish
      Ensure that you wait for the result:

      await controls.time(async () => {});

      You might not be waiting for controls.time

      controls.time(async () => {});
    `);
        return timedDuration;
    }
    return wholeTaskDuration;
}
