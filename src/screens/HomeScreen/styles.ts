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
  padding-top: 38px;
  padding-top: 70px;

  /* .swiper-slide {
   opacity: 0.4;
   overflow: hidden;
   transition: .7s;
 }

    .swiper-slide-active {
    opacity: 1;
    z-index: 1;
    transform: scale(1.5);
} */
  
`;

export const StyledSlide = styled(SwiperSlide)<{isActive?: boolean}>`
    height: 150px;
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
      return("0.4")
    }};
    transform: ${(props) => {
      if(props.isActive) {return("scale(1.5)")}
      return("scale(1)")
    }};

    z-index: ${(props) => {
      if(props.isActive) {return("1")}
      return("none")
    }};

`;


// .swiper-container {
//   width: 100%;
//   margin: 40px 0;
//   padding: 45px 0;
// }

// .swiper-slide {
//   opacity: 0.4;
//   overflow: hidden;
//   transition: .7s;
// }

// .swiper-slide img {
//   width: 100%;
// }

// .swiper-slide-active {
//   opacity: 1;
//   z-index: 1;
//   transform: scale(1.5);
// }