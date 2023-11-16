import React, { useEffect, useRef } from "react";
import { useColorTheme } from "../../hooks/useColorTheme";



import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Virtual
} from "swiper/modules";
import GSwipeHackatonsStyles, {
  Banner,
  Description,
  ImgAndDescription,
  PopupButton,
  PopupWrapper,
  RowPopup,
  StyledSwiper,
  TextWrapper,
  Row,
  InfoColumn,
  Projects,
  Project,
  StyledSlide,
  SlideContent,
  Info,
  Button,
  SwiperWrapper,
} from "./styles";
import AnySizeTitle from "../Title";
import SubTitle from "../SubTitle";
import ApplyButton from "../../assets/img/button.svg";

const HackatonsSwiper = ({ popupOpen, handlePopupOpen, isOngoin }) => {
  const swiperRef = useRef(null);
  const { webColors } = useColorTheme();

  useEffect(() => {
    const swiperContainerHackatons = swiperRef.current;
    const params = {
      centeredSlides: false,
      grabCursor: true,
      slidesPerView: 2,
      slidesPerGroupSkip: 1,
      spaceBetween: 80,
      loop: true,
      centeredSlidesBounds: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          slidesPerGroupSkip: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1,
          slidesPerGroupSkip: 1,
          centeredSlides: true,
        },
        1080: {
          slidesPerView: 2,
          slidesPerGroupSkip: 2,
          centeredSlides: false,
        },
        1280: {
          slidesPerView: 2,
          slidesPerGroupSkip: 2,
          centeredSlides: false,
        },
      },
      modules: [Autoplay],
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    };

    Object.assign(swiperContainerHackatons, params);
    swiperContainerHackatons.initialize();
  }, []);

  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  const projects = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  return (
    <SwiperWrapper>
      {popupOpen && (
        <PopupWrapper
          boxShadow={isOngoin ? webColors.BoxShadowHackatonPopupOngoing : webColors.BoxShadowHackatonPopupFinished}
        >
          <AnySizeTitle
            text="Docker AI/ML Hackathon"
            color="#CCFF5A"
            alignSelf="left"
          />
          <ImgAndDescription>
            <Description>
              <TextWrapper backgroundColor="#170540">
                <SubTitle
                  textAlign="left"
                  color="#E7FFB0"
                  text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                />
              </TextWrapper>

              <TextWrapper backgroundColor="#170540">
                <SubTitle
                  textAlign="left"
                  color="#E7FFB0"
                  text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."
                />
              </TextWrapper>
            </Description>
            <Banner
              width="40%"
              imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
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
                  text="Participants"
                />
                <SubTitle
                  marginTop="18px"
                  textAlign="left"
                  color="#E7FFB0"
                  text="1436"
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
                  text="28.11.2023"
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
            {projects.map((project) => (
              <Project backgroundColor={isOngoin ? webColors.ProjectWrapperOngoing : webColors.ProjectWrapperFinished}>
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
      {slides.map((slideContent, index) => (
        <swiper-slide class="styled_slide" key={slideContent} virtualIndex={index}>
          <SlideContent
            boxShadow={isOngoin ? webColors.OngoingHackatonSlide : webColors.FinishedHackatonSlide}
            opacity={popupOpen ? "0.2" : "1"}
            onClick={() => handlePopupOpen("1")}
          >
            <AnySizeTitle
              text="Docker AI/ML Hackathon"
              color="#CCFF5A"
              alignSelf="left"
            />
            <ImgAndDescription>
              <Description>
                <SubTitle
                  textAlign="left"
                  color="#E7FFB0"
                  text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                />
              </Description>
              <Banner
                width="40%"
                imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
              />
            </ImgAndDescription>

            <Info borderTop="2px solid rgb(44, 44, 48)">
              <Row justifyContent="flex-start" width="60%">
                <InfoColumn>
                  <SubTitle textAlign="left" color="#E7FFB0" text="Offline" />
                  <SubTitle textAlign="left" color="#E7FFB0" text="Offline" />
                </InfoColumn>
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text="Participants"
                  />
                  <SubTitle textAlign="left" color="#E7FFB0" text="1436" />
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
                    text="28.11.2023"
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
    <GSwipeHackatonsStyles/>
    </SwiperWrapper>
  );
};

export default HackatonsSwiper;