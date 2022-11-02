export var TwingOperatorType;
(function (TwingOperatorType) {
    TwingOperatorType["UNARY"] = "UNARY";
    TwingOperatorType["BINARY"] = "BINARY";
})(TwingOperatorType || (TwingOperatorType = {}));
export var TwingOperatorAssociativity;
(function (TwingOperatorAssociativity) {
    TwingOperatorAssociativity["LEFT"] = "LEFT";
    TwingOperatorAssociativity["RIGHT"] = "RIGHT";
})(TwingOperatorAssociativity || (TwingOperatorAssociativity = {}));
export class TwingOperator {
    /**
     * @param {string} name
     * @param {TwingOperatorType} type
     * @param {number} precedence
     * @param {TwingOperatorExpressionFactory} expressionFactory
     * @param {TwingOperatorAssociativity} associativity
     */
    constructor(name, type, precedence, expressionFactory, associativity) {
        this.name = name;
        this.type = type;
        this.precedence = precedence;
        this.expressionFactory = expressionFactory;
        this.associativity = type === TwingOperatorType.BINARY ? (associativity || TwingOperatorAssociativity.LEFT) : null;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getPrecedence() {
        return this.precedence;
    }
    getAssociativity() {
        return this.associativity;
    }
    getExpressionFactory() {
        return this.expressionFactory;
    }
}
