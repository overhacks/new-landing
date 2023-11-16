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

