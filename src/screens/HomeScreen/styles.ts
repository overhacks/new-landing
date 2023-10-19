import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const HomeScreenContainer = styled.div`
  flex: 1;
  height: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HomeScreenContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 400px;
  margin: 40px 0;
  padding: 45px 0;
`;

export const StyledSlide = styled(SwiperSlide)`
    opacity: 0.4;
    overflow: hidden;
    width: 100px;
    height: 250px;
    background-color: white;

    display: flex;
    flex-direction: column;
`;
