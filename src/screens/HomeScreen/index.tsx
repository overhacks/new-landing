import React, { useEffect, useState } from "react";
import {
  HomeScreenContainer,
  HomeScreenContent,
  StyledSlide,
  StyledSwiper,
} from "./styles";
import Header from "../../components/Header";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { useSwiperSlide } from 'swiper/react';

import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
              modules={[Virtual]}
              spaceBetween={40}
              slidesPerView={1}
              virtual
              loop={true}
              centeredSlides={true}
              breakpoints= {{

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
                    slidesPerView: 5,
                }}
            }
            >
              {slides.map((slideContent, index) => (
                <StyledSlide key={slideContent} virtualIndex={index}>
                  <h1>{slideContent}</h1>
                </StyledSlide>
              ))}
            </StyledSwiper>
        </HomeScreenContent>
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
