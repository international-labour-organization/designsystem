export function constant(template, name, object = null) {
    let candidate;
    if (object) {
        candidate = object;
    }
    else {
        candidate = template.environment;
    }
    return candidate.constructor[name];
}
