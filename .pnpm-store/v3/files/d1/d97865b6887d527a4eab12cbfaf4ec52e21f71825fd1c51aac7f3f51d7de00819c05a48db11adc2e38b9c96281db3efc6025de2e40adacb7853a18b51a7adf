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
import { useState, useRef } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import useConstant from './useConstant';
export function isActorWithState(actorRef) {
    return 'state' in actorRef;
}
function isDeferredActor(actorRef) {
    return 'deferred' in actorRef;
}
var noop = function () {
    /* ... */
};
function defaultGetSnapshot(actorRef) {
    return 'getSnapshot' in actorRef
        ? actorRef.getSnapshot()
        : isActorWithState(actorRef)
            ? actorRef.state
            : undefined;
}
export function useActor(actorRef, getSnapshot) {
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var actorRefRef = useRef(actorRef);
    var deferredEventsRef = useRef([]);
    var _a = __read(useState(function () { return getSnapshot(actorRef); }), 2), current = _a[0], setCurrent = _a[1];
    var send = useConstant(function () { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var event = args[0];
        if (process.env.NODE_ENV !== 'production' && args.length > 1) {
            console.warn("Unexpected payload: ".concat(JSON.stringify(args[1]), ". Only a single event object can be sent to actor send() functions."));
        }
        var currentActorRef = actorRefRef.current;
        // If the previous actor is a deferred actor,
        // queue the events so that they can be replayed
        // on the non-deferred actor.
        if (isDeferredActor(currentActorRef) && currentActorRef.deferred) {
            deferredEventsRef.current.push(event);
        }
        else {
            currentActorRef.send(event);
        }
    }; });
    useIsomorphicLayoutEffect(function () {
        actorRefRef.current = actorRef;
        setCurrent(getSnapshot(actorRef));
        var subscription = actorRef.subscribe({
            next: function (emitted) { return setCurrent(emitted); },
            error: noop,
            complete: noop
        });
        // Dequeue deferred events from the previous deferred actorRef
        while (deferredEventsRef.current.length > 0) {
            var deferredEvent = deferredEventsRef.current.shift();
            actorRef.send(deferredEvent);
        }
        return function () {
            subscription.unsubscribe();
        };
    }, [actorRef]);
    return [current, send];
}
