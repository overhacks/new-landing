import React, { useEffect, useState } from "react";
import {
  Column,
  Container,
  FooterBoofer,
  FooterBtn,
  StyledFooter,
} from "./styles";
import SubTitle from "../SubTitle";

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
    <StyledFooter>
      <FooterBoofer />

      <Container columns={isSmallScreen ? "1fr 1fr" : "1fr 1fr 1fr 1fr"}>
        <Column>
          <SubTitle
            fontWeight="600"
            textAlign="left"
            color="white"
            text="Overhacks"
          />
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="About" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Contact us" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Terms of service" />
          </FooterBtn>
        </Column>

        <Column>
          <SubTitle
            fontWeight="600"
            textAlign="left"
            color="white"
            text="Hackatons"
          />
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Host a hackaton" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Browse hackatons" />
          </FooterBtn>
        </Column>

        <Column>
          <SubTitle
            fontWeight="600"
            textAlign="left"
            color="white"
            text="Portfolio"
          />
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Your hackatons" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Your projects" />
          </FooterBtn>
        </Column>

        <Column>
          <SubTitle
            fontWeight="600"
            textAlign="left"
            color="white"
            text="Social media"
          />
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Telegram" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Discord" />
          </FooterBtn>
          <FooterBtn>
            <SubTitle textAlign="left" color="white" text="Twitter" />
          </FooterBtn>
        </Column>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
