"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindAll = exports.bind = void 0;
function bind(channel, binding) {
    channel.on(binding.eventName, binding.fn);
    return function unbind() {
        channel.off(binding.eventName, binding.fn);
    };
}
exports.bind = bind;
function bindAll(channel, bindings) {
    var unbinds = bindings.map(function (binding) { return bind(channel, binding); });
    return function unbindAll() {
        unbinds.forEach(function (unbind) { return unbind(); });
    };
}
exports.bindAll = bindAll;
