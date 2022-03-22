import React, { useMemo, forwardRef, cloneElement } from "react";
import classNames from "classnames";
import Transition, {
  TransitionStatus,
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
} from "react-transition-group/Transition";
import transitionEndListener from "../../utils/transitionEndListener";
import createChainedFunction from "../../utils/createChainedFunction";
import triggerBrowserReflow from "../../utils/triggerBrowserReflow";
import getDefaultDimensionValue from "../../utils/getDefaultDimensionValue";
import { CollapseProps } from "./Collapse.props";

const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "expanding",
  [ENTERED]: "collapse show",
};

const Collapse = forwardRef<Transition<any>, CollapseProps>(
  (
    {
      dimension = "height",
      panelIn = false,
      getDimensionValue = getDefaultDimensionValue,
      timeout = 300,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      className,
      children,
      role,
      ...rest
    },
    ref
  ) => {
    /* Compute dimension */
    const computedDimension =
      typeof dimension === "function" ? dimension() : dimension;

    /* -- Expanding -- */
    const handleEnter = useMemo(
      () =>
        createChainedFunction((elem) => {
          elem.style[computedDimension] = "0";
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEnter),
      [computedDimension, onEnter]
    );

    const handleEntering = useMemo(
      () =>
        createChainedFunction((elem) => {
          const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(
            1
          )}`;
          elem.style[computedDimension] = `${elem[scroll]}px`;
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEntering),
      [computedDimension, onEntering]
    );

    const handleEntered = useMemo(
      () =>
        createChainedFunction((elem) => {
          elem.style[computedDimension] = null;
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEntered),
      [computedDimension, onEntered]
    );

    /* -- Collapsing -- */
    const handleExit = useMemo(
      () =>
        createChainedFunction((elem) => {
          elem.style[computedDimension] = `${getDimensionValue(
            computedDimension,
            elem
          )}px`;
          triggerBrowserReflow(elem);
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onExit),
      [onExit, getDimensionValue, computedDimension]
    );

    const handleExiting = useMemo(
      () =>
        createChainedFunction((elem) => {
          elem.style[computedDimension] = null;
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onExiting),
      [computedDimension, onExiting]
    );

    return (
      <Transition
        nodeRef={ref}
        addEndListener={transitionEndListener}
        {...rest}
        aria-expanded={role ? panelIn : null}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
        in={panelIn}
      >
        {(state: TransitionStatus, innerProps: Record<string, unknown>) => {
          return cloneElement(children, {
            ...innerProps,
            className: classNames(
              className,
              children.props.className,
              collapseStyles[state],
              computedDimension === "width" && "collapse-horizontal"
            ),
          });
        }}
      </Transition>
    );
  }
);

export default Collapse;
