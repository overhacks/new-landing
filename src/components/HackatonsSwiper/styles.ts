import styled, { createGlobalStyle } from "styled-components";

export const PopupWrapper = styled.div<{ boxShadow: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: #fff;
  height: 85%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 10px;
  
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${(props) => props.boxShadow};
  backdrop-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(50px);

  &::-webkit-scrollbar {
  width: 10px !important;
}

  @media (max-width: 576px) {
    width: 90% !important;
  }
  @media (min-width: 577px) {
    width: 90% !important;
  }
  @media (min-width: 769px) {
    width: 90% !important;
  }
  @media (min-width: 993px) {
    width: 80% !important;
  }
  @media (min-width: 1201px) {
    width: 70% !important;
  }
  @media (min-width: 1401px) {
    width: 60% !important;
  }
`;

export const PopupInnerWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
`

export const PopupImgContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-right: 30px;
`

export const HackatonTitleText = styled.h1<{color: string}>`
  font-size: 17px;
  font-family: "Hanson";
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;

  color: ${props => props.color};
  width: 100%;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const HackatonTitleTextWrapper = styled.div`
  width: 100%;
  max-width: 100%;
`
export const ImgAndDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
`;

export const TextWrapper = styled.div<{ backgroundColor: string }>`
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Banner = styled.div<{ imgSrc: string; width: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  height: fit-content;
  width: ${(props) => props.width};
  aspect-ratio: 1 / 1;
  border-radius: 24px;
`;
export const RowPopup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  margin-top: 32px;
`;

export const PopupButton = styled.button<{
  width: string;
  backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  border: none;
  border-radius: 12px;

  height: 48px;

  &:hover {
    opacity: 0.8;
  }
`;
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 33%;
  max-width: 33%;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 22px;
  width: 100%;
`;

export const Project = styled.div<{ backgroundColor: string }>`
  padding: 24px;
  border-radius: 16px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SlideContent = styled.div<{ opacity: string; boxShadow: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${(props) => props.boxShadow};
  backdrop-filter: blur(50px);
  border-radius: 24px;

  /* padding-left: 20px;
  padding-right: 20px; */

  overflow: hidden;

  transition: all ease 0.7s;

  opacity: ${(props) => props.opacity};

  @media (max-width: 576px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 577px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 769px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 993px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 27px;
    padding-right: 27px;
  }
  @media (min-width: 1201px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 27px;
    padding-right: 27px;
  }
  @media (min-width: 1401px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
export const Info = styled.div<{ borderTop: string }>`
  width: 100%;
  max-height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  //2px solid rgb(44, 44, 48)
`;

export const Button = styled.button<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  width: 33%;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

`;





export const Row = styled.div<{
  paddingLeft?: string;
  width: string;
  justifyContent: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 22px;
  padding-left: ${(props) => props.paddingLeft || "0px"};
  width: ${(props) => props.width};
`;
export const SwiperWrapper = styled.div`
    width: 100%;
    z-index: 2;
    position: relative;
`
const GSwipeHackatonsStyles: any = createGlobalStyle`

.trackVertical {
  right: 2px;
  bottom: 2px;
  top: 2px;
  border-radius: 3px;
  transition: all 200ms ease !important;
  
}

.trackVertical:hover,
.trackVertical:active {
  width: 12px !important;
  border-radius: 8px !important;
}


  .styled_slide {
    height: 100%;
    z-index: 3;
  }

  .styled-swiper-hacktons {
    width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 32px;
  position: relative;
  overflow-y: visible;
  z-index: 2;

  @media (max-width: 576px) {
    /* height: 250px; */
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media (min-width: 577px) {
    /* height: 250px; */
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (min-width: 769px) {
    /* height: 250px; */
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: 993px) {
    /* height: 250px; */
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: 1201px) {
    /* height: 250px; */
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: 1401px) {
    /* height: 350px; */
    padding-top: 80px;
    padding-bottom: 80px;
  }
  }

`;




export default GSwipeHackatonsStyles;
