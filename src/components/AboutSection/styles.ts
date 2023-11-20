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
  justify-content: flex-start;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const RowAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const ColumnText = styled.div`
  padding-bottom: 18px;
  /* border: 2px solid #1A1A1A; */
  @media (max-width: 576px) {
    width: 100%;
    padding-left: 0;
    padding-top: 18px;
  }
  @media (min-width: 577px) {
    width: 100%;
    padding-left: 0;
    padding-top: 18px;
  }
  @media (min-width: 769px) {
    width: 100%;
    padding-left: 0;
    padding-top: 18px;
  }
  @media (min-width: 993px) {
    width: 47.5%;
    padding-left: 2.5%;
    padding-top: 0;
  }
  @media (min-width: 1201px) {
    width: 47.5%;
    padding-left: 2.5%;
    padding-top: 0;
  }
  @media (min-width: 1401px) {
    width: 47.5%;
    padding-left: 2.5%;
    padding-top: 0;
  }
`;

export const PhotoHorizontal = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 10 / 3.8;

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

export const ColumnTextLarge = styled.div`
  padding-right: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: 2px solid #1A1A1A; */
  @media (max-width: 576px) {
    width: 97.5%;
  }
  @media (min-width: 577px) {
    width: 97.5%;
  }
  @media (min-width: 769px) {
    width: 97.5%;
  }
  @media (min-width: 993px) {
    width: 47.5%;
  }
  @media (min-width: 1201px) {
    width: 47.5%;
  }
  @media (min-width: 1401px) {
    width: 47.5%;
  }
`;

export const TextBlock = styled.div`
  height: 50%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PhotoVertical = styled.a<{ imgSrc: string }>`
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