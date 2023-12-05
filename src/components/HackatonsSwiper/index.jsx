import React, { useCallback, useEffect, useRef, useState } from "react";
import { useColorTheme } from "../../hooks/useColorTheme";
import { register } from "swiper/element/bundle";
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
  HackatonTitleText,
  HackatonTitleTextWrapper,
  LargeApplyButton,
  ButtonText,
  LargeApplyWrapper,
  PopupCellsWrapper,
  PopupCell,
  ScrollContainer,
  PopupHeaderRow,
  CancelBtn,
  Arrow,
  PopupStyledCross,
  PopupSponsorsContainer,
  PopupContentsWrapper,
  SponsorsWrapper,
  CardsPoint,
  CardsBullet,
  CardButtonWrapper,
  PrizePoolContainer,
  PrizeText,
  PopupPrizePoolWrapper,
  PopupInfoRow,
  InfoColumnPopup,
  PopupContentsWrapperMobile,
} from "./styles";
import AnySizeTitle from "../Title";
import SubTitle from "../SubTitle";
import ApplyButton from "../../assets/img/button.svg";
import SmallApplyButton from "../../assets/img/smallApplyButton.svg";

import LargeApplyButtonSVG from "../../assets/img/largeApply.svg";

import ArrowLeft from "../../assets/img/arrowLeft.svg";
import ArrowRight from "../../assets/img/arrowRight.svg";
import PopupCross from "../../assets/img/popupCross.svg";
import PopupCellFinished from "../../assets/img/popupCellFinished.svg";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const HackatonsSwiper = ({
  popupOpen,
  handlePopupOpen,
  isOngoin,
  hackatons,
  selectedHackatonId,
}) => {
  const swiperRef = useRef(null);
  const popupRef = useRef(null);
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
  const [paragraphs, setParagraphs] = useState(null);

  useEffect(() => {
    const updatedCurrentHackaton =
      hackatons.find((hackaton) => hackaton.id === selectedHackatonId) || null;
    setCurrentHackaton(updatedCurrentHackaton);
  }, [selectedHackatonId, hackatons]);

  useEffect(() => {
    if (currentHackaton) {
      setParagraphs(currentHackaton?.description.split(/<\/p>\s*<p>/));
    } else {
      setParagraphs(null);
    }
  }, [currentHackaton]);

  // console.log("currentHackaton", currentHackaton);
  // console.log("paragraphs", paragraphs);

  useEffect(() => {
    const swiperContainerHackatons = swiperRef.current;
    const params = {
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 47,
      centeredSlidesBounds: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 47,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 47,
        },
        1080: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 47,
        },
        1280: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 47,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-unique-hackatons",
        prevEl: ".swiper-button-prev-unique-hackatons",
      },
    };

    const paramsMobile = {
      centeredSlides: false,
      grabCursor: true,
      spaceBetween: 47,
      centeredSlidesBounds: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 47,
        },
        768: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 47,
        },
        1080: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 47,
        },
        1280: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 47,
        },
      },
      loop: true,
    };

    if (!isSmallScreen) {
      Object.assign(swiperContainerHackatons, params);
      swiperContainerHackatons.initialize();
    } else if (isSmallScreen) {
      Object.assign(swiperContainerHackatons, paramsMobile);
      swiperContainerHackatons.initialize();
    }
  }, []);

  const handlePrevious = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  const currentDate = new Date().toISOString();
  const isFinishedCurrent = currentHackaton?.startDate < currentDate;

  return (
    <SwiperWrapper>
      {currentHackaton && popupOpen && (
        <PopupWrapper
          ref={popupRef}
          boxShadow={webColors.BoxShadowHackatonPopupFinished}
        >
          <ScrollContainer
            scrollStickColor="#445144"
            hoverScrollStickColor="#445144a8"
          >
            <PopupHeaderRow>
              <AnySizeTitle
                text={currentHackaton.name}
                color="#CCFF5A"
                alignSelf="left"
                maxWidth="85%"
              />
              <CancelBtn onClick={handlePopupOpen}>
                <PopupStyledCross imgSrc={PopupCross} />
              </CancelBtn>
            </PopupHeaderRow>
            {!isSmallScreen && (
              <PopupContentsWrapper>
                <Description>
                  {paragraphs &&
                    paragraphs.map((paragraph) => (
                      <TextWrapper
                        backgroundColor={webColors.ProjectWrapperFinished}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></TextWrapper>
                    ))}
                </Description>

                <PopupSponsorsContainer>
                  <SponsorsWrapper
                    backgroundColor={webColors.ProjectWrapperFinished}
                  >
                    <Row justifyContent="flex-start" width="100%">
                      <SubTitle
                        textAlign="left"
                        color="rgba(108, 109, 108, 1)"
                        text="Sponsors"
                      />
                    </Row>

                    <PopupCellsWrapper>
                      <PopupCell imgSrc={PopupCellFinished} />
                      <PopupCell imgSrc={PopupCellFinished} />
                      <PopupCell imgSrc={PopupCellFinished} />
                    </PopupCellsWrapper>

                    <PopupPrizePoolWrapper>
                      <SubTitle
                        textAlign="left"
                        color="#6C6D6C"
                        text="Prize pool:"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#22FA5F"
                        text={currentHackaton.prize}
                      />
                    </PopupPrizePoolWrapper>

                    <PopupInfoRow>
                      <InfoColumnPopup>
                        <SubTitle
                          textAlign="left"
                          color="rgba(231, 255, 176, 0.51)"
                          text="Format"
                        />
                        <SubTitle
                          textAlign="left"
                          color="#E7FFB0"
                          text="Offline"
                        />
                      </InfoColumnPopup>
                      <InfoColumnPopup>
                        <SubTitle
                          textAlign="left"
                          color="rgba(231, 255, 176, 0.51)"
                          text="Start Date"
                        />
                        <SubTitle
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
                      </InfoColumnPopup>
                    </PopupInfoRow>
                  </SponsorsWrapper>
                </PopupSponsorsContainer>
              </PopupContentsWrapper>
            )}
            {isSmallScreen && (
              <PopupContentsWrapperMobile>
                <Description>
                  {paragraphs &&
                    paragraphs.map((paragraph) => (
                      <TextWrapper
                        backgroundColor={webColors.ProjectWrapperFinished}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></TextWrapper>
                    ))}
                </Description>

                <PopupSponsorsContainer>
                  <SponsorsWrapper
                    backgroundColor={webColors.ProjectWrapperFinished}
                  >
                    <Row justifyContent="flex-start" width="100%">
                      <SubTitle
                        textAlign="left"
                        color="rgba(108, 109, 108, 1)"
                        text="Sponsors"
                      />
                    </Row>

                    <PopupCellsWrapper>
                      <PopupCell imgSrc={PopupCellFinished} />
                      <PopupCell imgSrc={PopupCellFinished} />
                      <PopupCell imgSrc={PopupCellFinished} />
                    </PopupCellsWrapper>

                    <PopupPrizePoolWrapper>
                      <SubTitle
                        textAlign="left"
                        color="#6C6D6C"
                        text="Prize pool:"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#22FA5F"
                        text={currentHackaton.prize}
                        fontSize="25px"
                      />
                    </PopupPrizePoolWrapper>

                    <PopupInfoRow>
                      <InfoColumnPopup>
                        <SubTitle
                          textAlign="left"
                          color="rgba(231, 255, 176, 0.51)"
                          text="Format"
                        />
                        <SubTitle
                          textAlign="left"
                          color="#E7FFB0"
                          text="Offline"
                        />
                      </InfoColumnPopup>
                      <InfoColumnPopup>
                        <SubTitle
                          textAlign="left"
                          color="rgba(231, 255, 176, 0.51)"
                          text="Start Date"
                        />
                        <SubTitle
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
                      </InfoColumnPopup>
                    </PopupInfoRow>
                  </SponsorsWrapper>
                </PopupSponsorsContainer>
              </PopupContentsWrapperMobile>
            )}
            <LargeApplyWrapper>
              <LargeApplyButton
                disabled={isFinishedCurrent}
                isFinishedCurrent={isFinishedCurrent}
                backgroundImg={LargeApplyButtonSVG}
                href={isOngoin ? "https://t.me/OverhacksBot" : undefined}
                onClick={(e) => {
                  if (isOngoin) {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                  }
                }}
              >
                <ButtonText>Apply</ButtonText>
              </LargeApplyButton>
            </LargeApplyWrapper>

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
                <Project backgroundColor={webColors.ProjectWrapperFinished}>
                  <SubTitle
                    text="Some Project"
                    color="#CCFF5A"
                    alignSelf="left"
                    fontSize="25px"
                  />
                  {!isSmallScreen && (
                    <SubTitle
                      text="project description project description project description"
                      color="#CCFF5A"
                      alignSelf="left"
                      maxWidth="33%"
                    />
                  )}

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
      {!isSmallScreen && (
        <Arrow
          onClick={handlePrevious}
          imgSrc={ArrowLeft}
          class="swiper-button-prev-unique-hackatons"
          opacity={popupOpen && !isSmallScreen ? "0.2" : "1"}
          popupOpen={popupOpen}
        ></Arrow>
      )}

      <swiper-container
        class="styled_swiper_hackatons"
        init="false"
        ref={swiperRef}
      >
        {hackatons.map((slideContent, index) => (
          <swiper-slide class="styled_slide_hackatons" key={slideContent.id}>
            <SlideContent
              boxShadow={webColors.FinishedHackatonSlide}
              opacity={popupOpen && !isSmallScreen ? "0.2" : "1"}
              onClick={() => handlePopupOpen(slideContent.id, swiperRef)}
            >
              <HackatonTitleTextWrapper>
                <HackatonTitleText color={isOngoin ? "#E7FFB0" : "#CCFF5A"}>
                  {slideContent.name}
                </HackatonTitleText>
              </HackatonTitleTextWrapper>

              <ImgAndDescription>
                <Description>
                  {slideContent.topics.map((topic) => (
                    <CardsPoint>
                      {" "}
                      <CardsBullet>// </CardsBullet> {topic}
                    </CardsPoint>
                  ))}
                  <PrizePoolContainer>
                    <SubTitle
                      textAlign="left"
                      color="#6C6D6C"
                      text="Prize pool:"
                    />
                    <PrizeText>{slideContent.prize}</PrizeText>
                  </PrizePoolContainer>
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

                <CardButtonWrapper>
                  <Button
                    isFinished={!isOngoin}
                    backgroundImg={
                      isSmallScreen ? SmallApplyButton : ApplyButton
                    }
                    href={isOngoin ? "https://t.me/OverhacksBot" : undefined}
                    onClick={(e) => {
                      if (isOngoin) {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                      }
                    }}
                  >
                    <ButtonText>Apply</ButtonText>
                  </Button>
                </CardButtonWrapper>
              </Info>
            </SlideContent>
          </swiper-slide>
        ))}
      </swiper-container>
      {!isSmallScreen && (
        <Arrow
          onClick={handleNext}
          imgSrc={ArrowRight}
          class="swiper-button-next-unique-hackatons"
          opacity={popupOpen && !isSmallScreen ? "0.2" : "1"}
          popupOpen={popupOpen}
        ></Arrow>
      )}
      <GSwipeHackatonsStyles />
    </SwiperWrapper>
  );
};

export default HackatonsSwiper;
