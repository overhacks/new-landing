import { Link } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding-bottom: 32px;
`;

export const FooterBoofer = styled.div`
  height: 75px;
  width: 100%;
  background-color: rgba(54, 249, 109, 0.341);

  border-top: 1px solid rgb(44, 44, 48);
  border-bottom: 1px solid rgb(44, 44, 48);
`;

export const Container = styled.div<{ columns: string, }>`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.columns};
    grid-template-rows: auto;
    gap: 12px;
    row-gap: 32px;
    padding-right: 16px;
    padding-left: 16px;

    padding-top: 16px;
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
