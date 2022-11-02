import { SourceNode } from "source-map";
export class TwingSourceMapNode {
    /**
     * TwingSourceMapNode constructor
     *
     * @param {number} line 0-based
     * @param {number} column 0-based
     * @param {TwingSource} source
     * @param {string} name
     */
    constructor(line, column, source, name) {
        this._name = name;
        this._source = source;
        this._line = line;
        this._column = column;
        this._content = null;
        this._parent = null;
        this._children = [];
    }
    get name() {
        return this._name;
    }
    get source() {
        return this._source;
    }
    get line() {
        return this._line;
    }
    get column() {
        return this._column;
    }
    get content() {
        return this._content;
    }
    get parent() {
        return this._parent;
    }
    get children() {
        return this._children;
    }
    set content(content) {
        this._content = content;
    }
    addChild(child) {
        child._parent = this;
        this._children.push(child);
    }
    toSourceNode() {
        let chunks = null;
        if (this._children.length === 0) {
            chunks = this._content;
        }
        // source-map@6 types are faulty, we have to force-type chunks as any
        let sourceNode = new SourceNode(this._line, this._column, this._source.getName(), chunks, this._name);
        sourceNode.setSourceContent(this._source.getName(), this._source.getCode());
        for (let child of this._children) {
            sourceNode.add(child.toSourceNode());
        }
        return sourceNode;
    }
}
