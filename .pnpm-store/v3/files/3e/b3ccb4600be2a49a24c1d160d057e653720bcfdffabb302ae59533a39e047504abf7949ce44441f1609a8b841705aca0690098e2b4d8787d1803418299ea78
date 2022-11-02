import { TwingNode } from "./node";
import { TwingNodeExpression } from "./node/expression";
export declare enum TwingOperatorType {
    UNARY = "UNARY",
    BINARY = "BINARY"
}
export declare enum TwingOperatorAssociativity {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
declare type TwingOperatorExpressionFactory = (operands: [TwingNode, TwingNode], lineno: number, columno: number) => TwingNodeExpression;
export declare class TwingOperator {
    private name;
    private type;
    private precedence;
    private expressionFactory;
    private associativity;
    /**
     * @param {string} name
     * @param {TwingOperatorType} type
     * @param {number} precedence
     * @param {TwingOperatorExpressionFactory} expressionFactory
     * @param {TwingOperatorAssociativity} associativity
     */
    constructor(name: string, type: TwingOperatorType, precedence: number, expressionFactory: TwingOperatorExpressionFactory, associativity?: TwingOperatorAssociativity);
    getName(): string;
    getType(): TwingOperatorType;
    getPrecedence(): number;
    getAssociativity(): TwingOperatorAssociativity;
    getExpressionFactory(): TwingOperatorExpressionFactory;
}
export {};
