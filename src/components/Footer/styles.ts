import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 90%;
  padding-top: 52px;
  padding-bottom: 94px;
  border-top: solid 2px #0e5426;

  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  flex-direction: column;
  gap: 60px;

  position: relative;
  z-index: 3;

  /* background: radial-gradient(
    circle at 0% 0%,  
    rgba(34, 250, 95, 0.5) 5%, rgba(34, 250, 95, 0)
  ); */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at left top,
      rgba(34, 250, 95, 0.4),
      rgba(34, 250, 95, 0) 50%
    );
    z-index: 2;
    /* backdrop-filter: blur(10px); */
  }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #0e0e0e;
  z-index: 1;
`;

export const IconsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

export const IconWrapper = styled.a`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
`


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 82px;
  row-gap: 32px;

  @media (max-width: 576px) {
    max-width: 90%;
    width: 90%;
    justify-content: space-between;
  }
  @media (min-width: 577px) {
    max-width: 90%;
    width: 90%;
    justify-content: space-between;
  }
  @media (min-width: 769px) {
    max-width: 90%;
    width: 90%;
    justify-content: space-between;

  }
  @media (min-width: 993px) {
    max-width: 70%;
    width: auto;
    justify-content: flex-end;
  }
  @media (min-width: 1201px) {
    max-width: 70%;
    width: auto;
    justify-content: flex-end;
  }
  @media (min-width: 1401px) {
    max-width: 70%;
    width: auto;
    justify-content: flex-end;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 4;
`;
export const FooterBtn = styled.a`
  text-decoration: none;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
  }
`;
export const Logo = styled.div<{ background: any }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 4;

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
    width: 48px;
    height: 48px;
  }
`;
