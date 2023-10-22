import React, { useEffect, useState } from "react";
import {
  HomeScreenContainer,
  HomeScreenContent,
} from "./styles";
import Header from "../../components/Header";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import { useSwiperSlide } from "swiper/react";

import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SubTitle from "../../components/SubTitle";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../constants/routes";
import Hackatons from "../HackatonsScreen";

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

  function renderRoutes() {
    return (
      <Routes>
        <Route path={`${routes.hackatons}/`} element={<Hackatons />} />
      </Routes>
    );
  }

  return (
    <>
      <HomeScreenContainer>
        <Header />
        <HomeScreenContent>{renderRoutes()}</HomeScreenContent>
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
