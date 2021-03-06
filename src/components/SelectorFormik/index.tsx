/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useField } from 'formik';
import { Props } from './interfaces';
import Input from '../Input';
import Selector from '../Selector';

const SelectorFormik: React.FC<Props> = ({ name = '', ...props }) => {
  const [field, meta] = useField({ name });

  return (
    <>
      <Selector
        {...field}
        {...props}
        onChange={(e) => {
          if (props?.onChange) {
            props?.onChange(e);
          }
          field.onChange(e);
        }}
      />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default SelectorFormik;
