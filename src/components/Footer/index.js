import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterSocialMediaContainer, FooterSocialMediaWrap, SoicalLogo, WebsiteRight, SoicalIcons, SoicalIconLink} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }; 
  
    return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/'>Submit Video</FooterLink>
                        <FooterLink to='/'>Ambassadors</FooterLink>
                        <FooterLink to='/'>Agency</FooterLink>
                        <FooterLink to='/'>Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Instagram</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink>
                        <FooterLink to='/'>Youtube</FooterLink>
                        <FooterLink to='/'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <FooterSocialMediaContainer>
                <FooterSocialMediaWrap>
                    <SoicalLogo to='/' onClick={toggleHome}> dolla </SoicalLogo>
                    <WebsiteRight>dolla &copy; {new Date().getFullYear()} All rights reserved</WebsiteRight>
                    <SoicalIcons>
                        <SoicalIconLink herf='/' target='_blank' aria-label='Facebook'><FaFacebook/></SoicalIconLink>
                        <SoicalIconLink herf='/' target='_blank' aria-label='Instagram'><FaInstagram/></SoicalIconLink>
                        <SoicalIconLink herf='/' target='_blank' aria-label='Youtube'><FaYoutube/></SoicalIconLink>
                        <SoicalIconLink herf='/' target='_blank' aria-label='Twitter'><FaTwitter/></SoicalIconLink>
                        <SoicalIconLink herf='/' target='_blank' aria-label='Linkedin'><FaLinkedin/></SoicalIconLink>
                    </SoicalIcons>
                </FooterSocialMediaWrap>
            </FooterSocialMediaContainer>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;