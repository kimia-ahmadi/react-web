import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
export const Nav = styled.nav`
  background: ${({ scrollNav }) => ( scrollNav ? 'white' : 'transparent')};
  overview: hidden;
  height: 90px;
  display: flex;
  font-size: 1.25rem;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  z-index: 10;
  @media screen and (max-width:960px){
    transition: 0.9s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;

  // Medium devices (tablets, 768px and up)
  @media screen and (max-width: 768px){ 
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  text_align: center;
  margin-right: -20px;
  margin-top: 30px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled(LinkS)`
  color: ${({ navColor }) => ( navColor ? 'black' : 'white')};
  display: flex;
  align-item: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 7px solid #a42e37;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #a42e37;
  white-space; nowrap;
  padding: 9px 20px;
  font-size: 17px;
  color: white;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #a42e37;
    color: black;
  }
`
 