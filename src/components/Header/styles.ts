import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const OverhacksName = styled.h1`
  color: #22fa5f;
  font-family: PF Videotext Pro;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3px;
  width: max-content;
  display: flex;
  align-items: flex-end;

  @media (max-width: 576px) {
    font-size: 24px;
  }
  @media (min-width: 577px) {
    font-size: 24px;
  }
  @media (min-width: 769px) {
    font-size: 32px;
  }
  @media (min-width: 993px) {
    font-size: 38px;
  }
  @media (min-width: 1201px) {
    font-size: 38px;
  }
  @media (min-width: 1401px) {
    font-size: 38px;
  }
`;
export const DefaultHeadercontainer = styled.header`
  border-bottom: 2px solid rgb(44, 44, 48);

  padding-left: 7%;
  padding-right: 7%;
`;

export const Headercontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    height: 48px;
  }
  @media (min-width: 577px) {
    height: 48px;
  }
  @media (min-width: 769px) {
    height: 58px;
  }
  @media (min-width: 993px) {
    height: 68px;
  }
  @media (min-width: 1201px) {
    height: 68px;
  }
  @media (min-width: 1401px) {
    height: 68px;
  }
`;

export const LogoAndName = styled.div`
  display: flex;
  flex-direction: row;
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
    fwidth: 48px;
    height: 48px;
  }
`;

export const SearchImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const CancelImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & line {
    stroke: ${(props) => props.fill};
  }
  svg:hover line {
    stroke: ${(props) => props.fillHover};
  }

  @media (max-width: 576px) {
    height: 16px;
    width: 16px;
  }
  @media (min-width: 577px) {
    height: 16px;
    width: 16px;
  }
  @media (min-width: 769px) {
    height: 20px;
    width: 20px;
  }
  @media (min-width: 993px) {
    height: 20px;
    width: 20px;
  }
  @media (min-width: 1201px) {
    height: 20px;
    width: 20px;
  }
  @media (min-width: 1401px) {
    height: 20px;
    width: 20px;
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface LinkProps extends NavLinkProps {
  hoverTextColor: string;
  hoverBackgroundColor: string;
  defaultColor: string;
  isActive: boolean;
  bottomBorder: string;
}

export const HeaderLinkBtn: React.FC<LinkProps> = styled(Link)`
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
  color: ${(props) => props.defaultColor};
  border-bottom: ${(props) => (props.isActive ? props.bottomBorder : "none")};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverTextColor};
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

export const HeaderBtn = styled.button<{
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
  color: ${(props) => props.defaultColor};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverTextColor};
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

export const Input = styled.input<{
  placeholderColor: string;
  defaultColor: string;
}>`
  flex: 1;
  appearance: unset;
  outline: none;
  border: none;
  background: transparent;
  color: ${(props) => props.defaultColor};

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
  width: 100%;
  height: 57px;
  border-bottom: 1px solid #22fa5f;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  margin-top: 8px;
  margin-bottom: 14px;

  @media (max-width: 576px) {
    height: 37px;
  }
  @media (min-width: 577px) {
    height: 37px;
  }
  @media (min-width: 769px) {
    height: 47px;
  }
  @media (min-width: 993px) {
    height: 57px;
  }
  @media (min-width: 1201px) {
    height: 57px;
  }
  @media (min-width: 1401px) {
    height: 57px;
  }
`;
