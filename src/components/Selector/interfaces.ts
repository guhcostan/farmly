interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  name?: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: () => void;
  onSelect?: () => void;
  onBlur?: () => void;
}
