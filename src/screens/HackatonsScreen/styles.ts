import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";



export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 60%;
  padding-bottom: 60px;
  padding-top: 70px;
`;

export const StyledSlide = styled(SwiperSlide)<{isActive?: boolean}>`
    height: 100%;
    z-index: 1;
`;

export const Info = styled.div`
  width: 100%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;

  border-top: 2px solid rgb(44, 44, 48);
`

export const ImgAndDescription = styled.div`
  width: 100%;
  max-height: 50%;
  display: flex;
  flex-direction: row;

  padding-bottom: 16px;
`
export const Banner = styled.img`
    width: 50%;
    object-fit: contain;
    object-position: left;
    aspect-ratio: 1 / 1;
`


export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%;
  padding-left: 16px;
`

export const SlideContent = styled.div<{isActive: boolean}>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    overflow: hidden;
    
    transition: all ease .7s;

    opacity: ${(props) => {
      if(props.isActive) {return("1")}
      return("0.2")
    }};
    transform: ${(props) => {
      if(props.isActive) {return("scale(1.3)")}
      return("none")
    }};

    z-index: ${(props) => {
      if(props.isActive) {return("2")}
      return("1")
    }}
`;
