var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { useActor } from './useActor';
export function getServiceSnapshot(service) {
    // TODO: remove compat lines in a new major, replace literal number with InterpreterStatus then as well
    return ('status' in service ? service.status : service._status) !== 0
        ? service.state
        : service.machine.initialState;
}
/**
 * @deprecated Use `useActor` instead.
 *
 * @param service The interpreted machine
 * @returns A tuple of the current `state` of the service and the service's `send(event)` method
 */
export function useService(service) {
    if (process.env.NODE_ENV !== 'production' && !('machine' in service)) {
        throw new Error("Attempted to use an actor-like object instead of a service in the useService() hook. Please use the useActor() hook instead.");
    }
    var _a = __read(useActor(service), 1), state = _a[0];
    return [state, service.send];
}
