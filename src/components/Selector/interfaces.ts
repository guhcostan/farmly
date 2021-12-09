interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  name?: string;
  placeholder: string;
  className?: string;
  onChange?: () => void;
  onBlur?: () => void;
}
