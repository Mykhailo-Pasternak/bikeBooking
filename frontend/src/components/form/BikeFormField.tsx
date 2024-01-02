import React from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const StyledInput = styled(Field)`

  height: 29px;
  border: none;
  border-radius: 5px;
  background-color: #e8e8e8;
  padding: 0 0  0 16px;

    ::placeholder {
      padding: 0 0  0 16px;
      color: #717171;
    }
`;

export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
interface BikeFormFieldProps {
    placeholder: string;
    name: string;
    type?: string;
}

const BikeFormField: React.FC<BikeFormFieldProps> = ({ placeholder, name, type = 'text' }) => (
    <>
        <StyledInput type={type} name={name} placeholder={placeholder} />
        <ErrorText name={name} component="div" className="error-message" />
    </>
);

export default BikeFormField;
