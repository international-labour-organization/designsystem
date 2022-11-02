"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReactEffectActions = void 0;
var react_1 = require("react");
var use_isomorphic_layout_effect_1 = require("use-isomorphic-layout-effect");
var types_1 = require("./types");
var utils_1 = require("./utils");
function executeEffect(action, state) {
    var exec = action.exec;
    var originalExec = exec(state.context, state._event.data, {
        action: action,
        state: state,
        _event: state._event
    });
    originalExec();
}
function useReactEffectActions(service) {
    var effectActionsRef = (0, react_1.useRef)([]);
    var layoutEffectActionsRef = (0, react_1.useRef)([]);
    (0, use_isomorphic_layout_effect_1.default)(function () {
        var sub = service.subscribe(function (currentState) {
            var _a, _b;
            if (currentState.actions.length) {
                var reactEffectActions = currentState.actions.filter(function (action) {
                    return (typeof action.exec === 'function' &&
                        '__effect' in action.exec);
                });
                var _c = __read((0, utils_1.partition)(reactEffectActions, function (action) {
                    return action.exec.__effect === types_1.ReactEffectType.Effect;
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
    (0, use_isomorphic_layout_effect_1.default)(function () {
        while (layoutEffectActionsRef.current.length) {
            var _a = __read(layoutEffectActionsRef.current.shift(), 2), layoutEffectAction = _a[0], effectState = _a[1];
            executeEffect(layoutEffectAction, effectState);
        }
    }); // https://github.com/davidkpiano/xstate/pull/1202#discussion_r429677773
    (0, react_1.useEffect)(function () {
        while (effectActionsRef.current.length) {
            var _a = __read(effectActionsRef.current.shift(), 2), effectAction = _a[0], effectState = _a[1];
            executeEffect(effectAction, effectState);
        }
    });
}
exports.useReactEffectActions = useReactEffectActions;
