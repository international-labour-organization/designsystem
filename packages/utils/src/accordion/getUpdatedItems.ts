export function getUpdatedItems(id: string, itemStatuses: string[], allowMultipleExpanded: boolean) {
  let updatedstauses = [...itemStatuses];
  if(updatedstauses.indexOf(id) > -1) {
    updatedstauses = updatedstauses.filter(e => e !== id);
  } else {
    if(allowMultipleExpanded) {
      updatedstauses.push(id);
    } else {
      updatedstauses = [id]
    }
  }

  return updatedstauses;
}
