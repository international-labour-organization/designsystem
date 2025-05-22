export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;

  /**
   * The theme of the form. Also sets the theme of the form's children. Defaults to "light".
   */
  theme?: "light" | "dark";
}
