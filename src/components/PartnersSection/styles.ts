import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const PartnersSectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 576px) {
    background-color: #0e0e0e;
  }
  @media (min-width: 577px) {
    background-color: #0e0e0e;
  }
  @media (min-width: 769px) {
    background-color: #0e0e0e;
  }
  @media (min-width: 993px) {
    background-color: transparent;
  }
  @media (min-width: 1201px) {
    background-color: transparent;
  }
  @media (min-width: 1401px) {
    background-color: transparent;
  }
`;

export const RowContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 32px;
  margin-bottom: 144px;
`;

export const RowContainerBetween = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 18px;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 576px) {
    margin-top: 0;
  }
  @media (min-width: 577px) {
    margin-top: 0;
  }
  @media (min-width: 769px) {
    margin-top: 0;
  }
  @media (min-width: 993px) {
    margin-top: 160px;
  }
  @media (min-width: 1201px) {
    margin-top: 160px;
  }
  @media (min-width: 1401px) {
    margin-top: 160px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 100px;
    padding-top: 41px;
    margin-bottom: 28px;
  }
  @media (min-width: 577px) {
    width: 100%;
    height: 100px;
    padding-top: 41px;
    margin-bottom: 28px;
  }
  @media (min-width: 769px) {
    width: 100%;
    height: 100px;
    padding-top: 41px;
    margin-bottom: 28px;
  }
  @media (min-width: 993px) {
    width: 280px;
    height: 50px;
    padding-top: 0;
    margin-bottom: 80px;
  }
  @media (min-width: 1201px) {
    width: 300px;
    height: 50px;
    padding-top: 0;
    margin-bottom: 80px;
  }
  @media (min-width: 1401px) {
    width: 321px;
    height: 50px;
    padding-top: 0;
    margin-bottom: 80px;
  }
`;

export const ButtonText = styled.p`
  color: #dddbdb;

  font-family: Orbitron;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.45px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 24px;
  }
  @media (min-width: 769px) {
    font-size: 32px;
  }
  @media (min-width: 993px) {
    font-size: 15px;
  }
  @media (min-width: 1201px) {
    font-size: 15px;
  }
  @media (min-width: 1401px) {
    font-size: 15px;
  }
`;

export const JoinButton = styled.a<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const SlideContent = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:hover {
    opacity: 0.65;
  }
`;

export const SponsorCell = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  width: 25%;
  aspect-ratio: 1 / 1;
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.65;
  }
`;

export const TonanaLogo = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 10 / 5.54;

  width: 70%;
`;
export const CubeLogo = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;

  width: 70%;
`;

export const Arrow = styled.button<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-color: transparent;
  border: none;
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;
  z-index: 2;
  cursor: pointer;

  width: 21px;

  &:hover {
    opacity: 0.8;
  }
`;

export const SubTitleContainer = styled.div`
  max-width: 40%;
`;

export const PartnersText = styled.p`
  color: #90c3a4;

  font-family: Orbitron;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.6px;
`;

export const SwiperContainer = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5%;
  padding: 0 100px 0;
`;

export const SponsorsContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  row-gap: 62px;
`;

export const SponsorsContainerColumn = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const GSwipePartnersStyles: any = createGlobalStyle`

  .styled_slide {
    z-index: 1;
  }

  .styled-swiper {
    width: 65%;
  }

`;

export default GSwipePartnersStyles;
