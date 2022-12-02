import styled from 'styled-components';

export const FilterField = styled.label`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto 15px auto;
`;

export const FilerInput = styled.input`
  margin-top: 5px;
  padding-left: 10px;
  width: 200px;
  height: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    cursor 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    outline: none;
    border: 1px solid #2196f3;
    cursor: pointer;
  }
`;
