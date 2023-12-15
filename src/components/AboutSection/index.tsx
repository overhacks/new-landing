import React, { useEffect, useRef, useState } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import About1 from "../../assets/img/About1Image.jpg";
import About2 from "../../assets/img/About2Image.jpg";
import SpiderPng from "../../assets/img/overhacksSpider.png";
import HeroBulletSVG from "../../assets/img/heroBullet.svg";
import BackgroundLightsLarge from "../../assets/img/LargeBackgroundLights2.png";


import AOS from "aos";
import "aos/dist/aos.css";

import {
  AboutLabel,
  AboutLightsWrapper,
  AboutText,
  AboutTextB,
  AboutTextWrapper,
  AboutWrapper,
  BulletWrapper,
  CenteredLine,
  ColumnText,
  ColumnTextLarge,
  FirstAboutWrapper,
  LineCenter,
  LineLeft,
  LineLeft3,
  LineLeft4,
  LineLeftContainer,
  LineLeftWrapper,
  PhotoHorizontal,
  PhotoVertical,
  PulseContainer,
  Row,
  SecondAboutWrapper,
  SectionWrapper,
  Spider,
  TextBlock,
  TextBlockRow,
  TitleWrapper,
  TurnLineHalf,
  TurnLineHalfContainer,
} from "./styles";
import useIsInViewport from "../../hooks/viewPort";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const AboutSection = () => {
  const { webColors } = useColorTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const [transform, setTransform] = useState("scaleY(0)");
  const [transform2, setTransform2] = useState("scaleY(0)");
  const [transform3, setTransform3] = useState("scaleY(0)");
  const [transform4, setTransform4] = useState("scaleY(0)");
  const [transform5, setTransform5] = useState("scaleY(0)");

  const line1StartRef = useRef(null);
  const line2StartRef = useRef(null);
  const line3StartRef = useRef(null);
  const line4StartRef = useRef(null);
  const line5StartRef = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);
  const lineInViewport2 = useIsInViewport(line2StartRef);
  const lineInViewport3 = useIsInViewport(line3StartRef);
  const lineInViewport4 = useIsInViewport(line4StartRef);
  const lineInViewport5 = useIsInViewport(line4StartRef);

  useEffect(() => {
    if (lineInViewport5) {
      setTransform5("scaleY(1)");
    }
  }, [lineInViewport5]);

  useEffect(() => {
    if (lineInViewport4) {
      setTransform4("scaleY(1)");
    }
  }, [lineInViewport4]);

  useEffect(() => {
    if (lineInViewport3) {
      setTransform3("scaleY(1)");
    }
  }, [lineInViewport3]);

  useEffect(() => {
    if (lineInViewport2) {
      setTransform2("scaleY(1)");
    }
  }, [lineInViewport2]);

  useEffect(() => {
    if (lineInViewport1) {
      setTransform("scaleY(1)");
    }
  }, [lineInViewport1]);

  const lineHalfStartRef = useRef(null);

  const lineHalfInViewport = useIsInViewport(lineHalfStartRef);

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

  return (
    <>

    <AboutLightsWrapper backgroundImg={BackgroundLightsLarge}>
      <CenteredLine ref={line1StartRef}>
        <LineCenter transform={transform} />
      </CenteredLine>

      <Row>
        <SubTitleRow text="About" />
      </Row>

      <TurnLineHalfContainer>
        <TurnLineHalf ref={lineHalfStartRef}>
          {lineHalfInViewport ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 591 342"
              fill="none"
            >
              <path
                d="M590 0V110.131C590 130.013 573.882 146.131 554 146.131H37C17.1178 146.131 1 162.249 1 182.131V342"
                stroke="url(#paint0_linear_1309_1539)"
                stroke-opacity="0.7"
                stroke-width="2"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1309_1539"
                  x1="590.5"
                  y1="-3.56367e-06"
                  x2="8.00031"
                  y2="536"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6100FF" stop-opacity="0.63" />
                  <stop offset="0.512857" stop-color="#6100FF" />
                  <stop
                    offset="0.945651"
                    stop-color="#6100FF"
                    stop-opacity="0.63"
                  />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 590 312"
              fill="none"
            ></svg>
          )}
        </TurnLineHalf>
      </TurnLineHalfContainer>
    </AboutLightsWrapper>
      

      <SectionWrapper id="about">
        <AboutWrapper>
          <FirstAboutWrapper>
            <TextBlockRow>
              <LineLeftContainer>
                <PulseContainer>
                  <BulletWrapper src={HeroBulletSVG} />
                </PulseContainer>
              </LineLeftContainer>
              <AboutTextWrapper>
                <AboutText data-aos="fade-right">
                  Overhacks your go-to platform for hackathons focused on
                  empowering enthusiastic individuals to unleash creativity and
                  ace their skills and knowledge to drive innovation in{" "}
                  <AboutTextB>WEB3</AboutTextB> world!
                </AboutText>
              </AboutTextWrapper>
            </TextBlockRow>

            <LineLeftWrapper>
              <LineLeftContainer ref={line2StartRef}>
                <LineLeft transform={transform2} />
              </LineLeftContainer>
            </LineLeftWrapper>

            <PhotoHorizontal imgSrc={About1} data-aos="fade-right" />
          </FirstAboutWrapper>
          <SecondAboutWrapper>
            <ColumnTextLarge>
              <LineLeftWrapper>
                <LineLeftContainer ref={line3StartRef}>
                  <LineLeft3 transform={transform3} />
                </LineLeftContainer>
              </LineLeftWrapper>

              <TextBlockRow>
                <LineLeftContainer>
                  <PulseContainer>
                    <BulletWrapper src={HeroBulletSVG} />
                  </PulseContainer>
                </LineLeftContainer>
                <AboutTextWrapper>
                  <AboutLabel data-aos="fade-right">our mission</AboutLabel>
                </AboutTextWrapper>
              </TextBlockRow>

              <LineLeftWrapper>
                <LineLeftContainer ref={line4StartRef}>
                  <LineLeft4 transform={transform4} />
                </LineLeftContainer>
                <AboutTextWrapper>
                  <AboutText data-aos="fade-right">
                    Our mission to empower and inspire enthusiastic individuals,
                    fostering their creativity and helping them excel in web3
                    technologies through immersive hackathons
                  </AboutText>
                </AboutTextWrapper>
              </LineLeftWrapper>

              <PhotoHorizontal
                imgSrc={About2}
                backgroundSize="cover"
                data-aos="fade-right"
              />

              <LineLeftWrapper>
                <LineLeftContainer ref={line5StartRef}>
                  <LineLeft3 transform={transform5} />
                </LineLeftContainer>
              </LineLeftWrapper>

              <TextBlockRow>
                <LineLeftContainer>
                  <PulseContainer>
                    <BulletWrapper src={HeroBulletSVG} />
                  </PulseContainer>
                </LineLeftContainer>
                <AboutTextWrapper>
                  <AboutLabel data-aos="fade-right">vision</AboutLabel>
                </AboutTextWrapper>
              </TextBlockRow>

              <LineLeftWrapper>
                <LineLeftContainer></LineLeftContainer>
                <AboutTextWrapper>
                  <AboutText data-aos="fade-right">
                    Our mission to empower and inspire enthusiastic individuals,
                    fostering their creativity and helping them excel in web3
                    technologies through immersive hackathons
                  </AboutText>
                </AboutTextWrapper>
              </LineLeftWrapper>
            </ColumnTextLarge>
          </SecondAboutWrapper>
        </AboutWrapper>

        <Spider data-aos="fade-right" src={SpiderPng} />
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
