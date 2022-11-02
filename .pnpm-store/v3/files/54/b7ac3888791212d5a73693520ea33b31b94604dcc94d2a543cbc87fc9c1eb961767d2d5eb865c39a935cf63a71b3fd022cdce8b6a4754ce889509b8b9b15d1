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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useService = exports.useMachine = void 0;
var react_1 = require("react");
var fsm_1 = require("@xstate/fsm");
var use_subscription_1 = require("use-subscription");
var useConstant_1 = require("./useConstant");
var getServiceState = function (service) {
    var currentValue;
    service
        .subscribe(function (state) {
        currentValue = state;
    })
        .unsubscribe();
    return currentValue;
};
function useMachine(stateMachine, options) {
    if (process.env.NODE_ENV !== 'production') {
        var _a = __read((0, react_1.useState)(stateMachine), 1), initialMachine = _a[0];
        if (stateMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var service = (0, useConstant_1.default)(function () {
        return (0, fsm_1.interpret)((0, fsm_1.createMachine)(stateMachine.config, options ? options : stateMachine._options)).start();
    });
    var _b = __read((0, react_1.useState)(function () { return getServiceState(service); }), 2), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        if (options) {
            service._machine._options = options;
        }
    });
    (0, react_1.useEffect)(function () {
        service.subscribe(setState);
        return function () {
            service.stop();
        };
    }, []);
    return [state, service.send, service];
}
exports.useMachine = useMachine;
function useService(service) {
    var subscription = (0, react_1.useMemo)(function () {
        var currentState = getServiceState(service);
        return {
            getCurrentValue: function () { return currentState; },
            subscribe: function (callback) {
                var unsubscribe = service.subscribe(function (state) {
                    if (state.changed !== false) {
                        currentState = state;
                        callback();
                    }
                }).unsubscribe;
                return unsubscribe;
            }
        };
    }, [service]);
    var state = (0, use_subscription_1.useSubscription)(subscription);
    return [state, service.send, service];
}
exports.useService = useService;
