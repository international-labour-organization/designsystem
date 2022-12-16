export interface RadioProps {
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  className?: string;
  disabled?: boolean;
  error?: string;
  helper?: string;
  id?: string;
  label?: string;
  name: string;
  required?: boolean;
  tooltip?: string;
  value: string;
}
