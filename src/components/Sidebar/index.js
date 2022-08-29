import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarRoute,
    SideBtnWrap,
    SidebarMenu,
    SidebarWrapper
}from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
  return (
     <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <a href="https://www.careers.cartier.com/en/about-cartier" style={{ 
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none"
                    }}
                  >
                     About
                </a>
            </SidebarMenu>
            <SidebarMenu>
                <a href="https://www.cartier.com/en-lt/"style={{ 
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none"
                    }}
                  >
                    Product
                </a>
            </SidebarMenu>
            <SidebarMenu>
                <a href="https://stores.cartier.com/" style={{ 
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none"
                    }}
                  >
                    Branches
                </a>
            </SidebarMenu>
            <SidebarMenu>
                <a href="https://www.cartier.com/en-lt/Account/User/Login?login_challenge=b4be12c593874e189285e2e78c0682b2" style={{ 
                    color: "white",
                    fontSize: "22px",
                    textDecoration: "none"
                    }}
                  >
                    Sign up
                </a>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
     </SidebarContainer>
  );
};

export default Sidebar 