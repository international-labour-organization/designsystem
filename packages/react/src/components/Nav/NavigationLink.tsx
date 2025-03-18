import { NavigationLinkProps } from "./Navigation.props";

const NavigationLink = (props: NavigationLinkProps) => {
  const { label, component: Component, ...rest } = props;

  if (Component) {
    return <Component {...rest}>{label}</Component>;
  }

  return <a {...rest}>{label}</a>;
};

export { NavigationLink };
