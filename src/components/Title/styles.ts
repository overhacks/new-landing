import styled from "styled-components";

interface Props {
  marginTop?: string; 
  marginBottom?: string;
  marginRight?: string;
  color?: string;
  hoverColor?: string;
  fontSize?: string;
  lineHeight?: string;
  maxWidth?: string;
  overflow?: string;
  whiteSpace?: string;
  textOverflow?: string;
  alignSelf?: string;
}

export const Title = styled.h1<Props>`
    margin-top: ${props => props.marginTop || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-right: ${props => props.marginRight || '0'};
    color: ${props => props.color};
    transition: all ease 35ms;
    line-height: ${props => props.lineHeight || "normal"};
    
    font-family: "Hanson";
    max-width: ${props => props.maxWidth};
    overflow: ${props => props.overflow};
    white-space: ${props => props.whiteSpace};
    text-overflow:${props => props.textOverflow};
    align-self: ${props => props.alignSelf};
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
      &:hover {
    color: ${props => props.hoverColor};
  }
      @media (max-width: 576px)
    {
     font-size: ${props => props.fontSize || "16px"};
   }
      @media (min-width: 577px)
   {
      font-size: ${props => props.fontSize || "16px"};
   }
      @media (min-width: 769px)
   {
     font-size: ${props => props.fontSize || "20px"};
   }
      @media (min-width: 993px)
   {
     font-size: ${props => props.fontSize || "20px"};
   }
      @media (min-width: 1201px)
   {
     font-size: ${props => props.fontSize || "20px"};
   }
   @media (min-width: 1401px)
   {
     font-size: ${props => props.fontSize || "20px"};
     }
   
`;
