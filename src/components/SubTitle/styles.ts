import styled from "styled-components";

interface Props {
  marginTop: string; 
  marginBottom: string;
  marginRight: string;
  color: string;
  hoverColor: string;
  fontSize: string;
  lineHeight: string;
  cursor: string;
  textAlign: string;
  maxWidth: string;
  overflow: string;
  whiteSpace: string;
  textOverflow: string;
  alignSelf: string;
  width: string;
  fontWeight: string;
  textWrap: string;
}

export const Text = styled.h1<any>`
    margin-top: ${props => props.marginTop || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-right: ${props => props.marginRight || '0'};
    color: ${props => props.color};
    line-height: ${props => props.lineHeight || "normal"};
    cursor: ${props => props.cursor || "auto"};
    text-align: ${props => props.textAlign || "left"};
    
    font-family: "PF Videotext Pro";
    
    font-weight: ${props => props.fontWeight || "400px"};
    letter-spacing: 0em;

    max-width: ${props => props.maxWidth};
    /* width: ${props => props.width}; */
    overflow: ${props => props.overflow};
    white-space: ${props => props.whiteSpace};
    text-overflow:${props => props.textOverflow};
    text-wrap: ${props => props.textWrap};
    align-self: ${props => props.alignSelf};

    &:hover {
    color: ${props => props.hoverColor};
  }
  @media (max-width: 576px)
  {
    font-size: ${props => props.fontSize || "15px"}
  }
  @media (min-width: 577px)
  {
    font-size: ${props => props.fontSize || "15px"}
  }
  @media (min-width: 769px)
  {
    font-size: ${props => props.fontSize || "15px"}
  }
  @media (min-width: 993px)
  {
    font-size: ${props => props.fontSize || "15px"}
  }
  @media (min-width: 1201px)
  {
    font-size: ${props => props.fontSize || "15px"}
  }
  @media (min-width: 1401px)
  {
    font-size: ${props => props.fontSize || "15px"}
    }
`;