export function examineObject(object) {
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
