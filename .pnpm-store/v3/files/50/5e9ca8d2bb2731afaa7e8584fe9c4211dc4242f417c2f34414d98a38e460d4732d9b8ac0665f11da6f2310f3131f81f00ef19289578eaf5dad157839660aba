import { TwingExtensionInterface } from "./extension-interface";
import { TwingTokenParserInterface } from "./token-parser-interface";
import { TwingNodeVisitorInterface } from "./node-visitor-interface";
import { TwingFilter } from "./filter";
import { TwingFunction } from "./function";
import { TwingTest } from "./test";
import { TwingOperator } from "./operator";
import { TwingSourceMapNodeFactory } from "./source-map/node-factory";
export declare class TwingExtension implements TwingExtensionInterface {
    TwingExtensionInterfaceImpl: TwingExtensionInterface;
    constructor();
    getTokenParsers(): Array<TwingTokenParserInterface>;
    getNodeVisitors(): TwingNodeVisitorInterface[];
    getFilters(): TwingFilter[];
    getTests(): TwingTest[];
    getFunctions(): TwingFunction[];
    getOperators(): TwingOperator[];
    getSourceMapNodeFactories(): TwingSourceMapNodeFactory[];
}
