import GSwipePartnersStyles, {
  Arrow,
  CubeLogo,
  JoinButton,
  PartnersSectionWrapper,
  RowContainer,
  RowContainerBetween,
  SlideContent,
  SubTitleContainer,
  SwiperContainer,
  TonanaLogo,
} from "./styles";
import React, { useEffect, useRef, useCallback } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import PartnerBackground from "../../assets/img/partnerBackground.png";
import TonanaLogoSvg from "../../assets/img/tonanabananalogo.svg";
import Cube from "../../assets/img/cubePartner.png";
import GrassCard from "../../assets/img/grassPartner.svg";
import TonCard from "../../assets/img/tonPartner.svg";
import SubTitle from "../SubTitle";
import JoinButtonPng from "../../assets/img/JoinButton.png";
import ArrowLeft from "../../assets/img/arrowLeft.svg";
import ArrowRight from "../../assets/img/arrowRight.svg";

import AOS from "aos";
import "aos/dist/aos.css";


const PartnersSection = () => {
  const swiperRef = useRef(null);
  const { webColors } = useColorTheme();

  useEffect(() => {
    AOS.init({
      // duration : 5000
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

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  const handlePrevious = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
  }, [swiperRef]);

  return (
    <PartnersSectionWrapper>
      <RowContainer data-aos="fade-right">
        <SubTitleRow text="Our partners" />
      </RowContainer>

      <SwiperContainer>
        <Arrow
          onClick={handlePrevious}
          imgSrc={ArrowLeft}
          class="swiper-button-prev-unique"
        ></Arrow>
        <swiper-container class="styled-swiper" init="false" ref={swiperRef}>
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
              <CubeLogo href="https://dedust.io/" target="_blank" imgSrc={Cube} />
            </SlideContent>
          </swiper-slide>
          <swiper-slide class="styled_slide">
            <SlideContent href="https://society.ton.org/" target="_blank" imgSrc={GrassCard}></SlideContent>
          </swiper-slide>
          <swiper-slide class="styled_slide">
            <SlideContent href="https://ton.org/" target="_blank" imgSrc={TonCard}></SlideContent>
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
              <CubeLogo href="https://dedust.io/" target="_blank" imgSrc={Cube} />
            </SlideContent>
          </swiper-slide>
          <swiper-slide class="styled_slide">
            <SlideContent href="https://society.ton.org/" target="_blank" imgSrc={GrassCard}></SlideContent>
          </swiper-slide>
          <swiper-slide class="styled_slide">
            <SlideContent href="https://ton.org/" target="_blank" imgSrc={TonCard}></SlideContent>
          </swiper-slide>
        </swiper-container>
        <Arrow
          onClick={handleNext}
          imgSrc={ArrowRight}
          class="swiper-button-next-unique"
        ></Arrow>
      </SwiperContainer>

      <RowContainerBetween>
        <SubTitleContainer data-aos="fade-down">
          <SubTitle
          text="Become our partner to be a part of trusted unity!"
          textAlign="left"
          fontSize="20px"
          color="rgba(204, 255, 90, 1)"
        />
        </SubTitleContainer>
        

        <JoinButton backgroundImg={JoinButtonPng}
        href="https://forms.gle/Exqa4wAzTi1kSzbU9"
        target="_blank"
        data-aos="fade-down">
          <SubTitle
            fontSize="25px"
            fontWeight="600"
            textAlign="left"
            color="#000"
            text="Become a partner"
            cursor="pointer"
          />
        </JoinButton>
      </RowContainerBetween>

      <GSwipePartnersStyles />
    </PartnersSectionWrapper>
  );
};

export default PartnersSection;
