import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const DefaultHeadercontainer = styled.header<{ paddingLeft: string }>`
  /* border-bottom: 2px solid rgb(44, 44, 48); */

  padding-left: ${(props) => props.paddingLeft};
  padding-right: 7%;
  width: 90%;
`;

export const HeaderContainer = styled.section<{ backgroundImg: any }>`
  width: 100%;
  height: 100vh;

  background-image: url(${(props) => props.backgroundImg});
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;

  z-index: 1;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  gap: 5%;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const MotoContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 80%;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Moto = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const MotoInnerWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
`;

export const MotoLineWrapper = styled.div`
  height: 100%;
  width: 7%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UnderNameText = styled.p`
  color: #29af5e;

  font-family: Orbitron;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.437px;
  letter-spacing: 2.43px;
`;

const drawLineAnimation = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const MotoLine = styled.div<{ transform: string }>`
  height: 100%;
  width: 1.5px;
  opacity: 0.4;
  background: linear-gradient(to bottom, rgba(34, 250, 95, 0), #22fa5f);

  /* transform: scaleY(0); */
  /* animation: ${drawLineAnimation} 1s ease-out; */
  transform: ${(props) => props.transform};

  transition: transform 2.5s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const Promo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 18px;
  flex-wrap: wrap;
`;

export const PromoInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const SloganWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-left: 18px;
`;

export const SloganPhrase = styled.p`
  color: #2dc669;
  font-family: Orbitron;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 56.365px;
  letter-spacing: 12.5px;
`;
export const WithText = styled.p`
  color: #2dc669;
  font-family: Orbitron;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 22.546px;
  letter-spacing: 0.6px;

  margin-left: 26px;
  margin-bottom: 6px;
`;

export const MotoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

export const MobilePromoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;
  margin-bottom: 60px;
`;
export const MobileRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PartOfName = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const JoinButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    width: 100%;
    height: 100px;
  }
  @media (min-width: 577px) {
    width: 100%;
    height: 100px;
  }
  @media (min-width: 769px) {
    width: 100%;
    height: 100px;
  }
  @media (min-width: 993px) {
    width: 231px;
    height: 42px;
  }
  @media (min-width: 1201px) {
    width: 231px;
    height: 42px;
  }
  @media (min-width: 1401px) {
    width: 231px;
    height: 42px;
  }
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const CharacterWrapper = styled.div`
  position: relative;
  top: 10px;
  z-index: 4;

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: radial-gradient(
      63.11% 63.11% at 50.82% 71.31%,
      rgba(34, 250, 95, 0) 0%,
      rgba(34, 250, 95, 0.46) 100%
    );

    filter: blur(40px);
    width: 61px;
    height: 61px;
  }

  @media (max-width: 576px) {
    width: 133px;
    height: 159px;
  }
  @media (min-width: 577px) {
    width: 133px;
    height: 159px;
  }
  @media (min-width: 769px) {
    width: 133px;
    height: 159px;
  }
  @media (min-width: 993px) {
    width: 133px;
    height: 159px;
  }
  @media (min-width: 1201px) {
    width: 133px;
    height: 159px;
  }
  @media (min-width: 1401px) {
    width: 133px;
    height: 159px;
  }
`;

export const Character = styled.img`
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  z-index: 5;

  object-fit: contain;
`;

export const Letter = styled.img`
  border: none;
  background-color: transparent;

  object-fit: contain;

  @media (max-width: 576px) {
    width: 30.13px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 75.3px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 90.4px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 90.4px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 90.4px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 113px;
    height: 92px;
  }
`;

export const LetterO = styled.img`
  border: none;
  background-color: transparent;

  object-fit: contain;
  object-position: 0 50%;

  @media (max-width: 576px) {
    width: 20px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 50px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 60px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 60px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 60px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 75px;
    height: 92px;
  }
`;

export const LetterV = styled.img`
  object-fit: contain;
  border: none;
  background-color: transparent;

  @media (max-width: 576px) {
    width: 35.2px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 88px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 105.6px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 105.6px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 105.6px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 132px;
    height: 92px;
  }
`;

export const LetterE = styled.img`
  object-fit: contain;
  border: none;
  background-color: transparent;

  @media (max-width: 576px) {
    width: 39.87px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 84px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 101.6px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 101.6px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 101.6px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 127px;
    height: 92px;
  }
`;

export const LetterH = styled.img`
  object-fit: contain;
  border: none;
  background-color: transparent;

  @media (max-width: 576px) {
    width: 31.2px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 78px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 117px;
    height: 92px;
  }
`;

export const LetterS = styled.img`
  object-fit: contain;
  border: none;
  background-color: transparent;

  @media (max-width: 576px) {
    width: 31.2px;
    height: 24.53px;
  }
  @media (min-width: 577px) {
    width: 78px;
    height: 61.3px;
  }
  @media (min-width: 769px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 993px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 1201px) {
    width: 93.6px;
    height: 73.6px;
  }
  @media (min-width: 1401px) {
    width: 117px;
    height: 92px;
  }
`;

export const MotoPhase = styled.p`
  color: #3d7352;
  font-family: "Orbitron";
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
  @media (min-width: 577px) {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 24px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
  }
  @media (min-width: 1201px) {
    font-size: 30px;
  }
  @media (min-width: 1401px) {
    font-size: 30px;
  }
