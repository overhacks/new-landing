import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";


export const Banner = styled.img`
    width: 150px;
    object-fit: cover;
    height: 150px;
`


export const HomeScreenContainer = styled.div`
  flex: 1;
  height: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HomeScreenContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
`;

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

export const SlideContent = styled.div<{isActive: boolean}>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
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

