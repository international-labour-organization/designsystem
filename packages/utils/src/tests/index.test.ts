import { getUpdatedItems } from "../accordion/getUpdatedItems";

describe("Testing getUpdatedItems util", () => {
  test("Validate returns single item with updated id if not allowed to have multiple expanded.", () => {
    const updatedItems = getUpdatedItems({
      id: "accordion-1",
      itemStatuses: ["accordion-2"],
      allowMultipleExpanded: false,
    });
    expect(updatedItems.length).toBe(1);
    expect(updatedItems[0]).toBe("accordion-1");
  });

  test("Validate returns both items with updated id if allowed to have multiple expanded.", () => {
    const updatedItems = getUpdatedItems({
      id: "accordion-1",
      itemStatuses: ["accordion-2"],
      allowMultipleExpanded: true,
    });
    expect(updatedItems.length).toBe(2);
    expect(["accordion-1", "accordion-2"]).toEqual(
      expect.arrayContaining(updatedItems)
    );
  });
});
