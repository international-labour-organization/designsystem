import { iteratorToMap } from "./helpers/iterator-to-map";
export class TwingContext {
    constructor(container = new Map()) {
        this._container = container;
        this._proxy = new Proxy(this._container, {
            set: (target, key, value, receiver) => {
                target.set(key, value);
                return true;
            },
            get(target, key, receiver) {
                return target.get(key);
            }
        });
    }
    get proxy() {
        return this._proxy;
    }
    [Symbol.iterator]() {
        return this._container[Symbol.iterator]();
    }
    entries() {
        return this._container.entries();
    }
    has(key) {
        return this._container.has(key);
    }
    set(key, value) {
        this._container.set(key, value);
        return this;
    }
    get(key) {
        let value = this._container.get(key);
        if (Array.isArray(value)) {
            value = iteratorToMap(value);
        }
        return value;
    }
    delete(key) {
        return this._container.delete(key);
    }
    clone() {
        let clonedContainer = new Map();
        for (let [key, value] of this._container) {
            clonedContainer.set(key, value);
        }
        return new TwingContext(clonedContainer);
    }
}
