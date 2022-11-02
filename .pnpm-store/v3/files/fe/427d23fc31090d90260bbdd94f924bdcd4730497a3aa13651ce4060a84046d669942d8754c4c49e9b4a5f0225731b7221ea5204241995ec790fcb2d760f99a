"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var react_1 = tslib_1.__importDefault(require("react"));
var use_required_context_1 = tslib_1.__importDefault(require("../use-required-context"));
var service_context_1 = tslib_1.__importDefault(require("./service-context"));
var react_2 = require("@xstate/react");
var pluralise_1 = require("../util/pluralise");
var next_events_include_1 = tslib_1.__importDefault(require("./next-events-include"));
var selectors = tslib_1.__importStar(require("../selectors"));
var file_system_1 = require("./file-system");
var TABLET_BREAKPOINT = 768;
var Container = theming_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"])));
var Message = theming_1.styled.small(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 1;\n  flex-grow: 1;\n"], ["\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 1;\n  flex-grow: 1;\n"])));
var Segment = theming_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  > * {\n    margin: var(--halfGrid) !important;\n    flex-shrink: 0;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  > * {\n    margin: var(--halfGrid) !important;\n    flex-shrink: 0;\n  }\n"])));
var HiddenAnchor = theming_1.styled.a(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: none;\n"], ["\n  display: none;\n"])));
var FileButtons = theming_1.styled.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n\n  > * {\n    margin: var(--halfGrid) !important;\n    flex-shrink: 0;\n  }\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n\n  > * {\n    margin: var(--halfGrid) !important;\n    flex-shrink: 0;\n  }\n"])));
var MetaSettings = theming_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n"])));
var ResponsiveIcon = theming_1.styled(components_1.Icons)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  @media screen and (max-width: ", "px) {\n    margin-right: 0px !important;\n  }\n"], ["\n  @media screen and (max-width: ", "px) {\n    margin-right: 0px !important;\n  }\n"])), TABLET_BREAKPOINT);
var ResponsiveText = theming_1.styled.span(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"], ["\n  @media screen and (max-width: ", "px) {\n    display: none;\n  }\n"])), TABLET_BREAKPOINT);
var CollapseSegment = theming_1.styled.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  margin: var(--halfGrid);\n  align-items: center;\n  display: grid;\n  grid-template-columns: min-content minmax(100px, auto);\n  gap: var(--halfGrid);\n"], ["\n  margin: var(--halfGrid);\n  align-items: center;\n  display: grid;\n  grid-template-columns: min-content minmax(100px, auto);\n  gap: var(--halfGrid);\n"])));
function Topbar() {
    var service = use_required_context_1.default(service_context_1.default);
    var _a = tslib_1.__read(react_2.useService(service), 2), state = _a[0], send = _a[1];
    var current = state.context.current;
    var pinned = state.context.pinned;
    var sizes = state.context.sizes;
    var enabled = {
        start: next_events_include_1.default('START_ALL', state.nextEvents),
        change: next_events_include_1.default('SET_VALUES', state.nextEvents) && pinned == null,
        pin: next_events_include_1.default('PIN', state.nextEvents) && current.results != null,
        unpin: next_events_include_1.default('UNPIN', state.nextEvents) && current.results != null,
    };
    var icons = {
        pin: pinned ? 'lock' : 'unlock',
        save: 'download',
        load: 'upload',
    };
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Segment, null,
            react_1.default.createElement(components_1.Button, { css: {
                    textTransform: 'uppercase',
                }, primary: true, small: true, onClick: function () { return send({ type: 'START_ALL' }); }, disabled: !enabled.start, id: selectors.startAllButtonId }, "Start all"),
            react_1.default.createElement(components_1.Form.Select, { id: selectors.copySelectId, disabled: !enabled.change, value: current.copies, onChange: function (event) {
                    var values = {
                        samples: current.samples,
                        copies: Number(event.target.value),
                    };
                    send('SET_VALUES', values);
                } }, sizes.map(function (size) { return (react_1.default.createElement("option", { key: size, value: size },
                size,
                " ",
                pluralise_1.pluraliseCopies(size))); })),
            react_1.default.createElement(components_1.Form.Select, { id: selectors.sampleSelectId, disabled: !enabled.change, value: current.samples, onChange: function (event) {
                    var values = {
                        copies: current.copies,
                        samples: Number(event.target.value),
                    };
                    send('SET_VALUES', values);
                } }, sizes.map(function (size) { return (react_1.default.createElement("option", { key: size, value: size },
                size,
                " ",
                pluralise_1.pluraliseSamples(size))); }))),
        react_1.default.createElement(MetaSettings, null,
            react_1.default.createElement(CollapseSegment, null,
                react_1.default.createElement(components_1.Button, { id: selectors.pinButtonId, secondary: true, outline: !pinned, small: true, disabled: pinned ? !enabled.unpin : !enabled.pin, onClick: function () { return send({ type: pinned ? 'UNPIN' : 'PIN' }); } },
                    react_1.default.createElement(ResponsiveIcon, { icon: icons.pin, "aria-label": icons.pin }),
                    react_1.default.createElement(ResponsiveText, null, pinned ? 'Unpin baseline' : 'Pin as baseline')),
                react_1.default.createElement(Message, null, state.context.message)),
            react_1.default.createElement(FileButtons, null,
                react_1.default.createElement(components_1.Button, { id: selectors.saveButtonId, secondary: true, small: true, outline: true, disabled: current.results == null, onClick: function () { return send({ type: 'SAVE' }); } },
                    react_1.default.createElement(ResponsiveIcon, { icon: icons.save, "aria-label": icons.save }),
                    react_1.default.createElement(ResponsiveText, null, "Save result")),
                react_1.default.createElement(components_1.Button, { secondary: true, small: true, outline: true, onClick: function () {
                        var _a;
                        (_a = document.getElementById(selectors.loadButtonId)) === null || _a === void 0 ? void 0 : _a.click();
                    } },
                    react_1.default.createElement(ResponsiveIcon, { icon: icons.load, "aria-label": icons.load }),
                    react_1.default.createElement(ResponsiveText, null, "Load result")),
                react_1.default.createElement(components_1.Form.Input, { style: { display: 'none' }, id: selectors.loadButtonId, type: "file", accept: ".json", onChange: function (e) {
                        file_system_1.readFile(e, function (results, storyName) {
                            return send('LOAD_FROM_FILE', { pinned: results, storyName: storyName });
                        });
                    } })),
            react_1.default.createElement(HiddenAnchor, { id: selectors.hiddenFileAnchorId }))));
}
exports.default = Topbar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
