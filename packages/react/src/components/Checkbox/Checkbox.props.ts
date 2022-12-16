export interface CheckboxProps {
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  className?: string;
  disabled?: boolean;
  error?: string | false;
  grouped?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name: string;
  required?: boolean;
  tooltip?: string;
}
