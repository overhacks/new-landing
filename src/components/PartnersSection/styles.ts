import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const PartnersSectionWrapper = styled.section`
  width: 100%;
  margin-bottom: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 32px;
  margin-bottom: 80px;
`;
export const RowContainerBetween = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 32px;
  margin-bottom: 80px;
`;

export const JoinButton = styled.button<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 7.4;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    width: 260px;
  }
  @media (min-width: 577px) {
    width: 260px;
  }
  @media (min-width: 769px) {
    width: 260px;
  }
  @media (min-width: 993px) {
    width: 280px;
  }
  @media (min-width: 1201px) {
    width: 300px;
  }
  @media (min-width: 1401px) {
    width: 321px;
  }
`;



export const SlideContent = styled.div<{ imgSrc: string }>`
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
`;
export const TonanaLogo = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 10 / 5.54 ;

  
  width: 70%;
`;
export const CubeLogo = styled.a<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1 ;
  
  width: 70%;
`;

export const Arrow = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1 ;

  width: 64px;
`;

const GSwipePartnersStyles: any = createGlobalStyle`

  .styled_slide {
    height: 100%;
  z-index: 1;
  }

  .styled-swiper {
    width: 85%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  margin-bottom: 32px;
  }

`;

export default GSwipePartnersStyles;
