import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 16px;
  max-width: 300px;
  outline-color: red;
  border-radius: 8px;
  padding: 0px 8px;
`;

export const Button = styled.button`
  display: block;
  width: 90px;
  padding: 5px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
  &:hover {
    color: #000000;
    background-color: #ffffff;
    box-shadow: 2px 2px 5px #000000;
  }
`;
