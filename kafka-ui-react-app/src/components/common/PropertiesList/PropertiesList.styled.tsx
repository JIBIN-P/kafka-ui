import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 8px;
  column-gap: 24px;
  margin-top: 16px;
  text-align: left;
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.list.label.color};
  white-space: nowrap;
`;
