import { TwingSourceMapNode } from "./node";
export class TwingSourceMapNodeFactory {
    constructor(name) {
        this._name = name;
    }
    create(line, column, source) {
        return new TwingSourceMapNode(line, column, source, this.nodeName);
    }
    get nodeName() {
        return this._name;
    }
}
