function waitForFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => resolve());
    });
}
export async function asyncMap({ source, map, }) {
    const results = [];
    for (let i = 0; i < source.length; i++) {
        await waitForFrame();
        const value = await map(source[i], i, source);
        results.push(value);
    }
    return results;
}
export async function asyncFor({ count, fn }) {
    for (let i = 0; i < count; i++) {
        await waitForFrame();
        await fn(i);
    }
}
