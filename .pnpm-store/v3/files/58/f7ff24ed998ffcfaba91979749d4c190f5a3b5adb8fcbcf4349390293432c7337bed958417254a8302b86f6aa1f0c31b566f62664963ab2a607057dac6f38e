"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingMarkup = void 0;
const iconv_1 = require("./helpers/iconv");
/**
 * Marks a content as safe.
 *
 * @author Eric MORAND <eric.morand@gmail.com>
 */
class TwingMarkup {
    constructor(content, charset) {
        this.content = Buffer.from(content);
        this.charset = charset;
    }
    toString() {
        return this.content.toString();
    }
    count() {
        let content = iconv_1.iconv(this.charset, 'utf-8', this.content).toString();
        return content.length;
    }
    toJSON() {
        return this.content.toString();
    }
}
exports.TwingMarkup = TwingMarkup;
