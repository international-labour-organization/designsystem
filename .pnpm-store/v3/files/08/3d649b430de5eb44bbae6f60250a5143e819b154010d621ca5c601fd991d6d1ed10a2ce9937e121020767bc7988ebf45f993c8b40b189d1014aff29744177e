import { TwingErrorLoader } from "../../../error/loader";
/**
 * Returns a template content without rendering it.
 *
 * @param {TwingTemplate} template
 * @param {string} name The template name
 * @param {boolean} ignoreMissing Whether to ignore missing templates or not
 *
 * @return {Promise<string>} The template source
 */
export function source(template, name, ignoreMissing = false) {
    let env = template.environment;
    let from = template.source;
    return env.getLoader().getSourceContext(name, from).then((source) => {
        return source.getCode();
    }).catch((e) => {
        if (e instanceof TwingErrorLoader) {
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
