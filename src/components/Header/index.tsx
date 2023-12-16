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
  JoinText,
  MobileMotoColumn,
  MobileMotoRow,
  PartOfNameFull,
  JoinBtnWrapperMobile,
  JoinButtonMobile,
  BurgerBtn,
  BurgerMenu,
  MobileButton,
  MenuButtonsContainer,
  MobilebtnText,
  MobileButtonLinkInner,
} from "./styles";
import LogoHacks from "../../assets/img/LOGOHACK.png";
import { routes } from "../../constants/routes";
import Background from "../../assets/img/radiance.png";
import CharacterImg from "../../assets/img/SoftwareEngineer.png";
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
import JoinButtonSVG from "../../assets/img/JoinButton.svg";
import JoinButtonSVGMobile from "../../assets/img/JoinButtonMobile.svg";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Header() {
  const phrases = ["code", "manage", "design"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setPhraseIndex(
            (prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length
          );
          setText("");
        }, 2000); // Delay before erasing
      }
    }, 300); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [charIndex, phraseIndex]);

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
      <DefaultHeadercontainer>
        <Headercontainer gap={isSmallScreen ? "4px" : "16px"}>
          {!isSmallScreen && (
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
          )}
          {!isSmallScreen && (
            <LinksContainer>
              <Button backgroundImg={SignUpButton}>
                <ButtonText>Sign Up</ButtonText>
              </Button>
            </LinksContainer>
          )}

          {isSmallScreen && <Logo background={LogoHacks} />}

          {isSmallScreen && (
            <BurgerBtn onClick={() => setOpenMenu(!openMenu)}>
              {!openMenu && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 34 19"
                  fill="none"
                >
                  <line
                    x1="1.5"
                    y1="1.5"
                    x2="31.5151"
                    y2="1.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <line
                    x1="1.5"
                    y1="9.5"
                    x2="31.5"
                    y2="9.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <line
                    x1="1.5"
                    y1="17.5"
                    x2="31.5"
                    y2="17.5"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              )}
              {openMenu && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 26 24"
                  fill="none"
                >
                  <path
                    d="M2 2L13 12M24 22L13 12M13 12L24 2M13 12L2 22"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              )}
            </BurgerBtn>
          )}

          {openMenu && (
            <BurgerMenu>
              <MenuButtonsContainer>
                <MobileButtonLinkInner href="#hackatons">
                  <MobilebtnText>Hackathons</MobilebtnText>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                  >
                    <path
                      d="M1.00007 11L6.71436 6L1.00007 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </MobileButtonLinkInner>
                <MobileButtonLinkInner href="#about">
                  <MobilebtnText>About</MobilebtnText>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                  >
                    <path
                      d="M1.00007 11L6.71436 6L1.00007 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </MobileButtonLinkInner>
                <MobileButtonLinkInner
                  href="https://forms.gle/Exqa4wAzTi1kSzbU9"
                  target="_blank"
                >
                  <MobilebtnText>Start Hackathon</MobilebtnText>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                  >
                    <path
                      d="M1.00007 11L6.71436 6L1.00007 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </MobileButtonLinkInner>
              </MenuButtonsContainer>
            </BurgerMenu>
          )}
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
                      <Character alt="Character" src={CharacterImg} />
                    </CharacterWrapper>

                    <SloganWrapper>
                      <SloganPhrase>{text}</SloganPhrase>
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
                      <JoinText>Join Now</JoinText>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="9"
                        viewBox="0 0 6 9"
                        fill="none"
                      >
                        <path
                          d="M0.981445 8.12122L4.98145 4.62122L0.981445 1.12122"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
                  <MobileMotoColumn>
                    <MobileMotoRow>
                      <SloganPhrase>{text}</SloganPhrase>
                      <SloganPhrase>/</SloganPhrase>
                    </MobileMotoRow>
                    <MobileMotoRow>
                      <SloganPhrase>earn</SloganPhrase>
                      <WithText>with</WithText>
                    </MobileMotoRow>
                  </MobileMotoColumn>
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
                </MobileRowWrapper>
                <MobileRowWrapper>
                  <PartOfNameFull>
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
                  </PartOfNameFull>
                </MobileRowWrapper>
              </MobilePromoWrapper>
            )}

            <MotoRow>
              <UnderNameText>The</UnderNameText>
              <UnderNameText>world’s</UnderNameText>
              <UnderNameText>fastes</UnderNameText>
              <UnderNameText>growing</UnderNameText>
              <UnderNameText>Hackathons</UnderNameText>
              <UnderNameText>tool</UnderNameText>
              <UnderNameText>kit</UnderNameText>
            </MotoRow>

            {isSmallScreen && (
              <JoinBtnWrapperMobile>
                <JoinButtonMobile
                  backgroundImg={JoinButtonSVGMobile}
                  href="https://t.me/OverhacksBot"
                >
                  <JoinText>Join Now</JoinText>
                </JoinButtonMobile>
              </JoinBtnWrapperMobile>
            )}
          </MotoInnerWrapper>
        </Moto>
      </MotoContainer>
    </HeaderContainer>
  );
}

export default Header;
