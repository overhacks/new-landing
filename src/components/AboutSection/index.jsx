import React, { useEffect, useRef, useState } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import About1 from "../../assets/img/about1.png";
import About2 from "../../assets/img/about2.png";
import SpiderPng from "../../assets/img/overhacksSpider.png";

import AOS from "aos";
import "aos/dist/aos.css";

import SubTitle from "../SubTitle";
import {
  AboutHeader,
  AboutText,
  AboutTextB,
  AboutWrapper,
  ColumnText,
  ColumnTextLarge,
  FirstAboutWrapper,
  PhotoHorizontal,
  PhotoVertical,
  Row,
  SecondAboutWrapper,
  SectionWrapper,
  Spider,
  TextBlock,
  TitleWrapper,
} from "./styles";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const AboutSection = () => {
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

  return (
    <>
      <Row data-aos="fade-right">
        <SubTitleRow text="About" />
      </Row>

      <SectionWrapper id="about">
        <AboutWrapper>
          <FirstAboutWrapper>
            {!isSmallScreen && <PhotoHorizontal imgSrc={About1} />}
            <ColumnText>
              <AboutText data-aos="fade-up">
                <AboutTextB>Overhacks</AboutTextB> your go-to{" "}
                <AboutTextB>platform for hackathons</AboutTextB> focused on
                empowering enthusiastic individuals to unleash creativity and
                ace their skills and knowledge to drive innovation in{" "}
                <AboutTextB>WEB3</AboutTextB> world!
              </AboutText>
            </ColumnText>
            {isSmallScreen && (
              <PhotoHorizontal imgSrc={About1} data-aos="fade-up" />
            )}
          </FirstAboutWrapper>
          <SecondAboutWrapper>
            <ColumnTextLarge>
              <TextBlock>
                {!isSmallScreen && (
                  <TitleWrapper data-aos="fade-down">
                    <AnySizeTitle
                      text="OUR MISSOIN"
                      color="#E7FFB0"
                      alignSelf="left"
                    />
                  </TitleWrapper>
                )}

                <AboutText data-aos="fade-right">
                  <AboutTextB>Our mission</AboutTextB> to empower and inspire
                  enthusiastic individuals, fostering their creativity and
                  helping them excel in web3 technologies through{" "}
                  <AboutTextB>immersive hackathons</AboutTextB>
                </AboutText>
              </TextBlock>
              {isSmallScreen && <PhotoHorizontal imgSrc={About2} backgroundSize="cover" data-aos="fade-up"/>}
              <TextBlock>
                {!isSmallScreen && (
                  <TitleWrapper data-aos="fade-down">
                    <AnySizeTitle
                      text="VISION"
                      color="#E7FFB0"
                      alignSelf="left"
                    />
                  </TitleWrapper>
                )}

                <AboutText data-aos="fade-right">
                  We envision a world where every developer on{" "}
                  <AboutTextB>OVERHACKS</AboutTextB> becomes a catalyst for
                  innovation, shaping the future of the web3 landscape with
                  their skills and knowledge
                </AboutText>
              </TextBlock>
            </ColumnTextLarge>
            {!isSmallScreen && <PhotoVertical imgSrc={About2} />}
          </SecondAboutWrapper>
        </AboutWrapper>

        <Spider data-aos="fade-up" src={SpiderPng} />
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
