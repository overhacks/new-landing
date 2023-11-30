import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Headercontainer,
  Logo,
  LogoAndName,
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
} from "./styles";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import LogoHacks from "../../assets/img/LOGOHACK.png";
import { routes } from "../../constants/routes";
import Background from "../../assets/img/backgroundHeader1.png";
import BackgroundMoto from "../../assets/img/moto.svg";
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
import JoinButtonPng from "../../assets/img/JoinButton.png";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  useEffect(() => {
    AOS.init({
      duration : 200,
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

  return (
    <HeaderContainer backgroundImg={Background}>
      <DefaultHeadercontainer paddingLeft={isSmallScreen ? "2%" : "7%"}>
        <Headercontainer gap={isSmallScreen ? "4px" : "16px"}>
          <LogoAndName>
            {isSmallScreen && (
              <MenuBurgerImg
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                fill="#22fa5f"
                fillHover="#0b8c30"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                >
                  <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
              </MenuBurgerImg>
            )}

            <Logo background={LogoHacks} />
          </LogoAndName>

          {!isSmallScreen && (
            <>
              <LinksContainer>
                <HeaderLinkBtnInner
                  bottomBorder="3px solid #22fa5f"
                  isActive={false}
                  defaultColor="white"
                  hoverBackgroundColor="rgb(42, 42, 45)"
                  hoverTextColor="#22fa5f"
                  href="#hackatons"
                >
                  Hackatons
                </HeaderLinkBtnInner>
                <HeaderLinkBtnInner
                  bottomBorder="3px solid #22fa5f"
                  isActive={false}
                  defaultColor="white"
                  hoverBackgroundColor="rgb(42, 42, 45)"
                  hoverTextColor="#22fa5f"
                  href="#about"
                >
                  About
                </HeaderLinkBtnInner>
              </LinksContainer>

              <LinksContainer>
                <HeaderBtn
                  defaultColor="white"
                  hoverBackgroundColor="rgb(42, 42, 45)"
                  hoverTextColor="#22fa5f"
                  href="https://forms.gle/Exqa4wAzTi1kSzbU9"
                  target="_blank"
                >
                  Host a hackaton
                </HeaderBtn>
                <Button backgroundImg={SignUpButton}>
                  <SubTitle
                    fontSize="25px"
                    fontWeight="600"
                    textAlign="left"
                    color="#000"
                    text="Sign Up"
                    marginBottom="3px"
                  />
                </Button>
              </LinksContainer>
            </>
          )}
        </Headercontainer>
      </DefaultHeadercontainer>

      <MotoContainer backgroundImg={BackgroundMoto}>
        <Moto>
          <Promo>
            <MotoPhase>Unleash</MotoPhase>
            <MotoPhase>your</MotoPhase>
            <MotoPhase>potential</MotoPhase>
            <MotoPhase>with</MotoPhase>
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
          <MotoRow>
            <InputContainer>
              <Input
                placeholderColor="rgba(61, 115, 82, 0.41)"
                defaultColor="rgba(86, 223, 83, 0.53)"
                type="search"
                name="search"
                placeholder="Search hackathons..."
              />
              <SearchImg
                fill="#5C8C40"
                fillHover="#0e9f37"
                onClick={() => {
                  console.log("search");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="16"
                  height="16"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>{" "}
              </SearchImg>
            </InputContainer>

            <JoinButtonWrapper>
              <JoinButton
                backgroundImg={JoinButtonPng}
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
          </MotoRow>
        </Moto>
      </MotoContainer>
    </HeaderContainer>
  );
}

export default Header;
