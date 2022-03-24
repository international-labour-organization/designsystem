import { getUpdatedItems, EVENTS, ARIA } from '@ilo/utils';

Array.prototype.forEach.call(
  document.querySelectorAll(`[data-loadcomponent="Accordion"]`),
  (element) => {
    // eslint-disable-next-line no-console
    console.log('loading Accordion component');
    //new Accordion(element);
  }
);

// /**
//  * The Accordion module which handles rendering field labels inline on a form.
//  *
//  * @class Accordion
//  */
// export default class Accordion {
//   /**
//    * Accordion constructor which assigns the element passed into the constructor
//    * to the `this.element` property for later reference
//    *
//    * @param {HTMLElement} element - REQUIRED - the module's container
//    */
//   constructor(element) {
//     /**
//      * Reference to the DOM element that is the root of the component
//      * @property {Object}
//      */
//     this.element = element;

//     // Initialize the view
//     this.init();
//   }

//   /**
//    * Initializes the view by calling the functions to
//    * create DOM references, setup event handlers and
//    * then create the event listeners
//    *
//    * @return {Object} Accordion A reference to the instance of the class
//    * @chainable
//    */
//   init() {
//     this.cacheDomReferences()
//       .setupHandlers()
//       .enable();

//     return this;
//   }

//   /**
//    * Find all necessary DOM elements used in the view and cache them
//    *
//    * @return {Object} Accordion A reference to the instance of the class
//    * @chainable
//    */
//   cacheDomReferences() {
//     /**
//      * The field that a user interacts with on a form
//      * @type {Object}
//      */
//     this.accordionButton = this.element.querySelector(SELECTORS.ACCORDION_BUTTON);
//     this.accordionPanel = this.element.querySelector(SELECTORS.ACCORDION_PANEL);

//     if (this.accordionPanel.getAttribute(ARIA.HIDDEN) === MISC.TRUE) {
//       this.accordionPanel.style.height = '0px';
//     }

//     return this;
//   }

//   /**
//    * Bind event handlers with the proper context of `this`.
//    *
//    * @return {Object} Accordion A reference to the current instance of the class
//    * @chainable
//    */
//   setupHandlers() {
//     this.onClick = this.onClick.bind(this);
//     this.collapseSection = this.collapseSection.bind(this);
//     this.expandSection = this.expandSection.bind(this);

//     return this;
//   }

//   /**
//    * Creates event listeners to enable interaction with view
//    *
//    * @return {Object} Accordion A reference to the instance of the class
//    * @chainable
//    */
//   enable() {
//     this.accordionButton.addEventListener(EVENTS.CLICK, this.onClick);

//     return this;
//   }

//   /**
//    * Onclick interaction with the accordion button
//    *
//    * @return {Object} Accordion A reference to the instance of the class
//    * @chainable
//    */
//   onClick() {
//     const expanded = this.accordionButton.getAttribute(ARIA.EXPANDED) === MISC.TRUE;
//     this.accordionButton.setAttribute(ARIA.EXPANDED, !expanded);
//     this.accordionPanel.setAttribute(ARIA.HIDDEN, expanded);

//     if (!expanded) {
//       this.expandSection(this.accordionPanel);
//     } else {
//       this.collapseSection(this.accordionPanel);
//     }

//     return this;
//   }

//   /**
//    * Animates a panel collapse
//    *
//    * @param {HTMLElement} element - REQUIRED - the accordion panel to be collapsed
//    *
//    * @chainable
//    */
//   collapseSection(element) {
//     const sectionHeight = element.scrollHeight;
//     const elementTransition = element.style.transition;
//     element.style.transition = '';

//     requestAnimationFrame(() => {
//       element.style.height = `${sectionHeight}px`;
//       element.style.transition = elementTransition;
//       requestAnimationFrame(() => {
//         element.style.height = `${0}px`;
//       });
//     });
//   }

//   /**
//    * Animates a panel expansion
//    *
//    * @param {HTMLElement} element - REQUIRED - the accordion panel to be expanded
//    *
//    * @chainable
//    */
//   expandSection(element) {
//     const sectionHeight = element.scrollHeight;
//     element.style.height = `${sectionHeight}px`;

//     element.addEventListener(EVENTS.TRANSITIONEND, () => {
//       element.getAttribute(ARIA.HIDDEN) === MISC.FALSE
//         ? (element.style.height = 'auto')
//         : (element.style.height = '0px');
//       element.removeEventListener(EVENTS.TRANSITIONEND, () => {
//         element.style.height = null;
//       });
//     });
//   }
// }
