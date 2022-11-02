import { DateTime, Duration } from "luxon";
import { TwingTemplate } from "../../../template";
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
export declare function dateModify(template: TwingTemplate, date: Date | DateTime | Duration | string, modifier: string): Promise<DateTime>;
