import React from 'react';
import './FooterLink.css';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkTitle, FooterLinkItems,
SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, SocialIcons,
WebsiteRights}
from './FooterElements';

const Footer = () => {

  const toggleHome= () => {
    scroll.scrollToTop();
  }; 

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>CUSTUMER CARE</FooterLinkTitle>
              <a rel="noopener noreferrer" href='https://www.cartier.com/en-us/contact-customer-care' class='Links' target='_blank'>CALL NOW: tel:+370 521 438 62</a>
              <a rel="noopener noreferrer" href="https://www.cartier.com/en-lt/services/your-purchase-concierge/delivery-and-returns/delivery-lead-time-and-costs"  class='Links'  target='_blank'>DELIVERY SERVICES</a>
              <a rel="noopener noreferrer" href='https://www.cartier.com/en-lt/services/your-purchase-concierge/faq/orders-payment' class='Links'  target='_blank'>PAYMENT OPTIONS</a>
              <a rel="noopener noreferrer" href='https://www.cartier.com/en-lt/account/searchorder'class='Links'  target='_blank'>TRACK YOUR ORDER</a>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>OUR COMPANY</FooterLinkTitle>
              <a rel="noopener noreferrer" href="https://stores.cartier.com/en_lt/search?" class='Links'  target='_blank'>FIND A BOTIQUE</a>
              <a rel="noopener noreferrer" href="https://www.careers.cartier.com/" class='Links'  target='_blank'>CAREERS</a>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>LEGAL AND PRIVACY</FooterLinkTitle>
              <a rel="noopener noreferrer" href="https://www.cartier.com/en-lt/legal-and-privacy/terms-of-use" class='Links'  target='_blank'>TERMS OF USE</a>
              <a rel="noopener noreferrer" href="https://www.cartier.com/en-lt/legal-and-privacy/conditions-of-sale" class='Links'  target='_blank'>CONDITIONS OF SALES</a>
              <a rel="noopener noreferrer" href="https://www.cartier.com/en-lt/legal-and-privacy/privacy-policy" class='Links'  target='_blank'>PRIVACY POLICY</a>
              <a rel="noopener noreferrer" href="https://www.cartier.com/en-lt/legal-and-privacy/cookie-policy" class='Links'  target='_blank'>COOKIE POLICY</a>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>FOLLOW US</FooterLinkTitle>
              <a rel="noopener noreferrer" href='https://www.instagram.com/cartier/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'class='Links'  target='_blank'>INSTAGRAM</a>
              <a rel="noopener noreferrer" href='https://twitter.com/Cartier/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'class='Links'  target='_blank'>TWITTER</a>
              <a rel="noopener noreferrer" href='https://www.youtube.com/channel/UCu16y62LPCwTknfV5_7Zalg/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'class='Links'  target='_blank'>YOUTUBE</a>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'onClick={toggleHome}>
                Cartier
            </SocialLogo>
            <WebsiteRights> Cartier {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='https://www.instagram.com/cartier/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'target='_blank'aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='https://twitter.com/Cartier/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'target='_blank'aria-label="Twitter">
                    <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='https://www.youtube.com/channel/UCu16y62LPCwTknfV5_7Zalg'target='_blank'aria-label="Youtube">
                    <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='https://www.linkedin.com/company/cartier/?utm_source=website&utm_medium=social-cm&utm_campaign=footer-website-FY23'target='_blank'aria-label="Linkedin">
                    <FaLinkedin />
                </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>

  );
};

export default Footer;