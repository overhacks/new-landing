import GSwipePartnersStyles, {
  Arrow,
  ButtonText,
  ButtonWrapper,
  CenteredLine,
  CubeLogo,
  JoinButton,
  LineCenter,
  PartnersSectionWrapper,
  PartnersText,
  RowContainer,
  RowContainerBetween,
  SlideContent,
  SponsorCell,
  SponsorsContainerColumn,
  SponsorsContainerRow,
  SubTitleContainer,
  SwiperContainer,
  TonanaLogo,
} from "./styles";
import React, { useEffect, useRef, useCallback, useState, useMemo } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import PartnerBackground from "../../assets/img/partnerBackground.png";
import TonanaLogoSvg from "../../assets/img/tonanabananalogo.svg";
import Cube from "../../assets/img/cubePartner.png";
import GrassCard from "../../assets/img/grassPartner.svg";
import TonCard from "../../assets/img/tonPartner.svg";
import SubTitle from "../SubTitle";
import JoinButtonPng from "../../assets/img/JoinButton.png";
import JoinButtonMobile from "../../assets/img/mobilePartnerButton.svg";
import ArrowLeft from "../../assets/img/arrowLeft.svg";
import ArrowRight from "../../assets/img/arrowRight.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import useIsInViewport from "../../hooks/viewPort";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const PartnersSection = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      grabCursor: true,
      spaceBetween: 64,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1080: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-unique",
        prevEl: ".swiper-button-prev-unique",
      },
    };

    if (!isSmallScreen) {
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }
  }, [isSmallScreen]);

  const handlePrevious = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    <>
      <RowContainer data-aos="fade-right">
        <SubTitleRow text="Our partners" />
      </RowContainer>
      <PartnersSectionWrapper>
        {!isSmallScreen && (
          <SwiperContainer>
            <Arrow
              onClick={handlePrevious}
              imgSrc={ArrowLeft}
              class="swiper-button-prev-unique"
            ></Arrow>
            <swiper-container
              class="styled-swiper"
              init="false"
              ref={swiperRef}
            >
              <swiper-slide class="styled_slide">
                <SlideContent imgSrc={PartnerBackground}>
                  <TonanaLogo
                    href="https://tonana.org/"
                    target="_blank"
                    imgSrc={TonanaLogoSvg}
                  />
                </SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent imgSrc={PartnerBackground}>
                  <CubeLogo
                    href="https://dedust.io/"
                    target="_blank"
                    imgSrc={Cube}
                  />
                </SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent
                  href="https://society.ton.org/"
                  target="_blank"
                  imgSrc={GrassCard}
                ></SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent
                  href="https://ton.org/"
                  target="_blank"
                  imgSrc={TonCard}
                ></SlideContent>
              </swiper-slide>

              <swiper-slide class="styled_slide">
                <SlideContent imgSrc={PartnerBackground}>
                  <TonanaLogo
                    href="https://tonana.org/"
                    target="_blank"
                    imgSrc={TonanaLogoSvg}
                  />
                </SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent imgSrc={PartnerBackground}>
                  <CubeLogo
                    href="https://dedust.io/"
                    target="_blank"
                    imgSrc={Cube}
                  />
                </SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent
                  href="https://society.ton.org/"
                  target="_blank"
                  imgSrc={GrassCard}
                ></SlideContent>
              </swiper-slide>
              <swiper-slide class="styled_slide">
                <SlideContent
                  href="https://ton.org/"
                  target="_blank"
                  imgSrc={TonCard}
                ></SlideContent>
              </swiper-slide>
            </swiper-container>
            <Arrow
              onClick={handleNext}
              imgSrc={ArrowRight}
              class="swiper-button-next-unique"
            ></Arrow>
          </SwiperContainer>
        )}

        {isSmallScreen && (
          <SponsorsContainerColumn>
            <SponsorsContainerRow>
              <SponsorCell
                href="https://ton.org/"
                target="_blank"
                imgSrc={TonCard}
                data-aos="fade-right"
              />
              <SponsorCell
                href="https://society.ton.org/"
                target="_blank"
                imgSrc={GrassCard}
                data-aos="fade-right"
              />
              <SponsorCell data-aos="fade-right" imgSrc={PartnerBackground}>
                <CubeLogo
                  href="https://dedust.io/"
                  target="_blank"
                  imgSrc={Cube}
                />
              </SponsorCell>
            </SponsorsContainerRow>
            <SponsorsContainerRow>
              <SponsorCell data-aos="fade-right" imgSrc={PartnerBackground}>
                <TonanaLogo
                  href="https://tonana.org/"
                  target="_blank"
                  imgSrc={TonanaLogoSvg}
                />
              </SponsorCell>
            </SponsorsContainerRow>
          </SponsorsContainerColumn>
        )}

        <RowContainerBetween>
          {!isSmallScreen && (
            <SubTitleContainer data-aos="fade-right">
              <PartnersText>Become our partner to be a part of trusted unity!</PartnersText>
            </SubTitleContainer>
          )}

          <ButtonWrapper>
            <JoinButton
              backgroundImg={isSmallScreen ? JoinButtonMobile : JoinButtonPng}
              href="https://forms.gle/Exqa4wAzTi1kSzbU9"
              target="_blank"
              data-aos="fade-right"
            >
              <ButtonText>Become a partner</ButtonText>
            </JoinButton>
          </ButtonWrapper>
        </RowContainerBetween>

        <GSwipePartnersStyles />
      </PartnersSectionWrapper>
    </>
  );
};

export default PartnersSection;

