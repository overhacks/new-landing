import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;
`;
export const Block = styled.div`
  height: 600px;
  width: 100%;
`;
export const Checks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  grid-auto-rows: 24px;
  gap: 16px;
  flex-wrap: wrap;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;
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

export const SubTitlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
`;

export const Button = styled.button<{ backgroundImg: any }>`
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
  aspect-ratio: 1 / 5;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    width: 160px;
  }
  @media (min-width: 577px) {
    width: 160px;
  }
  @media (min-width: 769px) {
    width: 160px;
  }
  @media (min-width: 993px) {
    width: 160px;
  }
  @media (min-width: 1201px) {
    width: 160px;
  }
  @media (min-width: 1401px) {
    width: 200px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 120px;
  margin-bottom: 32px;
  position: relative;
  overflow-y: visible;

  @media (max-width: 576px) {
    /* height: 250px; */
    padding-top: 60px;
  }
  @media (min-width: 577px) {
    /* height: 250px; */
    padding-top: 60px;
  }
  @media (min-width: 769px) {
    /* height: 250px; */
    padding-top: 70px;
  }
  @media (min-width: 993px) {
    /* height: 250px; */
    padding-top: 70px;
  }
  @media (min-width: 1201px) {
    /* height: 250px; */
    padding-top: 70px;
  }
  @media (min-width: 1401px) {
    /* height: 350px; */
    padding-top: 80px;
  }
`;

export const StyledSlide = styled(SwiperSlide)<{ isActive?: boolean }>`
  height: 100%;
  z-index: 1;
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

export const Tag = styled.div<{ backgroundColor: string }>`
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  background-color: ${(props) => props.backgroundColor};
`;

export const Moto = styled.div`
  width: 100%;
  background-color: rgba(54, 249, 109, 0.341);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    height: 60px;
  }
  @media (min-width: 577px) {
    height: 70px;
  }
  @media (min-width: 769px) {
    height: 80px;
  }
  @media (min-width: 993px) {
    height: 90px;
  }
  @media (min-width: 1201px) {
    height: 100px;
  }
  @media (min-width: 1401px) {
    height: 100px;
  }
`;

export const ImgAndDescription = styled.div`
  width: 100%;
  max-height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
`;

export const Banner = styled.div<{ imgSrc: string, width: string }>`
  background-image: ${(props) => props.imgSrc};
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;

  max-width: 50%;
  width: ${props => props.width};
  aspect-ratio: 1 / 1;
  border-radius: 32px;
`;

export const Row = styled.div<{ paddingLeft?: string, width: string, justifyContent: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  padding-left: ${(props) => props.paddingLeft || "0px"};
  width: ${props => props.width};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
`;
export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SlideContent = styled.div<{ isActive: boolean, opacity: string, boxShadow: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${props => props.boxShadow};
  backdrop-filter: blur(50px);
  border-radius: 32px;

  padding-left: 20px;
  padding-right: 20px;

  overflow: hidden;

  transition: all ease 0.7s;

  opacity: ${props => props.opacity};


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
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1201px) {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1401px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const PopupWrapper = styled.div<{ boxShadow: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: #fff;
  padding: 20px;
  width: 60%;
  height: 90%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
  padding-left: 30px;
  padding-right: 40px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: ${props => props.boxShadow};
  backdrop-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(50px);



`;

export const TextWrapper = styled.div<{ backgroundColor: string }>`
  padding: 15px;
  background-color: ${props => props.backgroundColor};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RowPopup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: space-between;
  margin-top: 32px;
`

export const PopupButton = styled.button<{ width: string, backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  border: none;
  border-radius: 12px;

  height: 48px;


  &:hover {
    opacity: 0.8;
  }
`

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 22px;
  width: 100%;
`

export const Project = styled.div<{ backgroundColor: string }>`
  padding: 24px;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`