import { ChangeEventHandler } from 'react';

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
  onChange?: ChangeEventHandler;
  onSelect?: (value: string) => void;
  onBlur?: () => void;
}
