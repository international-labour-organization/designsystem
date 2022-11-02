"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInteractionGroup = exports.interactionGroupId = void 0;
var tslib_1 = require("tslib");
exports.interactionGroupId = 'Interactions';
function getInteractionGroup(interactions) {
    var tasks = interactions.map(function (item, index) {
        return tslib_1.__assign(tslib_1.__assign({}, item), { type: 'interaction', name: item.name, description: item.description || '(None provided)' });
    });
    return {
        groupId: exports.interactionGroupId,
        name: 'Interactions 🕹',
        tasks: tasks,
    };
}
exports.getInteractionGroup = getInteractionGroup;
