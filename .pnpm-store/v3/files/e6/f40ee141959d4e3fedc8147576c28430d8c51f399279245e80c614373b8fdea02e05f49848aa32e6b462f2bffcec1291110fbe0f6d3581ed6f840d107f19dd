"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const luxon_1 = require("luxon");
const modify_date_1 = require("../../../helpers/modify-date");
const runtime_1 = require("../../../error/runtime");
const format_date_time_1 = require("../../../helpers/format-date-time");
/**
 * Converts an input to a DateTime instance.
 *
 * <pre>
 *    {% if date(user.created_at) < date('+2days') %}
 *      {# do something #}
 *    {% endif %}
 * </pre>
 *
 * @param {TwingTemplate} template
 * @param {Date | DateTime | Duration | number | string} date A date or null to use the current time
 * @param {string | null | boolean} timezone The target timezone, null to use the default, false to leave unchanged
 *
 * @returns {Promise<DateTime | Duration>}
 */
function date(template, date, timezone = null) {
    let _do = () => {
        let result;
        let core = template.environment.getCoreExtension();
        // determine the timezone
        if (timezone !== false) {
            if (timezone === null) {
                timezone = core.getTimezone();
            }
        }
        if (date instanceof luxon_1.DateTime) {
            if (timezone !== false) {
                date = date.setZone(timezone);
            }
            return date;
        }
        if (date instanceof luxon_1.Duration) {
            return date;
        }
        let parsedUtcOffset = 0;
        if (!date) {
            result = luxon_1.DateTime.local();
        }
        else if (date instanceof Date) {
            result = luxon_1.DateTime.fromJSDate(date);
        }
        else if (typeof date === 'string') {
            if (date === 'now') {
                result = luxon_1.DateTime.local();
            }
            else {
                result = luxon_1.DateTime.fromISO(date, { setZone: true });
                if (!result.isValid) {
                    result = luxon_1.DateTime.fromRFC2822(date, { setZone: true });
                }
                if (!result.isValid) {
                    result = luxon_1.DateTime.fromSQL(date, { setZone: true });
                }
                if (result.isValid) {
                    parsedUtcOffset = result.offset;
                }
                else {
                    result = modify_date_1.modifyDate(date);
                }
            }
        }
        else if (typeof date === 'number') {
            // date is PHP timestamp - i.e. in seconds
            let ts = date * 1000;
            // timestamp are UTC by definition
            result = luxon_1.DateTime.fromMillis(ts, {
                setZone: false
            });
        }
        if (!result || !result.isValid) {
            throw new runtime_1.TwingErrorRuntime(`Failed to parse date "${date}".`);
        }
        if (timezone !== false) {
            result = result.setZone(timezone);
        }
        else {
            if (parsedUtcOffset) {
                // explicit UTC offset
                result = result.setZone(`UTC+${parsedUtcOffset / 60}`);
            }
        }
        Reflect.set(result, 'format', function (format) {
            return format_date_time_1.formatDateTime(this, format);
        });
        return result;
    };
    try {
        return Promise.resolve(_do());
    }
    catch (e) {
        return Promise.reject(e);
    }
}
exports.date = date;
