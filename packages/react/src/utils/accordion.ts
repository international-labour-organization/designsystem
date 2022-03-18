/**
 * A class which handles business logic for accordion functionality
 *
 */
export class AccordionControl {
  /**
   * setAccordionStatus
   *
   * A function which receives a string and sets the 'element' property of this class
   *
   * @param {String} id - the item id
   * @param {Array} itemStatuses - an array of item ids that represent open accordions
   * @param {Boolean} allowMultipleExpanded - Whether one or more accordions can be open at one
   *
   * @return {Array} updatedstauses - An updated array of statuses
   */
  public getUpdatedItems(
    id: string,
    itemStatuses: string[],
    allowMultipleExpanded: boolean
  ) {
    let updatedstauses = [...itemStatuses];
    if (updatedstauses.indexOf(id) > -1) {
      updatedstauses = updatedstauses.filter((e) => e !== id);
    } else {
      if (allowMultipleExpanded) {
        updatedstauses.push(id);
      } else {
        updatedstauses = [id];
      }
    }

    return updatedstauses;
  }
}
