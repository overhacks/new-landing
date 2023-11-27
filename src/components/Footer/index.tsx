import React, { useEffect, useState } from "react";
import {
  Column,
  Container,
  FooterBtn,
  FooterWrapper,
  Logo,
  StyledFooter,
} from "./styles";
import SubTitle from "../SubTitle";
import AnySizeTitle from "../Title";
import LogoHacks from "../../assets/img/LOGOHACK.png";

const matcher = () => {
  return window.matchMedia("(max-width: 769px)").matches;
};

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const checkScreenSize = () => {
    setIsSmallScreen(matcher());
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <FooterWrapper>
      <StyledFooter>
        <Logo background={LogoHacks} />

        <Container>
          <Column>
            <AnySizeTitle color="#CCFF5A" text="OVERHACKS" fontSize="17px" />
            <FooterBtn>
              <SubTitle textAlign="left" color="#F4FFDD" text="About" />
            </FooterBtn>
            <FooterBtn>
              <SubTitle textAlign="left" color="#F4FFDD" text="Contact us" />
            </FooterBtn>
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Terms of service"
              />
            </FooterBtn>
          </Column>

          <Column>
            <AnySizeTitle color="#CCFF5A" text="HACKATONS" fontSize="17px" />
            <FooterBtn
              href="https://forms.gle/Exqa4wAzTi1kSzbU9"
              target="_blank"
            >
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Host a hackaton"
                cursor="pointer"
              />
            </FooterBtn>
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Browse hackatons"
              />
            </FooterBtn>
          </Column>

          <Column>
            <AnySizeTitle color="#CCFF5A" text="SOCIAL MEDIA" fontSize="17px" />
            <FooterBtn>
              <SubTitle textAlign="left" color="#F4FFDD" text="Twitter" />
            </FooterBtn>
            <FooterBtn>
              <SubTitle textAlign="left" color="#F4FFDD" text="LinkedIn" />
            </FooterBtn>
            <FooterBtn>
              <SubTitle textAlign="left" color="#F4FFDD" text="Medium" />
            </FooterBtn>
          </Column>
        </Container>
      </StyledFooter>
    </FooterWrapper>
  );
}

export default Footer;
