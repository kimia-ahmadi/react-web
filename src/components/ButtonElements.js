import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#a42e37' : 'black')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '13px 30px')};
  color: ${({dark}) => (dark ? 'white' : '#a42e37')};
  font-size: ${({fontBig}) => (fontBig ? '25px' : '15px')};
  outline: none;
  cursor: pointer;
  border: none;
  displat: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'black' : '#01BF71')};
  }
`;