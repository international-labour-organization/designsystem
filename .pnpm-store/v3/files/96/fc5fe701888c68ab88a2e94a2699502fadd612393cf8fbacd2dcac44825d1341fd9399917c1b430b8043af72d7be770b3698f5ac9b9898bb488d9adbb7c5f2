"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeEmbed = exports.type = void 0;
const include_1 = require("./include");
const node_type_1 = require("../node-type");
exports.type = new node_type_1.TwingNodeType('embed');
class TwingNodeEmbed extends include_1.TwingNodeInclude {
    constructor(name, index, variables, only, ignoreMissing, lineno, columnno, tag) {
        super(null, variables, only, ignoreMissing, lineno, columnno, tag);
        this.setAttribute('name', name);
        this.setAttribute('index', index);
    }
    get type() {
        return exports.type;
    }
    addGetTemplate(compiler) {
        compiler
            .raw('await this.loadTemplate(')
            .string(this.getAttribute('name'))
            .raw(', ')
            .repr(this.getTemplateLine())
            .raw(', ')
            .string(this.getAttribute('index'))
            .raw(')');
    }
}
exports.TwingNodeEmbed = TwingNodeEmbed;
