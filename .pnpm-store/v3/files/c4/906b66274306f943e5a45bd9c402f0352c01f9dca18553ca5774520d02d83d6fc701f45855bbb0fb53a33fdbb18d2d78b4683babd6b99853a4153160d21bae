export function bind(channel, binding) {
    channel.on(binding.eventName, binding.fn);
    return function unbind() {
        channel.off(binding.eventName, binding.fn);
    };
}
export function bindAll(channel, bindings) {
    const unbinds = bindings.map((binding) => bind(channel, binding));
    return function unbindAll() {
        unbinds.forEach((unbind) => unbind());
    };
}
