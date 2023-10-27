import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const Container = styled.div`
width: 100%;
height: 100%;
overflow-y: scroll;
`
export const Block = styled.div`
  height: 600px;
  width: 100%;
`
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
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
`

export const SubTitlecontainer = styled.div`
  
  padding-bottom: 13px;
  border-bottom: 3px solid #22fa5f;
`

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: 30px;

  @media (max-width: 576px)
  {
    height: 300px;
    padding-top: 60px;
  }
  @media (min-width: 577px)
  {
    height: 350px;
    padding-top: 40px;
  }
  @media (min-width: 769px)
  {
    height: 350px;
    padding-top: 50px;
  }
  @media (min-width: 993px)
  {
    height: 400px;
    padding-top: 60px;
  }
  @media (min-width: 1201px)
  {
    height: 400px;
    padding-top: 70px;
  }
  @media (min-width: 1401px)
  {
    height: 500px;
    padding-top: 80px;
    }
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
      if(props.isActive) {return("scale(1.15)")}
      return("none")
    }};

    z-index: ${(props) => {
      if(props.isActive) {return("2")}
      return("1")
    }}
`;
