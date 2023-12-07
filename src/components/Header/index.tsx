import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Headercontainer,
  Logo,
  SearchImg,
  DefaultHeadercontainer,
  Input,
  InputContainer,
  LinksContainer,
  HeaderBtn,
  MenuBurgerImg,
  HeaderLinkBtnInner,
  HeaderContainer,
  MotoContainer,
  Moto,
  Promo,
  Name,
  Letter,
  Button,
  MotoRow,
  JoinButton,
  LetterV,
  LetterE,
  LetterH,
  LetterS,
  MotoPhase,
  LetterO,
  JoinButtonWrapper,
  MobilePromoWrapper,
  MobileRowWrapper,
  PartOfName,
  LogoWrapper,
  ButtonText,
  LogoLinksWrapper,
  MotoInnerWrapper,
  MotoLineWrapper,
  MotoLine,
  PromoInnerWrapper,
  Character,
  SloganWrapper,
  SloganPhrase,
  WithText,
  UnderNameText,
  CharacterWrapper,
} from "./styles";
import LogoHacks from "../../assets/img/LOGOHACK.png";
import { routes } from "../../constants/routes";
import Background from "../../assets/img/radiance.png";
import CharacterSVG from "../../assets/img/character.svg";
import O from "../../assets/img/o.png";
import V from "../../assets/img/v.png";
import E from "../../assets/img/e.png";
import R from "../../assets/img/r.png";
import H from "../../assets/img/h.png";
import A from "../../assets/img/a.png";
import C from "../../assets/img/c.png";
import K from "../../assets/img/k.png";
import S from "../../assets/img/s.png";

import SubTitle from "../SubTitle";
import SignUpButton from "../../assets/img/signupBtn.svg";
import JoinButtonSVG from "../../assets/img/JoinButtonMobile.svg";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const [transform, setTransform] = useState("scaleY(0)");

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      setOpenMenu(false);
    }
  }, [isSmallScreen]);

  const checkScreenSize = () => {
    setIsSmallScreen(matcher());
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    setTransform("scaleY(1)");
  }, []);

  return (
    <HeaderContainer backgroundImg={Background}>
      <DefaultHeadercontainer paddingLeft={isSmallScreen ? "2%" : "7%"}>
        <Headercontainer gap={isSmallScreen ? "4px" : "16px"}>
          <LogoLinksWrapper>
            <LogoWrapper>
              {!isSmallScreen && <Logo background={LogoHacks} />}
            </LogoWrapper>

            {!isSmallScreen && (
              <>
                <LinksContainer>
                  <HeaderLinkBtnInner
                    bottomBorder="3px solid #2DC669"
                    isActive={false}
                    defaultColor="white"
                    hoverBackgroundColor="rgb(42, 42, 45)"
                    hoverTextColor="#2DC669"
                    href="#hackatons"
                  >
                    Hackatons
                  </HeaderLinkBtnInner>
                  <HeaderLinkBtnInner
                    bottomBorder="3px solid #2DC669"
                    isActive={false}
                    defaultColor="white"
                    hoverBackgroundColor="rgb(42, 42, 45)"
                    hoverTextColor="#2DC669"
                    href="#about"
                  >
                    About
                  </HeaderLinkBtnInner>

                  <HeaderBtn
                    defaultColor="white"
                    hoverBackgroundColor="rgb(42, 42, 45)"
                    hoverTextColor="#2DC669"
                    href="https://forms.gle/Exqa4wAzTi1kSzbU9"
                    target="_blank"
                  >
                    Host a hackaton
                  </HeaderBtn>
                </LinksContainer>
              </>
            )}
          </LogoLinksWrapper>
          <LinksContainer>
            <Button backgroundImg={SignUpButton}>
              <ButtonText>Sign Up</ButtonText>
            </Button>
          </LinksContainer>

          {isSmallScreen && <Logo background={LogoHacks} />}
        </Headercontainer>
      </DefaultHeadercontainer>

      <MotoContainer>
        <Moto>
          <MotoLineWrapper>
            <MotoLine transform={transform} />
          </MotoLineWrapper>
          <MotoInnerWrapper>
            {!isSmallScreen && (
              <>
                <Promo>
                  <PromoInnerWrapper>
                    <CharacterWrapper>
                      <Character alt="Character" src={CharacterSVG} />
                    </CharacterWrapper>

                    <SloganWrapper>
                      <SloganPhrase>code</SloganPhrase>
                      <SloganPhrase>/</SloganPhrase>
                      <SloganPhrase>earn</SloganPhrase>
                    </SloganWrapper>
                    <WithText>with</WithText>
                  </PromoInnerWrapper>
                  <JoinButtonWrapper>
                    <JoinButton
                      backgroundImg={JoinButtonSVG}
                      href="https://t.me/OverhacksBot"
                    >
                      <SubTitle
                        fontSize="25px"
                        fontWeight="600"
                        textAlign="left"
                        color="#000"
                        text="Join Now"
                        cursor="pointer"
                      />
                    </JoinButton>
                  </JoinButtonWrapper>
                </Promo>

                <Name>
                  <div>
                    <LetterO src={O} alt="letter O" />
                  </div>
                  <div>
                    <LetterV src={V} alt="letter V" />
                  </div>
                  <div>
                    <LetterE src={E} alt="letter E" />
                  </div>
                  <div>
                    <Letter src={R} alt="letter R" />
                  </div>
                  <div>
                    <LetterH src={H} alt="letter H" />
                  </div>
                  <div>
                    <Letter src={A} alt="letter A" />
                  </div>
                  <div>
                    <Letter src={C} alt="letter C" />
                  </div>
                  <div>
                    <Letter src={K} alt="letter K" />
                  </div>
                  <div>
                    <LetterS src={S} alt="letter S" />
                  </div>
                </Name>
              </>
            )}

            {isSmallScreen && (
              <MobilePromoWrapper>
                <MobileRowWrapper>
                  <PartOfName>
                    <div>
                      <LetterO src={O} alt="letter O" />
                    </div>
                    <div>
                      <LetterV src={V} alt="letter V" />
                    </div>
                    <div>
                      <LetterE src={E} alt="letter E" />
                    </div>
                    <div>
                      <Letter src={R} alt="letter R" />
                    </div>
                  </PartOfName>
                  <MotoPhase>HACKATHON</MotoPhase>
                </MobileRowWrapper>
                <MobileRowWrapper>
                  <MotoPhase>platform</MotoPhase>
                  <PartOfName>
                    <div>
                      <LetterH src={H} alt="letter H" />
                    </div>
                    <div>
                      <Letter src={A} alt="letter A" />
                    </div>
                    <div>
                      <Letter src={C} alt="letter C" />
                    </div>
                    <div>
                      <Letter src={K} alt="letter K" />
                    </div>
                    <div>
                      <LetterS src={S} alt="letter S" />
                    </div>
                  </PartOfName>
                </MobileRowWrapper>
              </MobilePromoWrapper>
            )}

            <MotoRow>
              <UnderNameText>
                The world’s fastes growing Hackathons organasing platform
              </UnderNameText>
            </MotoRow>
          </MotoInnerWrapper>
        </Moto>
      </MotoContainer>
    </HeaderContainer>
  );
}

export default Header;
