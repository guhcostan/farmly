import React, { ChangeEventHandler } from 'react';

export interface Props {
  label?: string;
  placeholder?: string;
  button?: any;
  type?: string;
  name?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  bordless?: boolean;
  fontSize?: number;
  mask?: any;
  prefix?: string;
  value?: string;
}
