import React, { useEffect, useState } from "react";
import {
  HomeScreenContainer,
  HomeScreenContent,
  SlideContent,
  StyledSlide,
  StyledSwiper,
} from "./styles";
import Header from "../../components/Header";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { useSwiperSlide } from 'swiper/react';

import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"

function HomeScreen() {
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10",
    "Slide 11",
    "Slide 12",
    "Slide 13",
    "Slide 14",
    "Slide 15",
    "Slide 16",
    "Slide 17",
    "Slide 18",
    "Slide 19",
    "Slide 20",
  ];

  const swiperSlide = useSwiperSlide();

  return (
    <>
      <HomeScreenContainer>
        <Header />
        <HomeScreenContent>
          
            <StyledSwiper
              spaceBetween={50}
              slidesPerView={1.5}
              loop
              speed={500}
              centeredSlides
              centeredSlidesBounds
              breakpoints= {{

                640: {
                    slidesPerView: 2.5,
                },
                768: {
                    slidesPerView: 3.5,
                },
                1080: {
                    slidesPerView: 4.5,
                },
                1280: {
                    slidesPerView: 5.5,
                }}
                
            }
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
          }}
            >
              {slides.map((slideContent, index) => (
                <StyledSlide key={slideContent} virtualIndex={index}>
                  {({ isActive }) => (
                    <SlideContent isActive={isActive}>
                    <h1>{slideContent}</h1>
                    <h2>dftyhjgfdrfghyjknbvcdfghjk</h2>
                  </SlideContent>
                  )}
                  
                </StyledSlide>
              ))}
            </StyledSwiper>
        </HomeScreenContent>
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
