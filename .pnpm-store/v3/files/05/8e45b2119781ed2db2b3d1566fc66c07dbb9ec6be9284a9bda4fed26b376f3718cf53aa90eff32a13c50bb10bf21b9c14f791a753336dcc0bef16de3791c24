"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingEnvironmentNode = void 0;
const environment_1 = require("../environment");
const filesystem_1 = require("../cache/filesystem");
class TwingEnvironmentNode extends environment_1.TwingEnvironment {
    cacheFromString(cache) {
        return new filesystem_1.TwingCacheFilesystem(cache);
    }
}
exports.TwingEnvironmentNode = TwingEnvironmentNode;
