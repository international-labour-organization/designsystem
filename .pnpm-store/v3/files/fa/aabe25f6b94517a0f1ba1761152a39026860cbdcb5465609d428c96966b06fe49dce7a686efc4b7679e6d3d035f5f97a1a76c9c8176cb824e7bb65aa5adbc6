"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingNodeExpressionAssignName = exports.type = void 0;
const name_1 = require("./name");
const node_type_1 = require("../../node-type");
exports.type = new node_type_1.TwingNodeType('expression_assign_name');
class TwingNodeExpressionAssignName extends name_1.TwingNodeExpressionName {
    get type() {
        return exports.type;
    }
    compile(compiler) {
        compiler
            .raw('context.proxy[')
            .string(this.getAttribute('name'))
            .raw(']');
    }
}
exports.TwingNodeExpressionAssignName = TwingNodeExpressionAssignName;
