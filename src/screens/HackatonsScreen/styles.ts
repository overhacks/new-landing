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

  position: relative;

  &::-webkit-scrollbar {
    width: 0;
  }

  /* &::before,
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    @media (max-width: 576px) {
      background-size: 90px 90px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 90px
      );
    }
    @media (min-width: 577px) {
      background-size: 90px 90px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 90px
      );
    }
    @media (min-width: 769px) {
      background-size: 120px 120px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 120px
      );
    }
    @media (min-width: 993px) {
      background-size: 240px 240px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 240px
      );
    }
    @media (min-width: 1201px) {
      background-size: 240px 240px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 240px
      );
    }
    @media (min-width: 1401px) {
      background-size: 240px 240px;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 240px
      );
    }
  }

  &::after {
    z-index: -1;

    @media (max-width: 576px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 90px
    );
    }
    @media (min-width: 577px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 90px
    );
    }
    @media (min-width: 769px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 120px
    );
    }
    @media (min-width: 993px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 240px
    );
    }
    @media (min-width: 1201px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 240px
    );
    }
    @media (min-width: 1401px) {
      background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05) 2px,
      transparent 2px,
      transparent 240px
    );
    }
  } */
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
  padding-top: 88px;
  padding-bottom: 50px;

  position: relative;
  z-index: 2;
`;

export const RowContainerFirst = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 88px;
  padding-bottom: 50px;
  margin-top: -60px;

  position: relative;
  z-index: 2;
`;

export const SubTitlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
`;
