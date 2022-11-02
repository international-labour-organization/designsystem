"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.examineObject = void 0;
function examineObject(object) {
    let properties = [];
    if (object) {
        for (let property of Object.getOwnPropertyNames(object)) {
            properties.push(property);
        }
        let prototype = Object.getPrototypeOf(object);
        properties = properties.concat(examineObject(prototype));
    }
    return properties;
}
exports.examineObject = examineObject;
