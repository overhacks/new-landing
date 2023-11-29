import styled, { createGlobalStyle } from "styled-components";

export const PopupWrapper = styled.div<{ boxShadow: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: #fff;
  height: 85%;

  border-radius: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 20px;

  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${(props) => props.boxShadow};
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);

  &::-webkit-scrollbar {
    width: 10px !important;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
  @media (min-width: 577px) {
    width: 80%;
  }
  @media (min-width: 769px) {
    width: 80%;
  }
  @media (min-width: 993px) {
    width: 70%;
  }
  @media (min-width: 1201px) {
    width: 65%;
  }
  @media (min-width: 1401px) {
    width: 45%;
  }
`;

export const ScrollContainer = styled.div<{
  scrollStickColor: string;
  hoverScrollStickColor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.scrollStickColor};
    border-radius: 3px;
    width: 9px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.hoverScrollStickColor};
  }
`;

export const PopupHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 30px;
`;

export const CancelBtn = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Arrow = styled.button<{
  imgSrc: string;
  opacity: string;
  popupOpen: boolean;
}>`
  background-image: url(${(props) => props.imgSrc});
  background-color: transparent;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;
  z-index: 2;
  opacity: ${(props) => props.opacity};

  width: 64px;

  &:hover {
    opacity: ${(props) => {
      if (props.popupOpen) {
        return "0.2";
      }
      return "0.8";
    }};
  }

  cursor: pointer;
`;

export const PopupStyledCross = styled.button<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-color: transparent;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;

  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const PopupSponsorsContainer = styled.div`
  width: 49%;
`;

export const SponsorsWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;

  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 12px;
`;

export const HackatonTitleText = styled.h1<{ color: string }>`
  font-size: 17px;
  font-family: "Hanson";
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.6px;

  color: ${(props) => props.color};
  width: 100%;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const HackatonTitleTextWrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;
export const ImgAndDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-top: 20px;
`;

export const PopupContentsWrapper = styled.div`
  width: calc(100% - 30px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 49%;
`;

export const TextWrapper = styled.div<{ backgroundColor: string }>`
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #E7FFB0;
  font-family: "PF Videotext Pro";
  font-size: 15px;
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
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${(props) => props.boxShadow};
  -webkit-backdrop-filter: blur(50px);
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
`;

export const CardButtonWrapper = styled.div`
  width: 33%;
`

export const Button = styled.a<{ backgroundImg: any, isFinished: boolean }>`
  background-color: transparent;
  text-decoration: none;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  width: 100%;
  height: auto;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: ${(props) => {
    if (props.isFinished) {
      return("default")
    }
    return("pointer")
  }};

  opacity: ${(props) => {
    if (props.isFinished) {
      return("0.4")
    }
    return("1")
  }};

  &:hover {
    opacity: ${(props) => {
    if (props.isFinished) {
      return("0.4")
    }
    return("0.8")
  }};
  }
`;

export const LargeApplyButton = styled.a<{ backgroundImg: any, isFinishedCurrent: boolean }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  width: calc(100% - 30px);
  margin-right: 30px;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 0.626 / 10;

  cursor: ${(props) => {
    if (props.isFinishedCurrent) {
      return("default")
    }
    return("pointer")
  }};

  opacity: ${(props) => {
    if (props.isFinishedCurrent) {
      return("0.4")
    }
    return("1")
  }};

&:hover {
    opacity: ${(props) => {
    if (props.isFinishedCurrent) {
      return("0.4")
    }
    return("0.6")
  }}
  }
`;

export const PopupCellsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 21px;
`;

export const PopupCell = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;

  &:hover {
    opacity: 0.65;
  }
`;

export const LargeApplyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonText = styled.p`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #000;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 20px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 17px;
  }
  @media (min-width: 1201px) {
    font-size: 20px;
  }
  @media (min-width: 1401px) {
    font-size: 25px;
  }
`;

export const CardsPoint = styled.p`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #E7FFB0;
  text-align: left;
  font-size: 15px;
`

export const CardsBullet = styled.b`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #22FA5F;
  text-align: left;
  font-size: 15px;
`

export const Row = styled.div<{
  paddingLeft?: string;
  width: string;
  justifyContent: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  align-items: flex-start;
  /* flex-wrap: wrap; */
  gap: 22px;
  padding-left: ${(props) => props.paddingLeft || "0px"};
  width: ${(props) => props.width};
`;
export const SwiperWrapper = styled.div`
  width: 100%;
  z-index: 2;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
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



  .styled_swiper_hackatons {
    width: 72%;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 32px;
  position: relative;
  overflow-y: visible;
  z-index: 3;

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
