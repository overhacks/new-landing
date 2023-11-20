import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 90%;
  padding-top: 52px;
  padding-bottom: 32px;
  border-top: solid 2px #22FA5F;

  padding-left: 5%;
  padding-right: 5%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  z-index: 2;


  background: radial-gradient(
    circle at 0% 0%,  
    rgba(34, 250, 95, 0.5) 10%, rgba(34, 250, 95, 0)
  );
`;



export const Container = styled.div`
    max-width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 82px;
    row-gap: 32px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const FooterBtn = styled.button`
    text-decoration: none;
    border: none;
    background-color: transparent;

    &:hover {
        opacity: 0.8;
    }
    
`
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