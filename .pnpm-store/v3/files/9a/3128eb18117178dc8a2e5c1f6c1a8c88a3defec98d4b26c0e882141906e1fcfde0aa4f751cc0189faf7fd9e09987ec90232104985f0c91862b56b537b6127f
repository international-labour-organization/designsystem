import { useMemo, useRef } from 'react';
import { useSubscription } from 'use-subscription';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { isActorWithState } from './useActor';
import { getServiceSnapshot } from './useService';
function isService(actor) {
    return 'state' in actor && 'machine' in actor;
}
var defaultCompare = function (a, b) { return a === b; };
var defaultGetSnapshot = function (a) {
    return isService(a)
        ? getServiceSnapshot(a)
        : isActorWithState(a)
            ? a.state
            : undefined;
};
export function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    if (getSnapshot === void 0) { getSnapshot = defaultGetSnapshot; }
    var latestSelectorRef = useRef(selector);
    var subscription = useMemo(function () {
        var snapshot = getSnapshot(actor);
        var current = selector(snapshot);
        var notifySubscriber;
        return {
            getSnapshot: function () { return snapshot; },
            getCurrentValue: function () { return current; },
            setCurrentValue: function (newCurrent) {
                current = newCurrent;
                notifySubscriber === null || notifySubscriber === void 0 ? void 0 : notifySubscriber();
            },
            subscribe: function (callback) {
                notifySubscriber = callback;
                var sub = actor.subscribe(function (emitted) {
                    snapshot = emitted;
                    var next = latestSelectorRef.current(emitted);
                    if (!compare(current, next)) {
                        current = next;
                        callback();
                    }
                });
                return function () {
                    sub.unsubscribe();
                };
            }
        };
        // intentionally omit `getSnapshot` and `compare`
        // - `getSnapshot`: it is only supposed to read the "initial" snapshot of an actor
        // - `compare`: is really supposed to be idempotent and the same throughout the lifetime of this hook (the same assumption is made in React Redux v7)
    }, [actor]);
    var currentSelected = useSubscription(subscription);
    var currentChanged = false;
    if (latestSelectorRef.current !== selector) {
        var selected = selector(subscription.getSnapshot());
        if (!compare(currentSelected, selected)) {
            currentChanged = true;
            currentSelected = selected;
        }
    }
    useIsomorphicLayoutEffect(function () {
        latestSelectorRef.current = selector;
        // this condition should not be required, but setState bailouts are currently buggy: https://github.com/facebook/react/issues/22654
        if (currentChanged) {
            // required so we don't cause a rerender by setting state (this could create infinite rerendering loop with inline selectors)
            // at the same time we need to update the value within the subscription so new emits can compare against what has been returned to the user as current value
            subscription.setCurrentValue(currentSelected);
        }
    });
    return currentSelected;
}
