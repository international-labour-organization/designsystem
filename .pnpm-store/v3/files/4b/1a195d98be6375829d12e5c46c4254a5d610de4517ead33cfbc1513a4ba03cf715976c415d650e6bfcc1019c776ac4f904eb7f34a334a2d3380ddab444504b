"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandingResult = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theming_1 = require("@storybook/theming");
var Expand = tslib_1.__importStar(require("./parts"));
var components_1 = require("@storybook/components");
var react_2 = require("@xstate/react");
var use_required_context_1 = tslib_1.__importDefault(require("../../use-required-context"));
var service_context_1 = tslib_1.__importDefault(require("../service-context"));
var pluralise_1 = require("../../util/pluralise");
var next_events_include_1 = tslib_1.__importDefault(require("../next-events-include"));
var Container = theming_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  --result-border-radius: 4px;\n  margin-bottom: var(--grid);\n  border: 1px solid lightgray;\n  border-radius: var(--result-border-radius);\n"], ["\n  --result-border-radius: 4px;\n  margin-bottom: var(--grid);\n  border: 1px solid lightgray;\n  border-radius: var(--result-border-radius);\n"])));
var HeaderButton = theming_1.styled.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  /* reset */\n  margin: 0;\n  padding: 0;\n  border: none;\n\n  width: 100%;\n  height: calc(var(--grid) * 4);\n  text-align: left;\n  font-size: 16px;\n  font-weight: bold;\n\n  border-radius: var(--result-border-radius);\n  background-color: ", ";\n  color: ", ";\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--grid);\n\n  > * {\n    margin-left: var(--grid);\n    flex-shrink: 0;\n  }\n"], ["\n  /* reset */\n  margin: 0;\n  padding: 0;\n  border: none;\n\n  width: 100%;\n  height: calc(var(--grid) * 4);\n  text-align: left;\n  font-size: 16px;\n  font-weight: bold;\n\n  border-radius: var(--result-border-radius);\n  background-color: ", ";\n  color: ", ";\n\n  display: flex;\n  align-items: center;\n  padding: 0 var(--grid);\n\n  > * {\n    margin-left: var(--grid);\n    flex-shrink: 0;\n  }\n"])), function (props) { return props.theme.background.content; }, function (props) { return props.theme.color.defaultText; });
var Name = theming_1.styled.h4(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  /* the name will push the result over, it can also collapse when there is no room */\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-weight: bold;\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"], ["\n  /* the name will push the result over, it can also collapse when there is no room */\n  flex-grow: 1;\n  flex-shrink: 1;\n  font-weight: bold;\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"])));
var IconContainer = theming_1.styled.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  margin-left: 0;\n  width: var(--grid);\n  height: var(--grid);\n"], ["\n  margin-left: 0;\n  width: var(--grid);\n  height: var(--grid);\n"])));
function ExpandIcon(_a) {
    var isExpanded = _a.isExpanded;
    return (react_1.default.createElement(IconContainer, null,
        react_1.default.createElement(components_1.Icons, { icon: isExpanded ? 'arrowdown' : 'arrowright' })));
}
function ExpandingResult(_a) {
    var name = _a.name, result = _a.result, getExpanded = _a.getExpanded;
    var _b = tslib_1.__read(react_1.useState(false), 2), isExpanded = _b[0], setIsExpanded = _b[1];
    var toggle = react_1.useCallback(function () { return setIsExpanded(function (value) { return !value; }); }, [setIsExpanded]);
    var service = use_required_context_1.default(service_context_1.default);
    var _c = tslib_1.__read(react_2.useService(service), 2), state = _c[0], send = _c[1];
    var expanded = getExpanded({ isExpanded: isExpanded });
    var _d = state.context.current, copies = _d.copies, samples = _d.samples;
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(HeaderButton, { onClick: toggle, isExpanded: isExpanded, "aria-expanded": isExpanded },
            react_1.default.createElement(ExpandIcon, { isExpanded: isExpanded }),
            react_1.default.createElement(Name, null, name),
            result),
        isExpanded ? (react_1.default.createElement(Expand.Section, null,
            react_1.default.createElement(components_1.Button, { secondary: true, small: true, disabled: !next_events_include_1.default('START_ONE', state.nextEvents), onClick: function () { return send({ type: 'START_ONE', taskName: name }); } },
                "Run task",
                ' ',
                react_1.default.createElement("small", null,
                    "(",
                    copies,
                    " ",
                    pluralise_1.pluraliseCopies(copies),
                    ", ",
                    samples,
                    " ",
                    pluralise_1.pluraliseSamples(samples),
                    ")")),
            expanded)) : null));
}
exports.ExpandingResult = ExpandingResult;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
