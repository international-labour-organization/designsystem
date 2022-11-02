import { TwingSourceMapNodeFactory } from "../node-factory";
import { TwingSourceMapNodeSpaceless } from "../node/spaceless";
import { type as spacelessType } from "../../node/spaceless";
export class TwingSourceMapNodeFactorySpaceless extends TwingSourceMapNodeFactory {
    constructor() {
        super(spacelessType.toString());
    }
    create(line, column, source) {
        return new TwingSourceMapNodeSpaceless(line, column, source);
    }
}
