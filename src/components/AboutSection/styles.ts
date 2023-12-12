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
    background-color: #0e0e0e;
  }
  @media (min-width: 1201px) {
    background-color: #0e0e0e;
  }
  @media (min-width: 1401px) {
    background-color: #0e0e0e;
  }
`;

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
  width: 90%;
`;

export const FirstAboutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 1201px) {
    flex-direction: column;
    gap: 56px;
  }
  @media (min-width: 1401px) {
    flex-direction: column;
    gap: 56px;
  }
`;

export const ColumnText = styled.div`
  padding-bottom: 18px;
  padding-top: 18px;
  box-sizing: border-box;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
  width: 100%;
  border-radius: 21px;
  box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset,
    0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset,
    0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
`;

export const PhotoHorizontal = styled.div<{
  imgSrc: string;
  backgroundSize?: string;
}>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize || "cover"};
  aspect-ratio: 10 / 3.8;
  width: 100%;
  border-radius: 21px;
`;

export const ColumnTextLarge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
`;

export const LineCenter = styled.div<{ transform: string }>`
  width: 1.5px;
  height: 201px;
  opacity: 0.4;
  /* background: rgba(34, 56, 250, 0.72); */
  background: linear-gradient(to bottom, #111336, #2622fa, #111336);

  transform: ${(props) => props.transform};
  transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const CenteredLine = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

`;
export const AboutText = styled.h2`
  text-align: left;
  max-width: 90%;
  align-self: center;

  color: #d9dddb;

  font-family: PF Videotext Pro;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AboutTextB = styled.b`
  color: #6100ff;
  font-family: PF Videotext Pro;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleWrapper = styled.div`
  width: 90%;
`;

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
  /* background-color: #0E0E0E; */

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
