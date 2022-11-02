import { iconv } from "./helpers/iconv";
/**
 * Marks a content as safe.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
export class TwingMarkup {
    constructor(content, charset) {
        this.content = Buffer.from(content);
        this.charset = charset;
    }
    toString() {
        return this.content.toString();
    }
    count() {
        let content = iconv(this.charset, 'utf-8', this.content).toString();
        return content.length;
    }
    toJSON() {
        return this.content.toString();
    }
}
