import React, { useEffect, useRef, useState } from "react";
import { useColorTheme } from "../../hooks/useColorTheme";

import GSwipeHackatonsStyles, {
  Banner,
  Description,
  ImgAndDescription,
  PopupButton,
  PopupWrapper,
  RowPopup,
  TextWrapper,
  Row,
  InfoColumn,
  Projects,
  Project,
  SlideContent,
  Info,
  Button,
  SwiperWrapper,
  PopupImgContainer,
  HackatonTitleText,
  HackatonTitleTextWrapper,
  PopupInnerWrapper,
  LargeApplyButton,
  ButtonText,
  LargeApplyWrapper,
  PopupCellsWrapper,
  PopupCell,
  ScrollContainer,
} from "./styles";
import AnySizeTitle from "../Title";
import SubTitle from "../SubTitle";
import ApplyButton from "../../assets/img/button.svg";
import LargeApplyButtonSVG from "../../assets/img/largeApply.svg";


import PopupCellOngoing from "../../assets/img/popCellongoing.svg";
import PopupCellFinished from "../../assets/img/popupCellFinished.svg";


// import styled from "styled-components";

// const PerfectScrollbarStyled = styled(PerfectScrollbar)`
//   .ps__thumb-y {
//     background-color: ${(props) => props.color};
//     width: 9px;
//     /* transition: all 150ms ease !important; */
//     &:hover {
//       background-color: ${(props) => props.color};
//     }
//   }
//   .ps__ral-iy:focus > .ps__thumb-y,
//   .ps__rail-y.ps--clicking .ps__thumb-y {
//     background-color: ${(props) => props.color};
//   }
//   .ps__rail-y:hover,
//   .ps__rail-y:focus,
//   .ps .ps__rail-y.ps--clickin {
//     background-color: white;
//   }
//   .ps__thumb-x {
//     display: none;
//   }


// `;

const matcher = () => {
  return window.matchMedia("(max-width: 1201px)").matches;
};

