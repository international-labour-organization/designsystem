"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const luxon_1 = require("luxon");
const format_duration_1 = require("../../../helpers/format-duration");
const format_date_time_1 = require("../../../helpers/format-date-time");
const date_1 = require("../functions/date");
/**
 * Converts a date to the given format.
 *
 * <pre>
 *   {{ post.published_at|date("m/d/Y") }}
 * </pre>
 *
 * @param {TwingTemplate} template
 * @param {DateTime|Duration|string} date A date
 * @param {string|null} format The target format, null to use the default
 * @param {string|null|boolean} timezone The target timezone, null to use the default, false to leave unchanged
 *
 * @return {Promise<string>} The formatted date
 */
function date(template, date, format = null, timezone = null) {
    if (format === null) {
        let coreExtension = template.environment.getCoreExtension();
        let formats = coreExtension.getDateFormat();
        format = date instanceof luxon_1.Duration ? formats[1] : formats[0];
    }
    return date_1.date(template, date, timezone).then((date) => {
        if (date instanceof luxon_1.Duration) {
            return Promise.resolve(format_duration_1.formatDuration(date, format));
        }
        return Promise.resolve(format_date_time_1.formatDateTime(date, format));
    });
}
exports.date = date;
