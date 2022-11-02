"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSourceMapNodeFactory = void 0;
const node_1 = require("./node");
class TwingSourceMapNodeFactory {
    constructor(name) {
        this._name = name;
    }
    create(line, column, source) {
        return new node_1.TwingSourceMapNode(line, column, source, this.nodeName);
    }
    get nodeName() {
        return this._name;
    }
}
exports.TwingSourceMapNodeFactory = TwingSourceMapNodeFactory;
