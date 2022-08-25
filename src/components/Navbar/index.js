import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { ReactComponent as CartierImg } from '../../logo/logo.svg';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
import { 
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink
 } from './NavbarElements';


const Navbar = ({toggle}) => {

  const[scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if(window.scrollY >=100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll',changeNav);
  }, []);

  const[navColor, setNavColor] = useState(false);

  const Color=() => {
    if(window.scrollY >=100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll',Color);
  }, []);
  
  const toggleHome= () => {
    scroll.scrollToTop();
  }; 

   return(
    <>
    <IconContext.Provider value={{ color: '#a42e37' }}>
       <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to='/'onClick={toggleHome}>
              <CartierImg />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                 to='about'
                 navColor={navColor}
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}
                 >About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='products' 
                navColor={navColor}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Products</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='branches' 
                navColor={navColor}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Branches</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks 
                to='sign up' 
                navColor={navColor}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Sign up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink 
              to='/signin'
              navColor={navColor}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
       </Nav>
       </IconContext.Provider>
    </>
  );
}

export default Navbar