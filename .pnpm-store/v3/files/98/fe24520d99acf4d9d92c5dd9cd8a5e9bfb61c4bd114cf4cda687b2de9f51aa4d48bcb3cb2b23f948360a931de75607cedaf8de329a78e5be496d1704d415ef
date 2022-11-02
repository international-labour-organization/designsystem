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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useCallback, useState } from 'react';
import { State } from 'xstate';
import { ReactEffectType } from './types';
import { useInterpret } from './useInterpret';
function createReactActionFunction(exec, tag) {
    var effectExec = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't execute; just return
        return function () {
            return exec.apply(void 0, __spreadArray([], __read(args), false));
        };
    };
    Object.defineProperties(effectExec, {
        name: { value: "effect:".concat(exec.name) },
        __effect: { value: tag }
    });
    return effectExec;
}
export function asEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.Effect);
}
export function asLayoutEffect(exec) {
    return createReactActionFunction(exec, ReactEffectType.LayoutEffect);
}
export function useMachine(getMachine, options) {
    if (options === void 0) { options = {}; }
    var listener = useCallback(function (nextState) {
        // Only change the current state if:
        // - the incoming state is the "live" initial state (since it might have new actors)
        // - OR the incoming state actually changed.
        //
        // The "live" initial state will have .changed === undefined.
        var initialStateChanged = nextState.changed === undefined &&
            Object.keys(nextState.children).length;
        if (nextState.changed || initialStateChanged) {
            setState(nextState);
        }
    }, []);
    var service = useInterpret(getMachine, options, listener);
    var _a = __read(useState(function () {
        var initialState = service.machine.initialState;
        return (options.state
            ? State.create(options.state)
            : initialState);
    }), 2), state = _a[0], setState = _a[1];
    return [state, service.send, service];
}
