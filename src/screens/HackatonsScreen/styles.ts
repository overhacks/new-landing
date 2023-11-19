import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  flex: 1;

/* 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  flex: 1; */


  &::before, &::after {
    content: '';
    z-index: 0;
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
    z-index: 0;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12) 2px,
      transparent 2px,
      transparent 240px 
    );
  }

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

