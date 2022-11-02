"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncode = void 0;
const is_traversable_1 = require("../../../helpers/is-traversable");
const iterator_to_hash_1 = require("../../../helpers/iterator-to-hash");
const http_build_query = require('locutus/php/url/http_build_query');
/**
 * URL encodes (RFC 3986) a string as a path segment or a hash as a query string.
 *
 * @param {string|{}} url A URL or a hash of query parameters
 *
 * @returns {Promise<string>} The URL encoded value
 */
function urlEncode(url) {
    if (typeof url !== 'string') {
        if (is_traversable_1.isTraversable(url)) {
            url = iterator_to_hash_1.iteratorToHash(url);
        }
        let builtUrl = http_build_query(url, '', '&');
        return Promise.resolve(builtUrl.replace(/\+/g, '%20'));
    }
    return Promise.resolve(encodeURIComponent(url));
}
exports.urlEncode = urlEncode;
