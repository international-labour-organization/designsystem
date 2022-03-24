export function getUpdatedItems(params: {
  id: string;
  itemStatuses: string[];
  allowMultipleExpanded: boolean;
}) {
  let updatedstauses = [...params.itemStatuses];
  if (updatedstauses.indexOf(params.id) > -1) {
    updatedstauses = updatedstauses.filter((e) => e !== params.id);
  } else {
    if (params.allowMultipleExpanded) {
      updatedstauses.push(params.id);
    } else {0
      updatedstauses = [params.id];
    }
  }

  return updatedstauses;
}
