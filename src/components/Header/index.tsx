import React, { useEffect, useState } from "react";
import {
  Headercontainer,
  Logo,
  LogoAndName,
  OverhacksName,
  SearchImg,
  DefaultHeadercontainer,
  Input,
  InputContainer,
  CancelImg,
  LinksContainer,
  HeaderLinkBtn,
  HeaderBtn,
  MenuBurgerImg,
} from "./styles";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import LogoHacks from "../../assets/img/LOGOHACK.png";
import { routes } from "../../constants/routes";
import { useLocation } from "react-router-dom";

export const screens: {
  title: string;
  screenName: string;
  url: string;
}[] = [
  {
    title: "Hackatons",
    screenName: "Hackatons",
    url: routes.hackatons,
  },
  {
    title: "About",
    screenName: "About",
    url: routes.about,
  },
];

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const location = useLocation();

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
    <DefaultHeadercontainer paddingLeft={isSmallScreen ? "2%" : "7%"}>
      {openSearch === false && (
        <Headercontainer gap={isSmallScreen ? "4px" : "16px"}>
          <LogoAndName>
            {isSmallScreen && <MenuBurgerImg fill="#22fa5f" fillHover="#0b8c30">
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
            </MenuBurgerImg>}

            <Logo background={LogoHacks} />
            <OverhacksName>Overhacks</OverhacksName>
          </LogoAndName>

          {!isSmallScreen && (
            <>
              <LinksContainer>
                {screens.map((screen) => (
                  <HeaderLinkBtn
                    to={routes.home + screen.url}
                    key={screen.screenName}
                    bottomBorder="3px solid #22fa5f"
                    isActive={location.pathname === routes.home + screen.url}
                    defaultColor="white"
                    hoverBackgroundColor="rgb(42, 42, 45)"
                    hoverTextColor="#22fa5f"
                  >
                    {screen.title}
                  </HeaderLinkBtn>
                ))}
              </LinksContainer>

              <LinksContainer>
                <HeaderBtn
                  defaultColor="white"
                  hoverBackgroundColor="rgb(42, 42, 45)"
                  hoverTextColor="#22fa5f"
                >
                  Host a hackaton
                </HeaderBtn>
                <HeaderBtn
                  defaultColor="white"
                  hoverBackgroundColor="rgb(42, 42, 45)"
                  hoverTextColor="#22fa5f"
                >
                  Sign Up
                </HeaderBtn>
              </LinksContainer>
            </>
          )}

          <SearchImg
            fill="#22fa5f"
            fillHover="#0b8c30"
            onClick={() => {
              setOpenSearch(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>{" "}
          </SearchImg>
        </Headercontainer>
      )}

      {openSearch && (
        <InputContainer>
          <SearchImg
            fill="#22fa5f"
            fillHover="#0b8c30"
            onClick={() => {
              console.log("search");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>{" "}
          </SearchImg>
          <Input
            placeholderColor="rgba(170, 170, 170, 1)"
            defaultColor="white"
            type="search"
            name="search"
            placeholder="Search hackathons..."
          />

          <CancelImg
            fill="#22fa5f"
            fillHover="#0b8c30"
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            <svg viewBox="0 0 15 15">
              <line x1="0" y1="0" x2="15" y2="15" stroke-width="2" />
              <line x1="15" y1="0" x2="0" y2="15" stroke-width="2" />
            </svg>
          </CancelImg>
        </InputContainer>
      )}
    </DefaultHeadercontainer>
  );
}

export default Header;
