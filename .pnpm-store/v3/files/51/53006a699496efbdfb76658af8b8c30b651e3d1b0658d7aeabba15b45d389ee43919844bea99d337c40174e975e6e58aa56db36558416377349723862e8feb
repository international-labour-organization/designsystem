import { TwingNodeInclude } from "./include";
import { TwingNodeType } from "../node-type";
export const type = new TwingNodeType('embed');
export class TwingNodeEmbed extends TwingNodeInclude {
    constructor(name, index, variables, only, ignoreMissing, lineno, columnno, tag) {
        super(null, variables, only, ignoreMissing, lineno, columnno, tag);
        this.setAttribute('name', name);
        this.setAttribute('index', index);
    }
    get type() {
        return type;
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
