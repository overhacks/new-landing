import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";



export const HomeScreenContainer = styled.div`
  flex: 1;
  height: 100vw;
  width: 100%;
  overflow: hidden;
`;

export const HomeScreenContent = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1; */


  &::before, &::after {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 240px 240px; 
    background-image: repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12) 2px,
      transparent 2px,
      transparent 240px 
    );
  }

  &::after {
    z-index: -1;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12) 2px,
      transparent 2px,
      transparent 240px 
    );
  }

`;
