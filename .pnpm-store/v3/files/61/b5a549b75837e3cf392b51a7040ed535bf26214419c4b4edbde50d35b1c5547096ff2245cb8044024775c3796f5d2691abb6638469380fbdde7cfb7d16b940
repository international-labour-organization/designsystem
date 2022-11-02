"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueCell = exports.TitleCell = exports.Table = exports.ValueLozenge = exports.ResultScale = exports.ResultValue = exports.Note = exports.Content = exports.Heading = exports.Section = void 0;
var tslib_1 = require("tslib");
var theming_1 = require("@storybook/theming");
exports.Section = theming_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background-color: ", ";\n  padding: var(--grid);\n  padding-top: 0;\n\n  > * {\n    margin-top: var(--grid);\n  }\n\n  &:last-of-type {\n    border-bottom-left-radius: var(--result-border-radius);\n    border-bottom-right-radius: var(--result-border-radius);\n  }\n"], ["\n  background-color: ", ";\n  padding: var(--grid);\n  padding-top: 0;\n\n  > * {\n    margin-top: var(--grid);\n  }\n\n  &:last-of-type {\n    border-bottom-left-radius: var(--result-border-radius);\n    border-bottom-right-radius: var(--result-border-radius);\n  }\n"])), function (props) { return props.theme.background.content; });
exports.Heading = theming_1.styled.h4(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"])));
exports.Content = theming_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject([""], [""])));
exports.Note = theming_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  padding: calc(var(--grid) / 2);\n  background-color: ", ";\n  border-radius: var(--result-border-radius);\n  font-size: small;\n\n  &::before {\n    margin-right: 1ch;\n    content: '\u2139\uFE0F';\n  }\n"], ["\n  padding: calc(var(--grid) / 2);\n  background-color: ", ";\n  border-radius: var(--result-border-radius);\n  font-size: small;\n\n  &::before {\n    margin-right: 1ch;\n    content: '\u2139\uFE0F';\n  }\n"])), function (props) { return props.theme.background.hoverable; });
exports.ResultValue = theming_1.styled.code(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  /* font-family: 'Courier'; */\n"], ["\n  /* font-family: 'Courier'; */\n"])));
exports.ResultScale = theming_1.styled.code(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  /* slightly smaller margin that other elements */\n  margin-left: var(--halfGrid);\n"], ["\n  /* slightly smaller margin that other elements */\n  margin-left: var(--halfGrid);\n"])));
exports.ValueLozenge = theming_1.styled.code(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", ";\n  padding: calc(var(--grid) / 2) var(--grid);\n  border-radius: var(--result-border-radius);\n  color: ", ";\n  font-weight: bold;\n  font-size: small;\n  background-color: ", ";\n"], ["\n  ",
    ";\n  padding: calc(var(--grid) / 2) var(--grid);\n  border-radius: var(--result-border-radius);\n  color: ", ";\n  font-weight: bold;\n  font-size: small;\n  background-color: ",
    ";\n"])), function (_a) {
    var _b = _a.hasWarningIcon, hasWarningIcon = _b === void 0 ? true : _b;
    return !hasWarningIcon &&
        "&:before {\n      content: '\u26A0\uFE0F';\n      margin-right: 1ch;\n    }";
}, function (props) { return props.theme.color.light; }, function (_a) {
    var type = _a.type, theme = _a.theme;
    switch (type) {
        case 'positive':
            return theme.color.positive;
        case 'negative':
            return theme.color.negative;
        case 'faint':
            return theme.color.medium;
        case 'warning':
            return theme.color.warning;
        case 'info':
            return theme.color.seafoam;
        default:
            return theme.color.purple;
    }
});
exports.Table = theming_1.styled.table(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.TitleCell = theming_1.styled.td(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject([""], [""])));
exports.ValueCell = theming_1.styled.td(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  text-align: right;\n"], ["\n  text-align: right;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
