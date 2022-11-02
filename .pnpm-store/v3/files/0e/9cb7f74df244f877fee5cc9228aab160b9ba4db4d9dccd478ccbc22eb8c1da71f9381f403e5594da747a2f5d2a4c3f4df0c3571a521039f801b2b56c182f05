"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSourceMapNodeSpaceless = void 0;
const node_1 = require("../node");
const spaceless_1 = require("../../node/spaceless");
class TwingSourceMapNodeSpaceless extends node_1.TwingSourceMapNode {
    /**
     * TwingSourceMapNodeSpaceless constructor
     *
     * @param {number} line 0-based
     * @param {number} column 0-based
     * @param {TwingSource} source
     */
    constructor(line, column, source) {
        super(line, column, source, spaceless_1.type.toString());
    }
    toSourceNode() {
        let flattenedChildren = [];
        let flattenChildren = (node) => {
            for (let child of node.children) {
                flattenedChildren.push(child);
                flattenChildren(child);
            }
        };
        flattenChildren(this);
        let tagCloseRegex = />\s*$/;
        let tagOpenRegex = /^\s*</;
        let emptyRegex = /^\s*$/;
        let leadingChildrenToTrim = [];
        let trailingChildrenToTrim = [];
        let i;
        let done;
        i = 0;
        done = false;
        while (!done && i < flattenedChildren.length) {
            let child = flattenedChildren[i];
            leadingChildrenToTrim.push(child);
            done = !emptyRegex.test(child.content);
            i++;
        }
        i = flattenedChildren.length - 1;
        done = false;
        while (!done && i >= 0) {
            let child = flattenedChildren[i];
            trailingChildrenToTrim.push(child);
            done = !emptyRegex.test(child.content);
            i--;
        }
        for (let child of leadingChildrenToTrim) {
            child.content = child.content.trimLeft();
        }
        for (let child of trailingChildrenToTrim) {
            child.content = child.content.trimRight();
        }
        let closeTagNode = null;
        let toEmptyNodes = [];
        for (let child of flattenedChildren) {
            if (!emptyRegex.test(child.content)) {
                child.content = child.content.replace(/>\s+</g, '><');
                if (closeTagNode) {
                    if (tagOpenRegex.test(child.content)) {
                        closeTagNode.content = closeTagNode.content.replace(/\s+$/, '');
                        child.content = child.content.replace(/^\s+/, '');
                        for (let node of toEmptyNodes) {
                            node.content = '';
                        }
                    }
                    closeTagNode = null;
                }
                if (tagCloseRegex.test(child.content)) {
                    closeTagNode = child;
                    toEmptyNodes.splice(0);
                }
            }
            else {
                if (closeTagNode) {
                    toEmptyNodes.push(child);
                }
            }
        }
        return super.toSourceNode();
    }
}
exports.TwingSourceMapNodeSpaceless = TwingSourceMapNodeSpaceless;
