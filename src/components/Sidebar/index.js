import React from 'react'
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarRoute,
    SidebarLink,
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
                <SidebarLink to='about'>About</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to='products'>Product</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to='branches'>Branches</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to='signup'>Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign in</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
     </SidebarContainer>
  );
};

export default Sidebar 