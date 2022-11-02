"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwingSandboxSecurityPolicy = void 0;
const security_not_allowed_filter_error_1 = require("./security-not-allowed-filter-error");
const security_not_allowed_tag_error_1 = require("./security-not-allowed-tag-error");
const security_not_allowed_function_error_1 = require("./security-not-allowed-function-error");
const security_not_allowed_property_error_1 = require("./security-not-allowed-property-error");
const security_not_allowed_method_error_1 = require("./security-not-allowed-method-error");
const template_1 = require("../template");
const markup_1 = require("../markup");
class TwingSandboxSecurityPolicy {
    constructor(allowedTags = [], allowedFilters = [], allowedMethods = new Map(), allowedProperties = new Map(), allowedFunctions = []) {
        this.TwingSandboxSecurityPolicyInterfaceImpl = this;
        this.allowedTags = allowedTags;
        this.allowedFilters = allowedFilters;
        this.setAllowedMethods(allowedMethods);
        this.allowedProperties = allowedProperties;
        this.allowedFunctions = allowedFunctions;
    }
    setAllowedTags(tags) {
        this.allowedTags = tags;
    }
    setAllowedFilters(filters) {
        this.allowedFilters = filters;
    }
    setAllowedMethods(methods) {
        this.allowedMethods = new Map();
        for (let [class_, m] of methods) {
            this.allowedMethods.set(class_, (Array.isArray(m) ? m : [m]).map(function (item) {
                return item.toLowerCase();
            }));
        }
    }
    setAllowedProperties(properties) {
        this.allowedProperties = properties;
    }
    setAllowedFunctions(functions) {
        this.allowedFunctions = functions;
    }
    checkSecurity(tags, filters, functions) {
        let self = this;
        for (let tag of tags) {
            if (!self.allowedTags.includes(tag)) {
                throw new security_not_allowed_tag_error_1.TwingSandboxSecurityNotAllowedTagError(`Tag "${tag}" is not allowed.`, tag);
            }
        }
        for (let filter of filters) {
            if (!self.allowedFilters.includes(filter)) {
                throw new security_not_allowed_filter_error_1.TwingSandboxSecurityNotAllowedFilterError(`Filter "${filter}" is not allowed.`, filter);
            }
        }
        for (let function_ of functions) {
            if (!self.allowedFunctions.includes(function_)) {
                throw new security_not_allowed_function_error_1.TwingSandboxSecurityNotAllowedFunctionError(`Function "${function_}" is not allowed.`, function_);
            }
        }
    }
    checkMethodAllowed(obj, method) {
        if (obj instanceof template_1.TwingTemplate || obj instanceof markup_1.TwingMarkup) {
            return;
        }
        let allowed = false;
        let candidate = method.toLowerCase();
        for (let [constructorName, methods] of this.allowedMethods) {
            if (obj instanceof constructorName) {
                allowed = methods.includes(candidate);
                break;
            }
        }
        if (!allowed) {
            throw new security_not_allowed_method_error_1.TwingSandboxSecurityNotAllowedMethodError(`Calling "${method}" method on a "${obj.constructor.name}" is not allowed.`);
        }
    }
    checkPropertyAllowed(obj, property) {
        let allowed = false;
        for (let [class_, properties] of this.allowedProperties) {
            if (obj instanceof class_) {
                allowed = (Array.isArray(properties) ? properties : [properties]).includes(property);
                break;
            }
        }
        if (!allowed) {
            throw new security_not_allowed_property_error_1.TwingSandboxSecurityNotAllowedPropertyError(`Calling "${property}" property on a "${obj.constructor.name}" is not allowed.`);
        }
    }
}
exports.TwingSandboxSecurityPolicy = TwingSandboxSecurityPolicy;
