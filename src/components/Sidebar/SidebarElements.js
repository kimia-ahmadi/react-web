import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  left: 0;
  transition: 0.3s ease-in-out;
  background: black;
  top: ${({isOpen}) => (isOpen ? '0': '-100%')};
  opacity: ${({isOpen}) => (isOpen ? '100%': '0')};

`;

export const CloseIcon = styled(FaTimes)`
  color: #e82a46;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 90px);
  color: #F5DEE0;
  text-align: center;
`;

export const SidebarMenu = styled.ul`
  justify-content: center;
  align-content: center; 
`;

export const SidebarLink = styled(LinkS)`
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover{
    color: red;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display : flex;
  justify-content: center ;
  align-items: center ;
  text-align: center ;
  margin-left: 40px;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 15px;
  white-space: nowrap;
  background: red;
  padding:20px 70px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 25px;
  letter-spacing: 0.1rem;
  transition: 0.2s all ease-in-out;



  &:hover{
    transition: 0.2s all ease-in-out;
    background: #e82a46;
    color: #FFD662FF;
  }
`;