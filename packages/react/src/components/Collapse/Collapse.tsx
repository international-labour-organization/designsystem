import classNames from "classnames";
import { cloneElement, forwardRef, ReactElement, useMemo } from "react";
import Transition, {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  TransitionStatus,
} from "react-transition-group/Transition";
import createChainedFunction from "../../utils/createChainedFunction";
import getDefaultDimensionValue from "../../utils/getDefaultDimensionValue";
import transitionEndListener from "../../utils/transitionEndListener";
import triggerBrowserReflow from "../../utils/triggerBrowserReflow";
import { CollapseProps } from "./Collapse.props";

const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "expanding",
  [ENTERED]: "collapse show",
};

const Collapse = forwardRef<Transition<unknown>, CollapseProps>(
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
        createChainedFunction((elem: HTMLElement) => {
          elem.style[computedDimension] = "0";
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEnter),
      [computedDimension, onEnter, timeout]
    );

    const handleEntering = useMemo(
      () =>
        createChainedFunction((elem: HTMLElement) => {
          const scroll =
            `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(
              1
            )}` as keyof HTMLElement;
          elem.style[computedDimension] = `${elem[scroll] as number}px`;
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEntering),
      [computedDimension, onEntering, timeout]
    );

    const handleEntered = useMemo(
      () =>
        createChainedFunction((elem: HTMLElement) => {
          elem.style[computedDimension] = "none";
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onEntered),
      [computedDimension, onEntered, timeout]
    );

    /* -- Collapsing -- */
    const handleExit = useMemo(
      () =>
        createChainedFunction((elem: HTMLElement) => {
          elem.style[computedDimension] = `${getDimensionValue(
            computedDimension,
            elem
          )}px`;
          triggerBrowserReflow(elem);
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onExit),
      [onExit, getDimensionValue, computedDimension, timeout]
    );

    const handleExiting = useMemo(
      () =>
        createChainedFunction((elem: HTMLElement) => {
          elem.style[computedDimension] = "0px";
          elem.style.transitionDuration = `${timeout + 50}ms`;
        }, onExiting),
      [computedDimension, onExiting, timeout]
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
              (children as ReactElement<{ className: string }>).props.className,
              collapseStyles[state as keyof typeof collapseStyles],
              computedDimension === "width" && "collapse-horizontal"
            ),
          });
        }}
      </Transition>
    );
  }
);

export default Collapse;
