import styled from "styled-components";

export const SectionWrapper = styled.section`
  width: 100%;
  padding-bottom: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
  padding-top: 16px;

  @media (max-width: 576px) {
    background-color: transparent;
  }
  @media (min-width: 577px) {
    background-color: transparent;
  }
  @media (min-width: 769px) {
    background-color: transparent;
  }
  @media (min-width: 993px) {
    background-color: #0E0E0E;
  }
  @media (min-width: 1201px) {
    background-color: #0E0E0E;
  }
  @media (min-width: 1401px) {
    background-color: #0E0E0E;
  }

`;

export const AboutHeader = styled.h1`
  font-family: "Hanson";
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;
  color: #E7FFB0;
  align-self: left;

  @media (max-width: 576px) {
    font-size: 45px;
  }
  @media (min-width: 577px) {
    font-size: 60px;
  }
  @media (min-width: 769px) {
    font-size: 65px;
  }
  @media (min-width: 993px) {
    font-size: 85px;
  }
  @media (min-width: 1201px) {
    font-size: 100px;
  }
  @media (min-width: 1401px) {
    font-size: 110px;
  }

`

export const Row = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 104px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 90%;
    gap: 56px;
  }
  @media (min-width: 577px) {
    width: 90%;
    gap: 56px;
  }
  @media (min-width: 769px) {
    width: 90%;
    gap: 56px;
  }
  @media (min-width: 993px) {
    width: 90%;
    gap: 0;
  }
  @media (min-width: 1201px) {
    width: 90%;
    gap: 0;
  }
  @media (min-width: 1401px) {
    width: 75%;
    gap: 0;
  }
`;

export const FirstAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 577px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 993px) {
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1201px) {
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    gap: 0;
  }

`;

export const SecondAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 577px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 993px) {
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1201px) {
    flex-direction: row;
    gap: 0;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    gap: 0;
  }
`;





export const ColumnText = styled.div`
  padding-bottom: 18px;
  padding-top: 18px;
  box-sizing: border-box;
  background-color: #0E0E0E;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    border: none;
    width: 100%;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 577px) {
    border: none;
    width: 100%;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 769px) {
    border: none;
    width: 100%;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 993px) {
    border: 2px solid #1A1A1A;
    width: 50%;
    border-radius: 0;
    box-shadow: none;
  }
  @media (min-width: 1201px) {
    border: 2px solid #1A1A1A;
    width: 50%;
    border-radius: 0;
    box-shadow: none;
  }
  @media (min-width: 1401px) {
    border: 2px solid #1A1A1A;
    width: 50%;
    border-radius: 0;
    box-shadow: none;
  }
  
`;

export const PhotoHorizontal = styled.div<{ imgSrc: string, backgroundSize?: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: ${props => props.backgroundSize || "contain"};
  aspect-ratio: 10 / 3.8;

  @media (max-width: 576px) {
    width: 100%;
    border-radius: 21px;
  }
  @media (min-width: 577px) {
    width: 100%;
    border-radius: 21px;
  }
  @media (min-width: 769px) {
    width: 100%;
    border-radius: 21px;
  }
  @media (min-width: 993px) {
    width: 50%;
    border-radius: 0;
  }
  @media (min-width: 1201px) {
    width: 50%;
    border-radius: 0;
  }
  @media (min-width: 1401px) {
    width: 50%;
    border-radius: 0;
  }
`;

export const ColumnTextLarge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid #1A1A1A; */
  @media (max-width: 576px) {
    width: 100%;
    gap: 56px;
  }
  @media (min-width: 577px) {
    width: 100%;
    gap: 56px;
  }
  @media (min-width: 769px) {
    width: 100%;
    gap: 56px;
  }
  @media (min-width: 993px) {
    width: 50%;
    gap: 0;
  }
  @media (min-width: 1201px) {
    width: 50%;
    gap: 0;
  }
  @media (min-width: 1401px) {
    width: 50%;
    gap: 0;
  }
`;

export const TextBlock = styled.div`
  height: 50%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 18px;
  padding-top: 18px;

  box-sizing: border-box;
  background-color: #0E0E0E;
  width: 100%;

  @media (max-width: 576px) {
    border: none;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 577px) {
    border: none;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 769px) {
    border: none;
    border-radius: 21px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset, 0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset, 0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 993px) {
    border: 2px solid #1A1A1A;
    border-radius: 0;
    box-shadow: none;
  }
  @media (min-width: 1201px) {
    border: 2px solid #1A1A1A;
    border-radius: 0;
    box-shadow: none;
  }
  @media (min-width: 1401px) {
    border: 2px solid #1A1A1A;
    border-radius: 0;
    box-shadow: none;
  }
`;
export const AboutText = styled.h2`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #C9C5BA;
  text-align: left;
  font-size: 25px;
  max-width: 90%;
  align-self: center;
`



export const AboutTextB = styled.b`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #E7FFB0;
  text-align: left;
  font-size: 25px;
`

export const TitleWrapper = styled.div`
  width: 90%;
`

export const PhotoVertical = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 10 / 9;

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
    width: 50%;
  }
  @media (min-width: 1201px) {
    width: 50%;
  }
  @media (min-width: 1401px) {
    width: 50%;
  }
`;

export const Spider = styled.img`
  margin-top: 110px;
  background-color: #0E0E0E;

  @media (max-width: 576px) {
    width: 90%;
  }
  @media (min-width: 577px) {
    width: 90%;
  }
  @media (min-width: 769px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 90%;
  }
  @media (min-width: 1201px) {
    width: 90%;
  }
  @media (min-width: 1401px) {
    width: 75%;
  }
`;