import { TwingSandboxSecurityNotAllowedFilterError } from "./security-not-allowed-filter-error";
import { TwingSandboxSecurityNotAllowedTagError } from "./security-not-allowed-tag-error";
import { TwingSandboxSecurityNotAllowedFunctionError } from "./security-not-allowed-function-error";
import { TwingSandboxSecurityNotAllowedPropertyError } from "./security-not-allowed-property-error";
import { TwingSandboxSecurityNotAllowedMethodError } from "./security-not-allowed-method-error";
import { TwingTemplate } from "../template";
import { TwingMarkup } from "../markup";
export class TwingSandboxSecurityPolicy {
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
                throw new TwingSandboxSecurityNotAllowedTagError(`Tag "${tag}" is not allowed.`, tag);
            }
        }
        for (let filter of filters) {
            if (!self.allowedFilters.includes(filter)) {
                throw new TwingSandboxSecurityNotAllowedFilterError(`Filter "${filter}" is not allowed.`, filter);
            }
        }
        for (let function_ of functions) {
            if (!self.allowedFunctions.includes(function_)) {
                throw new TwingSandboxSecurityNotAllowedFunctionError(`Function "${function_}" is not allowed.`, function_);
            }
        }
    }
    checkMethodAllowed(obj, method) {
        if (obj instanceof TwingTemplate || obj instanceof TwingMarkup) {
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
            throw new TwingSandboxSecurityNotAllowedMethodError(`Calling "${method}" method on a "${obj.constructor.name}" is not allowed.`);
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
            throw new TwingSandboxSecurityNotAllowedPropertyError(`Calling "${property}" property on a "${obj.constructor.name}" is not allowed.`);
        }
    }
}
