export interface Props {
  icon?: any;
  fontSize?: number;
  style?: any;
  text?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  textMode?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}
