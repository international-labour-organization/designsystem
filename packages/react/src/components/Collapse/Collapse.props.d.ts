import React from "react";

type Dimension = "height" | "width";

export interface CollapseProps {
  className?: string;

  /**
   * Show the component; triggers the expand or collapse animation
   */
  panelIn?: boolean;

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit?: boolean;

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear?: boolean;

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout?: number;

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   */
  dimension?: Dimension | (() => Dimension);

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   *
   * @default element.offsetWidth | element.offsetHeight
   */
  getDimensionValue?: (dimension: Dimension, element: HTMLElement) => number;

  /**
   * ARIA role of collapsible element
   */
  role?: string;

  /**
   * You must provide a single JSX child element to this component and that element cannot be a \<React.Fragment\>
   */
  children: React.ReactElement;

  /**
   * Callback fired before the component expands
   */
  onEnter?: () => void;

  /**
   * Callback fired after the component starts to expand
   */
  onEntering?: () => void;

  /**
   * Callback fired after the component has expanded
   */
  onEntered?: () => void;

  /**
   * Callback fired before the component collapses
   */
  onExit?: () => void;

  /**
   * Callback fired after the component starts to collapse
   */
  onExiting?: () => void;

  /**
   * Callback fired after the component has collapsed
   */
  onExited?: () => void;
}
