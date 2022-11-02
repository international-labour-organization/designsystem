import { DateTime, Duration } from "luxon";
import { TwingTemplate } from "../../../template";
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
export declare function date(template: TwingTemplate, date: Date | DateTime | Duration | number | string, timezone?: string | null | false): Promise<DateTime | Duration>;
