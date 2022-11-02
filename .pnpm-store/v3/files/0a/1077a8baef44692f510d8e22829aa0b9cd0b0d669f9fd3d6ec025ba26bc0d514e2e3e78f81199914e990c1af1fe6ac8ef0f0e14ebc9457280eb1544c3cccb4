const var_export = require('locutus/php/var/var_export');
export class TwingNode {
    /**
     * Constructor.
     *
     * The nodes are automatically made available as properties ($this->node).
     * The attributes are automatically made available as array items ($this['name']).
     *
     * @param nodes Map<string | number, TwingNode>  A map of named nodes
     * @param attributes Map<string, any> A map of attributes (should not be nodes)
     * @param lineno number The line number
     * @param columnno number The column number
     * @param tag string The tag name associated with the Node
     */
    constructor(nodes = new Map(), attributes = new Map(), lineno = 0, columnno = 0, tag = null) {
        this.name = null;
        this.nodes = nodes;
        this.attributes = attributes;
        this.lineno = lineno;
        this.columnno = columnno;
        this.tag = tag;
    }
    /**
     * @returns {TwingNode}
     */
    clone() {
        let result = Reflect.construct(this.constructor, []);
        for (let [name, node] of this.getNodes()) {
            result.setNode(name, node.clone());
        }
        for (let [name, node] of this.attributes) {
            if (node instanceof TwingNode) {
                node = node.clone();
            }
            result.setAttribute(name, node);
        }
        result.lineno = this.lineno;
        result.columnno = this.columnno;
        result.tag = this.tag;
        return result;
    }
    toString() {
        let attributes = [];
        for (let [name, value] of this.attributes) {
            let attributeRepr;
            if (value instanceof TwingNode) {
                attributeRepr = '' + value.toString();
            }
            else {
                attributeRepr = '' + var_export(value, true);
            }
            attributes.push(`${name}: ${attributeRepr.replace(/\n/g, '')}`);
        }
        attributes.push(`line: ${this.getTemplateLine()}`);
        attributes.push(`column: ${this.getTemplateColumn()}`);
        let repr = [this.constructor.name + '(' + attributes.join(', ')];
        if (this.nodes.size > 0) {
            for (let [name, node] of this.nodes) {
                let len = ('' + name).length + 4;
                let nodeRepr = [];
                for (let line of node.toString().split('\n')) {
                    nodeRepr.push(' '.repeat(len) + line);
                }
                repr.push(`  ${name}: ${nodeRepr.join('\n').trimLeft()}`);
            }
            repr.push(')');
        }
        else {
            repr[0] += ')';
        }
        return repr.join('\n');
    }
    get type() {
        return null;
    }
    is(type) {
        return this.type === type;
    }
    compile(compiler) {
        for (let node of this.nodes.values()) {
            node.compile(compiler);
        }
    }
    getTemplateLine() {
        return this.lineno;
    }
    getTemplateColumn() {
        return this.columnno;
    }
    getNodeTag() {
        return this.tag;
    }
    /**
     * @returns booleqn
     */
    hasAttribute(name) {
        return this.attributes.has(name);
    }
    /**
     *
     * @param {string} name
     * @returns any
     */
    getAttribute(name) {
        if (!this.attributes.has(name)) {
            throw new Error(`Attribute "${name}" does not exist for Node "${this.constructor.name}".`);
        }
        return this.attributes.get(name);
    }
    /**
     * @param {string} name
     * @param {*} value
     */
    setAttribute(name, value) {
        this.attributes.set(name, value);
    }
    removeAttribute(name) {
        this.attributes.delete(name);
    }
    /**
     * @return bool
     */
    hasNode(name) {
        return this.nodes.has(name);
    }
    /**
     * @return TwingNode
     */
    getNode(name) {
        if (!this.nodes.has(name)) {
            throw new Error(`Node "${name}" does not exist for Node "${this.constructor.name}".`);
        }
        return this.nodes.get(name);
    }
    setNode(name, node) {
        this.nodes.set(name, node);
    }
    removeNode(name) {
        this.nodes.delete(name);
    }
    count() {
        return this.nodes.size;
    }
    setTemplateName(name) {
        this.name = name;
        for (let node of this.nodes.values()) {
            node.setTemplateName(name);
        }
    }
    getTemplateName() {
        return this.name;
    }
    getNodes() {
        return this.nodes;
    }
}
