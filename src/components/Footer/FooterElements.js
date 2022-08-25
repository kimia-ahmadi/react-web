import styled from "styled-components";
import { Link } from "react-router-dom";


export const FooterContainer = styled.footer`
  background-color: white;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

export const FooterWrap = styled.div`
   padding: 30px 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1100px;
   margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width:820px){
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  text-align: left;
  width: 130px;
  box-sizing: border-box;
  color: black;

  @media screen and (max-width:420px){
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  display: inline-block;
  margin-bottom: 18px;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%; 
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-sidth:820px){
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #a42e37;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;

export const SocialIconLink = styled.a`
  color: #a42e37;
  font-size: 26px;
`;

export const WebsiteRights = styled.small`
  color: #a42e37;
  display: inline-block;
  font-size: 10px;
`;

