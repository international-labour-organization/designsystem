export const interactionGroupId = 'Interactions';
export function getInteractionGroup(interactions) {
    const tasks = interactions.map((item, index) => {
        return {
            ...item,
            type: 'interaction',
            name: item.name,
            description: item.description || '(None provided)',
        };
    });
    return {
        groupId: interactionGroupId,
        name: 'Interactions 🕹',
        tasks,
    };
}
