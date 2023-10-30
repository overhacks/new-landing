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

export const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #22fa5f;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: 30px;

  @media (max-width: 576px)
  {
    height: 250px;
    padding-top: 60px;
  }
  @media (min-width: 577px)
  {
    height: 250px;
    padding-top: 40px;
  }
  @media (min-width: 769px)
  {
    height: 250px;
    padding-top: 50px;
  }
  @media (min-width: 993px)
  {
    height: 250px;
    padding-top: 60px;
  }
  @media (min-width: 1201px)
  {
    height: 250px;
    padding-top: 70px;
  }
  @media (min-width: 1401px)
  {
    height: 350px;
    padding-top: 80px;
    }
`;

export const StyledSlide = styled(SwiperSlide)<{isActive?: boolean}>`
    height: 100%;
    z-index: 1;
`;

export const Info = styled.div<{borderTop: string}>`
  width: 100%;
  max-height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  padding-top: 16px;
  //2px solid rgb(44, 44, 48)

  border-top: ${props => props.borderTop};
`

export const Tag = styled.div<{backgroundColor: string}>`
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  background-color: ${props => props.backgroundColor};
`

export const Moto = styled.div`
  width: 100%;
  background-color: rgba(54, 249, 109, 0.341);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px)
  {
    height: 60px;
  }
  @media (min-width: 577px)
  {
    height: 70px;
  }
  @media (min-width: 769px)
  {
    height: 80px;
  }
  @media (min-width: 993px)
  {
    height: 90px;
  }
  @media (min-width: 1201px)
  {
    height: 100px;
  }
  @media (min-width: 1401px)
  {
    height: 100px;
    }
`


export const ImgAndDescription = styled.div`
  width: 100%;
  max-height: 65%;
  display: flex;
  flex-direction: row;
  gap: 16px;

  padding-bottom: 16px;
`
export const Banner = styled.img`
    width: 50%;
    object-fit: contain;
    object-position: right;
    aspect-ratio: 1 / 1;
`
export const Row = styled.div<{paddingLeft?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: ${props => props.paddingLeft || "0px"};
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
    /* box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.3); */
    
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