`;

export const Button = styled.button<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.15s ease-in-out;

  @media (max-width: 576px) {
    padding: 5px 44px 5px 44px;
  }
  @media (min-width: 577px) {
    padding: 5px 44px 5px 44px;
  }
  @media (min-width: 769px) {
    padding: 5px 44px 5px 44px;
  }
  @media (min-width: 993px) {
    padding: 5px 44px 5px 44px;
  }
  @media (min-width: 1201px) {
    padding: 5px 44px 5px 44px;
  }
  @media (min-width: 1401px) {
    padding: 5px 44px 5px 44px;
  }
`;

export const ButtonText = styled.div`
  color: #dddbdb;

  font-family: Orbitron;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.45px;
`;

export const LogoLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 78px;
  align-items: center;
  justify-content: flex-start;
`;
export const JoinText = styled.p`
  color: #dddbdb;
  font-family: Orbitron;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.45px;
  cursor: pointer;
`;

export const JoinButton = styled.a<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  transition: opacity 0.15s ease-in-out;

  /* @media (max-width: 576px) {
    width: 231px;
  }
  @media (min-width: 577px) {
    width: 231px;
  }
  @media (min-width: 769px) {
    width: 231px;
  }
  @media (min-width: 993px) {
    width: 231px;
  }
  @media (min-width: 1201px) {
    width: 231px;
  }
  @media (min-width: 1401px) {
    width: 280px;
  } */
`;

export const Headercontainer = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;

  @media (max-width: 576px) {
    padding-top: 16px;
    padding-bottom: 16px;
    justify-content: flex-start;
  }
  @media (min-width: 577px) {
    padding-top: 24px;
    padding-bottom: 24px;
    justify-content: flex-start;
  }
  @media (min-width: 769px) {
    /* height: 58px; */
    padding-top: 32px;
    padding-bottom: 32px;
    justify-content: flex-start;
  }
  @media (min-width: 993px) {
    padding-top: 50px;
    padding-bottom: 32px;
    justify-content: space-between;
  }
  @media (min-width: 1201px) {
    padding-top: 50px;
    padding-bottom: 32px;
    justify-content: space-between;
  }
  @media (min-width: 1401px) {
    padding-top: 50px;
    padding-bottom: 32px;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Logo = styled.div<{ background: any }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 577px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 769px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 993px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1201px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1401px) {
    width: 30px;
    height: 30px;
  }
`;

export const SearchImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    fill: ${(props) => props.fill};
  }
  :hover {
    fill: ${(props) => props.fillHover};
  }

  @media (max-width: 576px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 577px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 769px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 993px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 1201px) {
    width: 16px;
    height: 16px;
  }
  @media (min-width: 1401px) {
    width: 16px;
    height: 16px;
  }
`;

export const MenuBurgerImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  & svg {
    fill: ${(props) => props.fill};
  }
  :hover {
    fill: ${(props) => props.fillHover};
  }

  @media (max-width: 576px) {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 577px) {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 769px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 993px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1201px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1401px) {
    width: 30px;
    height: 30px;
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 82px;
`;

interface LinkProps extends NavLinkProps {
  hoverTextColor: string;
  hoverBackgroundColor: string;
  defaultColor: string;
  isActive: boolean;
  bottomBorder: string;
}

export const HeaderLinkBtnInner = styled.a<{
  hoverTextColor: string;
  hoverBackgroundColor: string;
  defaultColor: string;
  isActive: boolean;
  bottomBorder: string;
}>`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
  background-color: transparent;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  font-family: Orbitron;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;

  color: ${(props) => props.defaultColor};
  border-bottom: ${(props) => (props.isActive ? props.bottomBorder : "none")};

  &:hover {
    /* background-color: ${(props) => props.hoverBackgroundColor}; */
    color: ${(props) => props.hoverTextColor};
  }
  transition: color 0.15s ease-in-out;
`;

export const HeaderBtn = styled.a<{
  hoverTextColor: string;
  hoverBackgroundColor: string;
  defaultColor: string;
}>`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
  background-color: transparent;
  height: 100%;
  padding-left: 12px;
  padding-right: 12px;
  font-family: Orbitron;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => props.defaultColor};

  &:hover {
    /* background-color: ${(props) => props.hoverBackgroundColor}; */
    color: ${(props) => props.hoverTextColor};
  }
  transition: color 0.15s ease-in-out;
`;

export const Input = styled.input<{
  placeholderColor: string;
  defaultColor: string;
}>`
  flex: 1;
  appearance: unset;
  outline: none;
  border: none;
  background: transparent;
  font-family: "PF Videotext Pro";
  color: ${(props) => props.defaultColor};

  &::placeholder {
    color: ${(props) => props.placeholderColor};
  }

  input[type="search"]:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  input[type="search"]::placeholder {
    color: ${(props) => props.placeholder};
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
    opacity: 0;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 15px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    font-size: 20px;
  }
  @media (min-width: 1401px) {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid rgba(86, 223, 83, 0.53);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 21px 9px 25px;

  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 577px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 100%;
  }
  @media (min-width: 993px) {
    width: 32%;
  }
  @media (min-width: 1201px) {
    width: 32%;
  }
  @media (min-width: 1401px) {
    width: 32%;
  }
`;
