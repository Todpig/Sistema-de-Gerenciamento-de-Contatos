import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #333;
  color: white;
`;

export const Tbody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Theading = styled.th`
  text-align: left;
`;
