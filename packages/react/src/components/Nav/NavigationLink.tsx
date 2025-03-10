import { NavigationLinkProps } from "./Navigation.props";

const NavigationLink = (props: NavigationLinkProps) => {
  const { label, component: Component, isActive, ...rest } = props;

  if (Component) {
    return (
      <Component {...rest} isActive={isActive}>
        {label}
      </Component>
    );
  }

  return <a {...rest}>{label}</a>;
};

export { NavigationLink };
