import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 10px 16px 0px;
  margin: 0;
`;

export const WrapButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 11px;
  margin-top: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  border-radius: 5px;
  background: #696969;

  width: 100%;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #cccccc;
  }
`;

export const FormFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5.5px));
  gap: 11px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
