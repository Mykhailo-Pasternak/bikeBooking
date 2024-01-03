import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const StyledInput = styled(Field) <{
    $isDescription?: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
    height: 29px;
    border: none;
    border-radius: 5px;
    background-color: #e8e8e8;
    padding: 0 0  0 16px;
    
      ::placeholder {
        padding: 0 0  0 16px;
        color: #717171;
      }
      ${(props) =>
        props.$isDescription &&
        `
        width: 100%;
        height: 75px;
        margin-top: 11px;
      `};
  `;

export const ErrorText = styled(ErrorMessage)`
    color: red;
    font-size: 12px;
    margin-top: 4px;
  `;