/**
 * The Table module which handles rendering field labels inline on a form.
 *
 *
 * @class Table
 */
export default class Table {
  /**
   * Table constructor which assigns the element passed into the constructor
   * to the `this.element` property for later reference
   *
   * @param {HTMLElement} element - REQUIRED - the module's container
   */
  constructor(element) {
    /**
     * Reference to the DOM element that is the root of the component
     * @property {Object}
     */
    this.element = element;

    // get the theme prefix
    this.prefix = this.element.dataset.prefix;

    this.sortlist = [];

    // Initialize the view
    this.init();
  }

  /**
   * Initializes the view by calling the functions to
   * create DOM references, setup event handlers and
   * then create the event listeners
   *
   * @return {Object} Table A reference to the instance of the class
   * @chainable
   */
  init() {
    this.cacheDomReferences().setupHandlers().setUpSorting().enable();

    return this;
  }

  /**
   * Find all necessary DOM elements used in the view and cache them
   *
   * @return {Object} ReadMore A reference to the instance of the class
   * @chainable
   */
  cacheDomReferences() {
    /**
     * The button for toggling Read More state
     * @type {Object}
     */
    this.thCells = this.element.querySelectorAll(
      `.${this.prefix}--table--head--cell`
    );
    this.tdCells = this.element.querySelectorAll(
      `.${this.prefix}--table--body--cell`
    );
    this.rows = this.element.querySelectorAll(`[class~="--row"]`);
    this.thRows = this.element.querySelectorAll(
      `.${this.prefix}--table--head--row`
    );
    this.tdRows = this.element.querySelectorAll(
      `.${this.prefix}--table--body--row`
    );
    this.tBody = this.element.querySelector(`.${this.prefix}--table--body`);

    return this;
  }

  /**
   * Bind event handlers with the proper context of `this`.
   *
   * @return {Object} Table A reference to the current instance of the class
   * @chainable
   */
  setupHandlers() {
    this.ClickThHandler = this.onClickTh.bind(this);
    this.ClickTdHandler = this.onClickTd.bind(this);

    return this;
  }

  /**
   * Evaluates which columns are sortable and adds class to th of sortable columns
   *
   * @return {Object} Table A reference to the current instance of the class
   * @chainable
   */
  setUpSorting() {
    Array.from(this.tdRows).forEach((tdrow) => {
      Array.from(
        tdrow.querySelectorAll(`.${this.prefix}--table--body--cell`)
      ).forEach((cell, index) => {
        const sortablecontent = cell.textContent.toLowerCase();
        if (typeof this.sortlist[index] === "undefined") {
          this.sortlist[index] = [];
        }
        if (cell.classList.contains("numeric")) {
          if (this.isDate(sortablecontent)) {
            this.sortlist[index].push({
              value: sortablecontent,
              node: tdrow,
              type: "date",
            });
          } else {
            this.sortlist[index].push({
              value: sortablecontent,
              node: tdrow,
              type: "numeric",
            });
          }
        } else if (cell.innerHTML.match(/^([^0-9]*)$/)) {
          this.sortlist[index].push({
            value: sortablecontent,
            node: tdrow,
            type: "string",
          });
        }
      });
    });
    this.sortlist.forEach((column, index) => {
      if (this.sortlist[index].length === this.tdRows.length) {
        this.thCells[index].classList.add("sortable");
      }
    });

    return this;
  }

  /**
   * Creates event listeners to enable interaction with view
   *
   * @return {Object} Table A reference to the instance of the class
   * @chainable
   */
  enable() {
    this.element.classList.add("table--js");

    Array.from(this.thCells).forEach((thcell) => {
      thcell.addEventListener("click", (e) => this.ClickThHandler(e));
    });

    Array.from(this.tdCells).forEach((tdcell) => {
      tdcell.addEventListener("click", (e) => this.ClickTdHandler(e));
    });

    return this;
  }

  /**
   * Actions performed on click of a tab
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  onClickTh(e) {
    e.preventDefault();
    Array.from(this.thCells).forEach((thcell, index) => {
      // set/remove aria-sort attribute
      if (thcell === e.target) {
        if (
          typeof thcell.getAttribute("aria-sort") === "undefined" ||
          thcell.getAttribute("aria-sort") === "descending"
        ) {
          thcell.setAttribute("aria-sort", "ascending");
          this.sortColumn(index, "ascending");
        } else {
          thcell.setAttribute("aria-sort", "descending");
          this.sortColumn(index, "descending");
        }
      } else {
        thcell.removeAttribute("aria-sort");
      }
    });

    return this;
  }

  /**
   * Actions performed on click of a tab
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  onClickTd(e) {
    e.preventDefault();
    let currentindex = null;

    Array.from(this.tdRows).forEach((tdrow) => {
      tdrow.classList.remove("selected");
    });

    e.target.parentElement.classList.add("selected");

    Array.from(this.tdCells).forEach((tdcell) => {
      tdcell.classList.remove("selected");
      tdcell.classList.remove("column--selected");
    });

    Array.from(
      e.target.parentElement.querySelectorAll(
        `.${this.prefix}--table--body--cell`
      )
    ).forEach((tdcell, index) => {
      if (tdcell === e.target) {
        tdcell.classList.add("selected");
        currentindex = index;
      }
    });

    Array.from(this.tdRows).forEach((tdrow) => {
      Array.from(
        tdrow.querySelectorAll(`.${this.prefix}--table--body--cell`)
      ).forEach((tdcell, index) => {
        if (index === currentindex && tdcell !== e.target) {
          tdcell.classList.add("column--selected");
        }
      });
    });

    if (e.target.hasAttribute("href")) {
      window.location.href = e.target.getAttribute("href");
    }

    return this;
  }

  /**
   * Sort a column
   *
   * @return {Object} Modal A reference to the instance of the class
   * @chainable
   */
  sortColumn(column, sortdirection) {
    const sorted = this.sortlist[column].sort(this.compare(sortdirection));

    while (this.tBody.firstChild) {
      this.tBody.removeChild(this.tBody.lastChild);
    }

    sorted.forEach((row) => {
      this.tBody.appendChild(row.node);
    });

    return this;
  }

  /**
   * compare
   *
   * @return {Function} a compare function
   */
  compare(sortdirection) {
    return function (a, b) {
      if (sortdirection === "ascending") {
        if (a.value === b.value) {
          return 0;
        } else {
          if (a.type === "numeric") {
            return a.value - b.value;
          } else if (a.type === "date") {
            return new Date(a.value) - new Date(b.value);
          } else {
            return a.value < b.value ? -1 : 1;
          }
        }
      } else {
        if (a.value === b.value) {
          return 0;
        } else {
          if (a.type === "numeric") {
            return b.value - a.value;
          } else if (a.type === "date") {
            return new Date(b.value) - new Date(a.value);
          } else {
            return a.value > b.value ? -1 : 1;
          }
        }
      }
    };
  }

  /**
   * isDate
   * tests is the passed string is a date
   *
   * @return {Boolean} is it a date?
   */
  isDate(date) {
    let isdate = false;
    if (date.match(/^[0-3]?[0-9]\/[0-3]?[0-9]\/(?:[0-9]{2})?[0-9]{2}$/)) {
      isdate = true;
    }
    if (date.match(/^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{2})?[0-9]{2}$/)) {
      isdate = true;
    }

    return isdate;
  }
}
