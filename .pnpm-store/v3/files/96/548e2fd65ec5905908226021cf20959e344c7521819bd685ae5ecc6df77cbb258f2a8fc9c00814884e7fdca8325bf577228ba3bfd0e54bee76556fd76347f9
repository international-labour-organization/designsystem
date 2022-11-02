import { date as createDate } from "../functions/date";
/**
 * Returns a new date object modified.
 *
 * <pre>
 *   {{ post.published_at|date_modify("-1day")|date("m/d/Y") }}
 * </pre>
 *
 * @param {TwingTemplate} template
 * @param {DateTime|Duration|string} date A date
 * @param {string} modifier A modifier string
 *
 * @returns {Promise<DateTime>} A new date object
 */
export function dateModify(template, date, modifier) {
    return createDate(template, date).then((dateTime) => {
        let regExp = new RegExp(/(\+|-)([0-9])(.*)/);
        let parts = regExp.exec(modifier);
        let operator = parts[1];
        let operand = Number.parseInt(parts[2]);
        let unit = parts[3].trim();
        let duration = {};
        duration[unit] = operator === '-' ? -operand : operand;
        dateTime = dateTime.plus(duration);
        return dateTime;
    });
}
