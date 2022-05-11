import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0921-208-5101">0921 208 5101</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jcdelloro@up.edu.ph">jcdelloro@up.edu.ph</LinkItem>
        </LinkColumn>
        <SocialContainer>
          <SocialIconsContainer>
            <SocialIcons href="https://github.com/iCHIrTmA">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://ph.linkedin.com/in/janroe-cordero-a3aa4b115">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialIconsContainer>
        </SocialContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
