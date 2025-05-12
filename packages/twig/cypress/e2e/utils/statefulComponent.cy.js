import { StatefulComponent } from "../../../src/utils/statefulComponent";

describe("StatefulComponent", () => {
  let component;
  let element;
  let initialState;
  let stateChangeHandler;

  beforeEach(() => {
    // Create a mock DOM element
    element = document.createElement("div");
    element.id = "test-component";
    document.body.appendChild(element);

    // Setup initial state
    initialState = {
      isOpen: false,
      items: [],
      nested: {
        value: "initial",
        count: 0,
      },
    };

    // Create a spy for state change handler
    stateChangeHandler = cy.spy();

    // Initialize component
    component = new StatefulComponent(element, initialState);
  });

  afterEach(() => {
    // Clean up DOM
    element.remove();
  });

  it("should initialize with correct state", () => {
    expect(component.state).to.deep.equal(initialState);
  });

  it("should trigger handler when state property changes", () => {
    component.registerStateHandler("isOpen", stateChangeHandler);
    component.state.isOpen = true;
    expect(stateChangeHandler).to.have.been.calledWith(true, "isOpen");
  });

  it("should not trigger handler when state property is set to same value", () => {
    component.registerStateHandler("isOpen", stateChangeHandler);
    component.state.isOpen = false; // Same as initial value
    expect(stateChangeHandler).not.to.have.been.called;
  });

  it("should handle multiple handlers for same property", () => {
    const handler1 = cy.spy();
    const handler2 = cy.spy();

    component.registerStateHandler("isOpen", handler1);
    component.registerStateHandler("isOpen", handler2);

    component.state.isOpen = true;

    expect(handler1).to.have.been.calledWith(true, "isOpen");
    expect(handler2).to.have.been.calledWith(true, "isOpen");
  });

  it("should handle nested object state changes through assignment", () => {
    const nestedHandler = cy.spy();
    component.registerStateHandler("nested", nestedHandler);

    // Update nested object through assignment
    component.state.nested = {
      ...component.state.nested,
      value: "updated",
    };

    expect(nestedHandler).to.have.been.calledWith(
      { value: "updated", count: 0 },
      "nested"
    );
  });

  it("should handle array state changes through assignment", () => {
    const arrayHandler = cy.spy();
    component.registerStateHandler("items", arrayHandler);

    // Update array through assignment
    component.state.items = [...component.state.items, "new item"];

    expect(arrayHandler).to.have.been.calledWith(["new item"], "items");
  });

  it("should maintain reference to DOM element", () => {
    expect(component.element).to.equal(element);
  });

  it("should handle multiple state changes in sequence", () => {
    const isOpenHandler = cy.spy();
    const itemsHandler = cy.spy();

    component.registerStateHandler("isOpen", isOpenHandler);
    component.registerStateHandler("items", itemsHandler);

    component.state.isOpen = true;
    component.state.items = [...component.state.items, "item1"];
    component.state.isOpen = false;

    expect(isOpenHandler).to.have.been.calledTwice;
    expect(itemsHandler).to.have.been.calledOnce;
  });

  it("should handle complex nested state updates through assignment", () => {
    const nestedHandler = cy.spy();
    component.registerStateHandler("nested", nestedHandler);

    // Update nested state through assignment
    component.state.nested = {
      value: "new",
      count: 1,
      deeper: {
        level: 2,
      },
    };

    expect(nestedHandler).to.have.been.calledWith(
      {
        value: "new",
        count: 1,
        deeper: {
          level: 2,
        },
      },
      "nested"
    );
  });

  it("should handle undefined initial state", () => {
    const emptyComponent = new StatefulComponent(element);
    expect(emptyComponent.state).to.deep.equal({});
  });

  it("should handle multiple array operations through assignment", () => {
    const arrayHandler = cy.spy();
    component.registerStateHandler("items", arrayHandler);

    // Add item
    component.state.items = [...component.state.items, "item1"];
    expect(arrayHandler).to.have.been.calledWith(["item1"], "items");

    // Remove item
    component.state.items = component.state.items.filter(
      (item) => item !== "item1"
    );
    expect(arrayHandler).to.have.been.calledWith([], "items");

    // Update item
    component.state.items = ["item1", "item2"];
    component.state.items = component.state.items.map((item) =>
      item === "item1" ? "updated" : item
    );
    expect(arrayHandler).to.have.been.calledWith(["updated", "item2"], "items");
  });

  it("should handle nested array updates through assignment", () => {
    const initialState = {
      nestedArray: [
        [1, 2],
        [3, 4],
      ],
    };
    const component = new StatefulComponent(element, initialState);
    const arrayHandler = cy.spy();

    component.registerStateHandler("nestedArray", arrayHandler);

    // Update nested array
    component.state.nestedArray = [
      [...component.state.nestedArray[0], 3],
      component.state.nestedArray[1],
    ];

    expect(arrayHandler).to.have.been.calledWith(
      [
        [1, 2, 3],
        [3, 4],
      ],
      "nestedArray"
    );
  });
});
