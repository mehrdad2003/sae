import React from 'react'
import{footerData} from './footerData'
import{FooterContainer,FooterLink,FooterWrap,FooterLinksContainer,
FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,
SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,
WebsiteRights} from './Footer';
import {FaFacebook, FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa'
function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                  {footerData.slice(0,2).map((item)=>{
                      const{id,title,title2,url1}=item
                      return<FooterLinksItems key={id}>
                          <FooterLinkTitle>{title}</FooterLinkTitle>
                          <FooterLink to={url1}>{title2}</FooterLink>
                      </FooterLinksItems>
                  })}
                    </FooterLinksWrapper>
                      <FooterLinksWrapper>
                  {footerData.slice(2).map((item)=>{
                      const{id,title,title2,url1}=item
                   
                      return<FooterLinksItems key={id}>
                          <FooterLinkTitle>{title}</FooterLinkTitle>
                          <FooterLink to={url1}>{title2}</FooterLink>
                      </FooterLinksItems>
                  })}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                           SAE
                        </SocialLogo>
                        <WebsiteRights>SAE  {new Date().getFullYear()} مهرداد زارع</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank"
                            aria-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                             <SocialIconLink href='/' target="_blank"
                            aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                              <SocialIconLink href='/' target="_blank"
                            aria-label='Telegram'>
                                <FaTelegram/>
                            </SocialIconLink>
                              <SocialIconLink href='/' target="_blank"
                            aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
