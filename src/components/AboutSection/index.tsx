import React, { useEffect, useRef, useState } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import About1 from "../../assets/img/About1Image.jpg";
import About2 from "../../assets/img/About2Image.jpg";
import SpiderPng from "../../assets/img/overhacksSpider.png";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  AboutText,
  AboutTextB,
  AboutWrapper,
  CenteredLine,
  ColumnText,
  ColumnTextLarge,
  FirstAboutWrapper,
  LineCenter,
  PhotoHorizontal,
  PhotoVertical,
  Row,
  SecondAboutWrapper,
  SectionWrapper,
  Spider,
  TextBlock,
  TitleWrapper,
} from "./styles";
import useIsInViewport from "../../hooks/viewPort";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const AboutSection = () => {
  const { webColors } = useColorTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const [transform, setTransform] = useState("scaleY(0)");

  const line1StartRef = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);

  useEffect(() => {
    if (lineInViewport1) {
      setTransform("scaleY(1)");
    }
  }, [lineInViewport1]);

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
      <CenteredLine ref={line1StartRef}>
        <LineCenter transform={transform} />
      </CenteredLine>

      <Row data-aos="fade-right">
        <SubTitleRow text="About" />
      </Row>

      <SectionWrapper id="about">
        <AboutWrapper>
          <FirstAboutWrapper>
            <TextBlock>
              <AboutText data-aos="fade-right">
                Overhacks your go-to platform for hackathons focused on
                empowering enthusiastic individuals to unleash creativity and
                ace their skills and knowledge to drive innovation in{" "}
                <AboutTextB>WEB3</AboutTextB> world!
              </AboutText>
            </TextBlock>

            <PhotoHorizontal imgSrc={About1} data-aos="fade-right" />
          </FirstAboutWrapper>
          <SecondAboutWrapper>
            <ColumnTextLarge>
              <TextBlock>
                <AboutText data-aos="fade-right">
                  Our mission to empower and inspire enthusiastic individuals,
                  fostering their creativity and helping them excel in web3
                  technologies through immersive hackathons
                </AboutText>
              </TextBlock>
              <PhotoHorizontal
                imgSrc={About2}
                backgroundSize="cover"
                data-aos="fade-right"
              />
              <TextBlock>
                <AboutText data-aos="fade-right">
                  Our mission to empower and inspire enthusiastic individuals,
                  fostering their creativity and helping them excel in web3
                  technologies through immersive hackathons
                </AboutText>
              </TextBlock>
            </ColumnTextLarge>
          </SecondAboutWrapper>
        </AboutWrapper>

        <Spider data-aos="fade-right" src={SpiderPng} />
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
