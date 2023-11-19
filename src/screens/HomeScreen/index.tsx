import React, { useEffect, useState } from "react";
import {
  HomeScreenContainer,
  HomeScreenContent,
} from "./styles";
import Header from "../../components/Header";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import "swiper/css/virtual";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SubTitle from "../../components/SubTitle";
import { routes } from "../../constants/routes";
import Hackatons from "../HackatonsScreen";
import Footer from "../../components/Footer";

function HomeScreen() {


  return (
    <>
      <HomeScreenContainer>
        <Hackatons />
      </HomeScreenContainer>
    </>
  );
}

export default HomeScreen;
