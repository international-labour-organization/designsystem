/**
 * Removes whitespaces between HTML tags.
 *
 * @return {Promise<string>}
 */
export function spaceless(content) {
    return Promise.resolve(content.toString().replace(/>\s+</g, '><').trim());
}
