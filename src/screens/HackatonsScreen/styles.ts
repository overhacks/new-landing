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

export const Button = styled.button<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;


  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1 / 5;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px)
  {
    width: 160px;
  }
  @media (min-width: 577px)
  {
    width: 160px;
  }
  @media (min-width: 769px)
  {
    width: 160px;
  }
  @media (min-width: 993px)
  {
    width: 160px;
  }
  @media (min-width: 1201px)
  {
    width: 160px;
  }
  @media (min-width: 1401px)
  {
    width: 200px;
    }
`

export const StyledSwiper = styled(Swiper)`
  width: 90%;
  padding-bottom: 120px;
  position: relative;
  overflow-y: visible;

  @media (max-width: 576px)
  {
    height: 250px;
    padding-top: 60px;
  }
  @media (min-width: 577px)
  {
    height: 250px;
    padding-top: 60px;
  }
  @media (min-width: 769px)
  {
    height: 250px;
    padding-top: 70px;
  }
  @media (min-width: 993px)
  {
    height: 250px;
    padding-top: 70px;
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
  align-items: center;
  gap: 16px;
  //2px solid rgb(44, 44, 48)
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
  justify-content: space-between;
  gap: 16px;
`
// export const Banner = styled.img`
//     backdrop-filter: lightgray -0.196px 0px / 129.539% 100% no-repeat;
//     max-width: 50%;
//     object-fit: contain;
//     object-position: right;
//     aspect-ratio: 1 / 1;
//     border-radius: 32px;
// `

export const Banner = styled.div<{ imgSrc: string }>`
    background-image: ${props => props.imgSrc};
    background-position: center right;
    background-repeat: no-repeat;
    background-size: contain;
    /* background: lightgray -0.196px 0px / 129.539% 100% no-repeat; */
    
    max-width: 50%;
    aspect-ratio: 1 / 1;
    border-radius: 32px;

    @media (max-width: 576px)
  {
    width: 162.5px;;
  }
  @media (min-width: 577px)
  {
    width: 162.5px;
  }
  @media (min-width: 769px)
  {
    width: 162.5px;
  }
  @media (min-width: 993px)
  {
    width: 162.5px;
  }
  @media (min-width: 1201px)
  {
    width: 162.5px;
  }
  @media (min-width: 1401px)
  {
    width: 200px;
    }
`

export const Row = styled.div<{paddingLeft?: string}>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  padding-left: ${props => props.paddingLeft || "0px"};
  width: 60%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 50%
`
export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const SlideContent = styled.div<{isActive: boolean}>`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;

    background-color: rgba(196, 196, 196, 0.01);
    box-shadow: 0px 98px 100px 0px rgba(88, 13, 245, 0.38) inset, 0px 4px 18px 0px #580DF5 inset, 0px 1px 18px 0px #580DF5 inset;
    backdrop-filter: blur(50px);
    border-radius: 32px;

    padding-left: 20px;
    padding-right: 20px;

    overflow: hidden;
    /* box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.3); */
    
    transition: all ease .7s;

    /* opacity: ${(props) => {
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
    }} */


    @media (max-width: 576px)
  {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 577px)
  {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 769px)
  {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 993px)
  {
   padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1201px)
  {
    padding-top: 40px;
    padding-bottom: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (min-width: 1401px)
  {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
    }
`;



export const PopupWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: #fff;
  padding: 20px;
  width: 60%;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;



  @media (max-width: 576px)
  {
    height: 300px;
  }
  @media (min-width: 577px)
  {
    height: 300px;
  }
  @media (min-width: 769px)
  {
    height: 300px;
  }
  @media (min-width: 993px)
  {
    height: 300px;
  }
  @media (min-width: 1201px)
  {
    height: 300px;
  }
  @media (min-width: 1401px)
  {
    height: 400px;
    }
`;