const HackatonsSwiper = ({
  popupOpen,
  handlePopupOpen,
  isOngoin,
  hackatons,
  selectedHackatonId,
}) => {
  const swiperRef = useRef(null);
  const { webColors } = useColorTheme();

  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const checkScreenSize = () => {
    setIsSmallScreen(matcher());
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const [currentHackaton, setCurrentHackaton] = useState(null);

  useEffect(() => {
    const updatedCurrentHackaton =
      hackatons.find((hackaton) => hackaton.id === selectedHackatonId) || null;
    setCurrentHackaton(updatedCurrentHackaton);
  }, [selectedHackatonId, hackatons]);

  useEffect(() => {
    const swiperContainerHackatons = swiperRef.current;
    const params = {
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 170,
      centeredSlidesBounds: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 150,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 150,
        },
        1080: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 150,
        },
        1280: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 170,
        },
      },
      // modules: [Autoplay],
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
    };

    Object.assign(swiperContainerHackatons, params);
    swiperContainerHackatons.initialize();
  }, []);

  return (
    <SwiperWrapper>
      {!isSmallScreen && currentHackaton && popupOpen && (
        <PopupWrapper
          boxShadow={
            isOngoin
              ? webColors.BoxShadowHackatonPopupOngoing
              : webColors.BoxShadowHackatonPopupFinished
          }
        >
          <ScrollContainer scrollStickColor={isOngoin ? "#6E52AA" : "#445144"}>
            <AnySizeTitle
              text={currentHackaton.name}
              color="#CCFF5A"
              alignSelf="left"
            />
            <ImgAndDescription>
              <Description>
                <TextWrapper
                  backgroundColor={
                    isOngoin
                      ? webColors.ProjectWrapperOngoing
                      : webColors.ProjectWrapperFinished
                  }
                >
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text={currentHackaton.description}
                  />
                </TextWrapper>

                <PopupCellsWrapper>
                    <PopupCell imgSrc={isOngoin ? PopupCellOngoing : PopupCellFinished} />
                    <PopupCell imgSrc={isOngoin ? PopupCellOngoing : PopupCellFinished} />
                    <PopupCell imgSrc={isOngoin ? PopupCellOngoing : PopupCellFinished} />
                  </PopupCellsWrapper>

                  <LargeApplyWrapper>
                    <LargeApplyButton backgroundImg={LargeApplyButtonSVG}>
                  <SubTitle
                    fontSize="25px"
                    fontWeight="600"
                    textAlign="left"
                    color="#000"
                    text="Apply"
                  />
                </LargeApplyButton>
                  </LargeApplyWrapper>

              
                
              </Description>
              <PopupImgContainer>
                <Banner width="100%" imgSrc={currentHackaton.imageUrl} />
                <Row justifyContent="space-between" width="100%">
                  <InfoColumn>
                    <SubTitle
                      textAlign="left"
                      color="rgba(231, 255, 176, 0.51)"
                      text="Format"
                    />
                    <SubTitle
                      marginTop="18px"
                      textAlign="left"
                      color="#E7FFB0"
                      text="Offline"
                    />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle
                      textAlign="left"
                      color="rgba(231, 255, 176, 0.51)"
                      text="Prize"
                    />
                    <SubTitle
                      marginTop="18px"
                      textAlign="left"
                      color="#E7FFB0"
                      text={currentHackaton.prize}
                    />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle
                      textAlign="left"
                      color="rgba(231, 255, 176, 0.51)"
                      text="Start Date"
                    />
                    <SubTitle
                      marginTop="18px"
                      textAlign="left"
                      color="#E7FFB0"
                      text={new Date(currentHackaton.startDate)
                        .toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                        .replace(/\//g, ".")}
                    />
                  </InfoColumn>
                </Row>
              </PopupImgContainer>
            </ImgAndDescription>

            {currentHackaton.projects.length !== 0 && (
              <AnySizeTitle
                text="Projects"
                color="#CCFF5A"
                alignSelf="left"
                marginTop="60px"
              />
            )}

            <Projects>
              {currentHackaton.projects.map((project) => (
                <Project
                  backgroundColor={
                    isOngoin
                      ? webColors.ProjectWrapperOngoing
                      : webColors.ProjectWrapperFinished
                  }
                >
                  <SubTitle
                    text="Some Project"
                    color="#CCFF5A"
                    alignSelf="left"
                    fontSize="25px"
                  />
                  <SubTitle
                    text="project description project description project description"
                    color="#CCFF5A"
                    alignSelf="left"
                    maxWidth="33%"
                  />

                  <PopupButton backgroundColor="#79C777" width="128px">
                    <SubTitle
                      fontSize="25px"
                      fontWeight="600"
                      textAlign="left"
                      color="#000"
                      text="link"
                    />
                  </PopupButton>
                </Project>
              ))}
            </Projects>
          </ScrollContainer>
        </PopupWrapper>
      )}
      <swiper-container
        class="styled-swiper-hacktons"
        init="false"
        ref={swiperRef}
      >
        {hackatons.map((slideContent, index) => (
          <swiper-slide
            class="styled_slide"
            key={slideContent.id}
            virtualIndex={index}
          >
            <SlideContent
              boxShadow={
                isOngoin
                  ? webColors.OngoingHackatonSlide
                  : webColors.FinishedHackatonSlide
              }
              opacity={popupOpen && !isSmallScreen ? "0.2" : "1"}
              onClick={() => handlePopupOpen(slideContent.id)}
            >
              {/* <AnySizeTitle
                text={slideContent.name}
                color={isOngoin ? "#E7FFB0" : "#CCFF5A"}
                alignSelf="left"
                
                textOverflow="ellipsis"
                maxWidth="100%"
              /> */}
              <HackatonTitleTextWrapper>
                <HackatonTitleText color={isOngoin ? "#E7FFB0" : "#CCFF5A"}>
                  {slideContent.name}
                </HackatonTitleText>
              </HackatonTitleTextWrapper>

              <ImgAndDescription>
                <Description>
                  {slideContent.topics.map((topic) => (
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      text={"• " + topic}
                    />
                  ))}
                </Description>
                <Banner width="33%" imgSrc={slideContent.imageUrl} />
              </ImgAndDescription>

              <Info borderTop="2px solid rgb(44, 44, 48)">
                <Row justifyContent="flex-start" width="55%">
                  <InfoColumn>
                    <SubTitle textAlign="left" color="#6C6D6C" text="Format" />
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text="Offline"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      maxWidth="100%"
                      textWrap="nowrap"
                    />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle textAlign="left" color="#6C6D6C" text="Prize" />
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text={slideContent.prize}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      maxWidth="100%"
                      textWrap="nowrap"
                    />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle
                      textAlign="left"
                      color="#6C6D6C"
                      text="Start Date"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      maxWidth="100%"
                      textWrap="nowrap"
                    />
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text={new Date(slideContent.startDate)
                        .toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })
                        .replace(/\//g, ".")}
                      overflow="hidden"
                      textOverflow="ellipsis"
                      maxWidth="100%"
                      textWrap="nowrap"
                    />
                  </InfoColumn>
                </Row>

                <Button backgroundImg={ApplyButton}>
                  <ButtonText>Apply</ButtonText>
                </Button>
              </Info>
            </SlideContent>
          </swiper-slide>
        ))}
      </swiper-container>
      <GSwipeHackatonsStyles />
    </SwiperWrapper>
  );
};

export default HackatonsSwiper;
