import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FieldName = styled.p`
  margin: 8px 0 8px;
  text-transform: capitalize;
  font-weight: 600;
`;

export const FieldNum = styled.p`
  margin: 8px 0 8px;
  font-weight: 600;
`;

export const DeleteBtn = styled.button`
  display: block;
  height: 25px;
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
