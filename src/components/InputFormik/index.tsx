/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { Props } from './interfaces';
import Input from '../Input';

const Observation = styled.div`
  font-size: 12px;
`;

const InputFormik: React.FC<Props> = ({ name = '', observation, ...props }) => {
  const [field, meta] = useField({ name });

  return (
    <>
      <Input {...field} {...props} />
      {observation ? <Observation>* {observation}</Observation> : null}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputFormik;
