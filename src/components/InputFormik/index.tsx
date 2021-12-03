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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Input {...field} {...props}>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </Input>
    </>
  );
};

export default InputFormik;
