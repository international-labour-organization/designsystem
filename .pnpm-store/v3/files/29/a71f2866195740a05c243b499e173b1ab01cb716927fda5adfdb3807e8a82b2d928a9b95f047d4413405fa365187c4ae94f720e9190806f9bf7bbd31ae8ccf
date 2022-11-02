"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSourceMapNodeFactorySpaceless = void 0;
const node_factory_1 = require("../node-factory");
const spaceless_1 = require("../node/spaceless");
const spaceless_2 = require("../../node/spaceless");
class TwingSourceMapNodeFactorySpaceless extends node_factory_1.TwingSourceMapNodeFactory {
    constructor() {
        super(spaceless_2.type.toString());
    }
    create(line, column, source) {
        return new spaceless_1.TwingSourceMapNodeSpaceless(line, column, source);
    }
}
exports.TwingSourceMapNodeFactorySpaceless = TwingSourceMapNodeFactorySpaceless;
