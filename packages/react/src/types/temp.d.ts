//@TODO: Get rid of this as soon as type declarations are available for icons-react
declare module "@ilo-org/icons-react";

//@TODO: Get rid of this as soon as this issue has been resolved
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/59684
declare module "react-transition-group/Transition" {
  export default Transition;
  export { TransitionStatus, ENTERED, ENTERING, EXITED, EXITING };
}
