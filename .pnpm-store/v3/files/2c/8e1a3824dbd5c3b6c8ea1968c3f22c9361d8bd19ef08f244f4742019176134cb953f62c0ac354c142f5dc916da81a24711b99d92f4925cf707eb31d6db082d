"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.source = void 0;
const loader_1 = require("../../../error/loader");
/**
 * Returns a template content without rendering it.
 *
 * @param {TwingTemplate} template
 * @param {string} name The template name
 * @param {boolean} ignoreMissing Whether to ignore missing templates or not
 *
 * @return {Promise<string>} The template source
 */
function source(template, name, ignoreMissing = false) {
    let env = template.environment;
    let from = template.source;
    return env.getLoader().getSourceContext(name, from).then((source) => {
        return source.getCode();
    }).catch((e) => {
        if (e instanceof loader_1.TwingErrorLoader) {
            if (!ignoreMissing) {
                throw e;
            }
            else {
                return null;
            }
        }
        else {
            throw e;
        }
    });
}
exports.source = source;
