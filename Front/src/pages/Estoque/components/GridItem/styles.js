import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;



export const h2 = styled.h2`

`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #1C2127;
  
`;
