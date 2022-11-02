import { isNullOrUndefined } from "util";
export class TwingOutputHandler {
    /**
     * @param level
     * @param flags Unused, kept for backward compatibility
     */
    constructor(level, flags) {
        this.content = '';
        this.level = level;
    }
    getContent() {
        return this.content;
    }
    write(value) {
        this.content = value;
    }
    append(value) {
        this.content += value;
    }
}
export class TwingOutputBuffer {
    constructor() {
        this._handlers = [];
    }
    echo(string) {
        if (typeof string === 'boolean') {
            string = (string === true) ? '1' : '';
        }
        else if (isNullOrUndefined(string)) {
            string = '';
        }
        return this.outputWrite(string);
    }
    /**
     * Turn on Output Buffering (specifying an optional output handler).
     *
     * @returns {boolean}
     */
    start() {
        let handler = new TwingOutputHandler(this.getLevel() + 1, 0);
        this._handlers.push(handler);
        return true;
    }
    /**
     * Flush (send) contents of the output buffer. The last buffer content is sent to next buffer
     *
     * In human terms, append the top-most buffer to the second-top-most buffer and empty the top-most buffer
     *
     * ┌─────────┐    ┌─────────┐
     * │   oof   │    │         │
     * ├─────────┤    ├─────────┤
     * │   bar   │ => │  baroof │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => true
     * └─────────┘    └─────────┘
     *
     */
    flush() {
        let active = this.getActive();
        if (!active) {
            process.stdout.write('Failed to flush buffer: no buffer to flush.');
            return false;
        }
        this._handlers.pop();
        this.outputWrite(active.getContent());
        active.write('');
        this._handlers.push(active);
        return true;
    }
    /**
     * Flush (send) the output buffer, and delete current output buffer
     *
     * In human terms: append the top-most buffer to the second-top-most buffer and remove the top-most buffer
     *
     * ┌─────────┐
     * │   oof   │
     * ├─────────┤    ┌─────────┐
     * │   bar   │ -> │  baroof │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => true
     * └─────────┘    └─────────┘
     *
     * @returns {boolean}
     */
    endAndFlush() {
        if (!this.getActive()) {
            process.stdout.write('Failed to delete and flush buffer: no buffer to delete or flush.');
            return false;
        }
        this.flush();
        this._handlers.pop();
        return true;
    }
    /**
     * Get active buffer contents, flush (send) the output buffer, and delete active output buffer
     *
     * In human terms: append the top-most buffer to the second-top-most buffer, remove the top-most buffer and returns its content
     *
     * ┌─────────┐
     * │   oof   │
     * ├─────────┤    ┌─────────┐
     * │   bar   │ -> │  baroof │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => oof
     * └─────────┘    └─────────┘
     *
     * @returns {string | false}
     */
    getAndFlush() {
        let content = this.getContents();
        this.endAndFlush();
        return content;
    }
    /**
     * Clean (erase) the output buffer
     *
     * In human terms, empty the top-most buffer
     *
     * ┌─────────┐    ┌─────────┐
     * │   oof   │    │         │
     * ├─────────┤    ├─────────┤
     * │   bar   │ => │   bar   │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => true
     * └─────────┘    └─────────┘
     *
     */
    clean() {
        let active = this.getActive();
        if (!active) {
            process.stdout.write('Failed to clean buffer: no buffer to clean.');
            return false;
        }
        active.write('');
        return true;
    }
    /**
     * Clean the output buffer, and delete active output buffer
     *
     * In human terms: clean the top-most buffer and remove the top-most buffer
     *
     * ┌─────────┐
     * │   oof   │
     * ├─────────┤    ┌─────────┐
     * │   bar   │ -> │   bar   │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => true
     * └─────────┘    └─────────┘
     *
     * @returns {boolean}
     */
    endAndClean() {
        if (this.clean()) {
            this._handlers.pop();
            return true;
        }
        return false;
    }
    /**
     * Get active buffer contents and delete active output buffer
     *
     * In human terms: Remove the top-most buffer and returns its content
     *
     * ┌─────────┐
     * │   oof   │
     * ├─────────┤    ┌─────────┐
     * │   bar   │ -> │   bar   │
     * ├─────────┤    ├─────────┤
     * │   foo   │    │   foo   │ => oof
     * └─────────┘    └─────────┘
     *
     * @returns {string | false}
     */
    getAndClean() {
        let content = this.getContents();
        this.endAndClean();
        return content;
    }
    /**
     * Return the nesting level of the output buffering mechanism
     *
     * @returns {number}
     */
    getLevel() {
        return this._handlers.length;
    }
    /**
     * Return the contents of the output buffer
     *
     * @returns {string | false}
     */
    getContents() {
        return this.getActive() ? this.getActive().getContent() : false;
    }
    /**
     * Append the string to the top-most buffer or return  the string if there is none
     *
     * @param {string} string | void
     */
    outputWrite(string) {
        let active = this.getActive();
        if (active) {
            active.append(string);
        }
        else {
            if (process && process.stdout) {
                process.stdout.write(string);
            }
            else {
                console.log(string);
            }
        }
    }
    getActive() {
        if (this._handlers.length > 0) {
            return this._handlers[this._handlers.length - 1];
        }
        else {
            return null;
        }
    }
}
