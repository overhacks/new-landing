import React, { useEffect, useRef, useState } from "react";
import { useColorTheme } from "../../hooks/useColorTheme";

// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
//   Virtual,
// } from "swiper/modules";
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
} from "./styles";
import AnySizeTitle from "../Title";
import SubTitle from "../SubTitle";
import ApplyButton from "../../assets/img/button.svg";

const HackatonsSwiper = ({
  popupOpen,
  handlePopupOpen,
  isOngoin,
  hackatons,
  selectedHackatonId,
}) => {
  const swiperRef = useRef(null);
  const { webColors } = useColorTheme();

  const [currentHackaton, setCurrentHackaton] = useState(null);

  useEffect(() => {
    const updatedCurrentHackaton = hackatons.find((hackaton) => hackaton.id === selectedHackatonId) || null;
    setCurrentHackaton(updatedCurrentHackaton);
  }, [selectedHackatonId, hackatons]);




  useEffect(() => {
    const swiperContainerHackatons = swiperRef.current;
    const params = {
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 80,
      centeredSlidesBounds: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        1080: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 2,
          centeredSlides: false,
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
      {(currentHackaton && popupOpen) && (
        <PopupWrapper
          boxShadow={
            isOngoin
              ? webColors.BoxShadowHackatonPopupOngoing
              : webColors.BoxShadowHackatonPopupFinished
          }
        >
          <AnySizeTitle
            text={currentHackaton.name}
            color="#CCFF5A"
            alignSelf="left"
          />
          <ImgAndDescription>
            <Description>
              <TextWrapper backgroundColor={
                  isOngoin
                    ? webColors.ProjectWrapperOngoing
                    : webColors.ProjectWrapperFinished
                }>
                <SubTitle
                  textAlign="left"
                  color="#E7FFB0"
                  text={currentHackaton.description}
                />
              </TextWrapper>
            </Description>
            <Banner
              width="40%"
              imgSrc={currentHackaton.imageUrl}
            />
          </ImgAndDescription>

          <RowPopup>
            <PopupButton backgroundColor="#56DF53" width="50%">
              <SubTitle
                fontSize="25px"
                fontWeight="600"
                textAlign="left"
                color="#000"
                text="Apply"
              />
            </PopupButton>

            <Row justifyContent="space-between" width="40%">
              <InfoColumn>
                <SubTitle
                  textAlign="left"
                  color="rgba(231, 255, 176, 0.51)"
                  text="Offline"
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
          </RowPopup>

          <AnySizeTitle
            text="Projects"
            color="#CCFF5A"
            alignSelf="left"
            marginTop="60px"
          />

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
              opacity={popupOpen ? "0.2" : "1"}
              onClick={() => handlePopupOpen(slideContent.id)}
            >
              <AnySizeTitle
                text={slideContent.name}
                color="#CCFF5A"
                alignSelf="left"
              />
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
                <Banner width="40%" imgSrc={slideContent.imageUrl} />
              </ImgAndDescription>

              <Info borderTop="2px solid rgb(44, 44, 48)">
                <Row justifyContent="flex-start" width="60%">
                  <InfoColumn>
                    <SubTitle textAlign="left" color="#E7FFB0" text="Offline" />
                    <SubTitle textAlign="left" color="#E7FFB0" text="Offline" />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle textAlign="left" color="#E7FFB0" text="Prize" />
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text={slideContent.prize}
                    />
                  </InfoColumn>
                  <InfoColumn>
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text="Start Date"
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
                    />
                  </InfoColumn>
                </Row>

                <Button backgroundImg={ApplyButton}>
                  <SubTitle
                    fontSize="25px"
                    fontWeight="600"
                    textAlign="left"
                    color="#000"
                    text="Apply"
                  />
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
