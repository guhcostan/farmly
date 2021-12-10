/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useField } from 'formik';
import { Props } from './interfaces';
import Input from '../Input';

const InputFormik: React.FC<Props> = ({ name = '', ...props }) => {
  const [field, meta] = useField({ name });

  return (
    <>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputFormik;
