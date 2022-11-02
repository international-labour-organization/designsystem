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
import { useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { ReactEffectType } from './types';
import { partition } from './utils';
function executeEffect(action, state) {
    var exec = action.exec;
    var originalExec = exec(state.context, state._event.data, {
        action: action,
        state: state,
        _event: state._event
    });
    originalExec();
}
export function useReactEffectActions(service) {
    var effectActionsRef = useRef([]);
    var layoutEffectActionsRef = useRef([]);
    useIsomorphicLayoutEffect(function () {
        var sub = service.subscribe(function (currentState) {
            var _a, _b;
            if (currentState.actions.length) {
                var reactEffectActions = currentState.actions.filter(function (action) {
                    return (typeof action.exec === 'function' &&
                        '__effect' in action.exec);
                });
                var _c = __read(partition(reactEffectActions, function (action) {
                    return action.exec.__effect === ReactEffectType.Effect;
                }), 2), effectActions = _c[0], layoutEffectActions = _c[1];
                (_a = effectActionsRef.current).push.apply(_a, __spreadArray([], __read(effectActions.map(function (effectAction) { return [effectAction, currentState]; })), false));
                (_b = layoutEffectActionsRef.current).push.apply(_b, __spreadArray([], __read(layoutEffectActions.map(function (layoutEffectAction) { return [layoutEffectAction, currentState]; })), false));
            }
        });
        return function () {
            sub.unsubscribe();
        };
    }, []);
    // this is somewhat weird - this should always be flushed within useLayoutEffect
    // but we don't want to receive warnings about useLayoutEffect being used on the server
    // so we have to use `useIsomorphicLayoutEffect` to silence those warnings
    useIsomorphicLayoutEffect(function () {
        while (layoutEffectActionsRef.current.length) {
            var _a = __read(layoutEffectActionsRef.current.shift(), 2), layoutEffectAction = _a[0], effectState = _a[1];
            executeEffect(layoutEffectAction, effectState);
        }
    }); // https://github.com/davidkpiano/xstate/pull/1202#discussion_r429677773
    useEffect(function () {
        while (effectActionsRef.current.length) {
            var _a = __read(effectActionsRef.current.shift(), 2), effectAction = _a[0], effectState = _a[1];
            executeEffect(effectAction, effectState);
        }
    });
}
