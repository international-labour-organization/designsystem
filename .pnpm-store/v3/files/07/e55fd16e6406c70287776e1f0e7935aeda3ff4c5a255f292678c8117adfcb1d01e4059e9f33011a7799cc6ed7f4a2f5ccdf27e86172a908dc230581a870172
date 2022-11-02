import { DateTime } from "luxon";
export function modifyDate(modifier) {
    let result = null;
    let regExp = /^([-|\+])([0-9]+?)(\s*)([a-z]*)/g;
    let matches = regExp.exec(modifier);
    if (matches) {
        result = DateTime.local();
        let sign = matches[1];
        let count = parseInt(matches[2]);
        let unit = matches[4];
        switch (unit) {
            case 'year':
                unit = 'years';
                break;
            case 'month':
                unit = 'months';
                break;
            case 'day':
                unit = 'days';
                break;
            case 'hour':
                unit = 'hours';
                break;
            case 'minute':
                unit = 'minutes';
                break;
            case 'second':
                unit = 'seconds';
                break;
        }
        let duration = {};
        duration[unit] = (sign === '-' ? -count : count);
        result = result.plus(duration);
    }
    else {
        result = DateTime.invalid(`Failed to parse relative date "${modifier}".`);
    }
    return result;
}
