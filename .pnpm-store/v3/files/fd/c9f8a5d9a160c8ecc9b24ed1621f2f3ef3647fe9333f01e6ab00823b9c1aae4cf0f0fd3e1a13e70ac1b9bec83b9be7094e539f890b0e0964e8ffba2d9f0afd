import { TwingSandboxSecurityPolicyInterface } from "./security-policy-interface";
export declare class TwingSandboxSecurityPolicy implements TwingSandboxSecurityPolicyInterface {
    TwingSandboxSecurityPolicyInterfaceImpl: TwingSandboxSecurityPolicyInterface;
    private allowedTags;
    private allowedFilters;
    private allowedMethods;
    private allowedProperties;
    private allowedFunctions;
    constructor(allowedTags?: Array<string>, allowedFilters?: Array<string>, allowedMethods?: Map<any, string>, allowedProperties?: Map<any, string>, allowedFunctions?: Array<string>);
    setAllowedTags(tags: Array<string>): void;
    setAllowedFilters(filters: Array<string>): void;
    setAllowedMethods(methods: Map<any, string | Array<string>>): void;
    setAllowedProperties(properties: Map<any, string>): void;
    setAllowedFunctions(functions: Array<string>): void;
    checkSecurity(tags: string[], filters: string[], functions: string[]): void;
    checkMethodAllowed(obj: any, method: string): void;
    checkPropertyAllowed(obj: any, property: string): void;
}
