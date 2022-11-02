"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterpret = void 0;
var react_1 = require("react");
var use_isomorphic_layout_effect_1 = require("use-isomorphic-layout-effect");
var xstate_1 = require("xstate");
var useConstant_1 = require("./useConstant");
var useReactEffectActions_1 = require("./useReactEffectActions");
// copied from core/src/utils.ts
// it avoids a breaking change between this package and XState which is its peer dep
function toObserver(nextHandler, errorHandler, completionHandler) {
    if (typeof nextHandler === 'object') {
        return nextHandler;
    }
    var noop = function () { return void 0; };
    return {
        next: nextHandler,
        error: errorHandler || noop,
        complete: completionHandler || noop
    };
}
function useInterpret(getMachine, options, observerOrListener) {
    if (options === void 0) { options = {}; }
    var machine = (0, useConstant_1.default)(function () {
        return typeof getMachine === 'function' ? getMachine() : getMachine;
    });
    if (process.env.NODE_ENV !== 'production' &&
        typeof getMachine !== 'function') {
        var _a = __read((0, react_1.useState)(machine), 1), initialMachine = _a[0];
        if (getMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
    var service = (0, useConstant_1.default)(function () {
        var machineConfig = {
            context: context,
            guards: guards,
            actions: actions,
            activities: activities,
            services: services,
            delays: delays
        };
        var machineWithConfig = machine.withConfig(machineConfig, function () { return (__assign(__assign({}, machine.context), context)); });
        return (0, xstate_1.interpret)(machineWithConfig, __assign({ deferEvents: true }, interpreterOptions));
    });
    (0, use_isomorphic_layout_effect_1.default)(function () {
        var sub;
        if (observerOrListener) {
            sub = service.subscribe(toObserver(observerOrListener));
        }
        return function () {
            sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
        };
    }, [observerOrListener]);
    (0, use_isomorphic_layout_effect_1.default)(function () {
        service.start(rehydratedState ? xstate_1.State.create(rehydratedState) : undefined);
        return function () {
            service.stop();
        };
    }, []);
    // Make sure options are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    (0, use_isomorphic_layout_effect_1.default)(function () {
        Object.assign(service.machine.options.actions, actions);
        Object.assign(service.machine.options.guards, guards);
        Object.assign(service.machine.options.activities, activities);
        Object.assign(service.machine.options.services, services);
        Object.assign(service.machine.options.delays, delays);
    }, [actions, guards, activities, services, delays]);
    (0, useReactEffectActions_1.useReactEffectActions)(service);
    return service;
}
exports.useInterpret = useInterpret;
