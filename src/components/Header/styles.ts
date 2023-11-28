import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const DefaultHeadercontainer = styled.header<{ paddingLeft: string }>`
  /* border-bottom: 2px solid rgb(44, 44, 48); */

  padding-left: ${(props) => props.paddingLeft};
  padding-right: 7%;
  width: 90%;
`;

export const HeaderContainer = styled.section<{ backgroundImg: any }>`
  background-image: url(${(props) => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  z-index: 1;
  background-color: rgb(14, 14, 14);

  display: flex;
  flex-direction: column;
  gap: 5%;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const MotoContainer = styled.div<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

`;

export const Moto = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const Promo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
`;

export const MotoRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
    width: 45.2px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 56.5px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 75.3px;
    height: 61.3px;
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
    width: 30px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 37.5px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 50px;
    height: 61.3px;
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
    width: 52.8px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 66px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 88px;
    height: 61.3px;
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
    width: 59.8px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 63.5px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 84px;
    height: 61.3px;
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
    width: 46.8px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 58.5px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 78px;
    height: 61.3px;
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
    width: 46.8px;
    height: 36.8px;
  }
  @media (min-width: 769px) {
    width: 58.5px;
    height: 46px;
  }
  @media (min-width: 993px) {
    width: 78px;
    height: 61.3px;
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
  font-family: "Hanson";
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

export const JoinButton = styled.a<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 7;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
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
  }
`;


export const Headercontainer = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex-wrap: wrap;

  @media (max-width: 576px) {
    /* height: 48px; */
    padding-top: 16px;
    padding-bottom: 16px;
  }
  @media (min-width: 577px) {
    /* height: 48px; */
    padding-top: 24px;
    padding-bottom: 24px;
  }
  @media (min-width: 769px) {
    /* height: 58px; */
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (min-width: 993px) {
    /* height: 68px; */
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (min-width: 1201px) {
    /* height: 68px; */
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media (min-width: 1401px) {
    /* height: 68px; */
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;

export const LogoAndName = styled.div`
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
    width: 24px;
    height: 24px;
  }
  @media (min-width: 577px) {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 769px) {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 993px) {
    width: 48px;
    height: 48px;
  }
  @media (min-width: 1201px) {
    width: 48px;
    height: 48px;
  }
  @media (min-width: 1401px) {
    width: 66px;
    height: 66px;
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
  gap: 42px;
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
  font-family: "PF Videotext Pro";
  color: ${(props) => props.defaultColor};
  border-bottom: ${(props) => (props.isActive ? props.bottomBorder : "none")};

  &:hover {
    /* background-color: ${(props) => props.hoverBackgroundColor}; */
    color: ${(props) => props.hoverTextColor};
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    font-size: 25px;
  }
  @media (min-width: 1401px) {
    font-size: 25px;
  }
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
  font-family: "PF Videotext Pro";
  color: ${(props) => props.defaultColor};

  &:hover {
    /* background-color: ${(props) => props.hoverBackgroundColor}; */
    color: ${(props) => props.hoverTextColor};
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    font-size: 25px;
  }
  @media (min-width: 1401px) {
    font-size: 25px;
  }
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
