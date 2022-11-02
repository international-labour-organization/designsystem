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
import { useState, useEffect, useMemo } from 'react';
import { interpret, createMachine } from '@xstate/fsm';
import { useSubscription } from 'use-subscription';
import useConstant from './useConstant';
var getServiceState = function (service) {
    var currentValue;
    service
        .subscribe(function (state) {
        currentValue = state;
    })
        .unsubscribe();
    return currentValue;
};
export function useMachine(stateMachine, options) {
    if (process.env.NODE_ENV !== 'production') {
        var _a = __read(useState(stateMachine), 1), initialMachine = _a[0];
        if (stateMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var service = useConstant(function () {
        return interpret(createMachine(stateMachine.config, options ? options : stateMachine._options)).start();
    });
    var _b = __read(useState(function () { return getServiceState(service); }), 2), state = _b[0], setState = _b[1];
    useEffect(function () {
        if (options) {
            service._machine._options = options;
        }
    });
    useEffect(function () {
        service.subscribe(setState);
        return function () {
            service.stop();
        };
    }, []);
    return [state, service.send, service];
}
export function useService(service) {
    var subscription = useMemo(function () {
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
    var state = useSubscription(subscription);
    return [state, service.send, service];
}
