import React, { useEffect, useRef } from "react";
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
  PhotoHorizontal,
  PhotoVertical,
  Row,
  RowAbout,
  SectionWrapper,
  Spider,
  TextBlock,
  TitleWrapper,
} from "./styles";

const AboutSection = () => {
  const { webColors } = useColorTheme();

  useEffect(() => {
    AOS.init({
      duration : 200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <div data-aos="fade-right">
        <AnySizeTitle text="AOS ANIMATION" color="#E7FFB0" alignSelf="left" />
      </div> */}

      <Row data-aos="fade-right">
        <SubTitleRow text="About" />
      </Row>

      <SectionWrapper id="about">
        <AboutWrapper>
          <RowAbout>
            <PhotoHorizontal imgSrc={About1} />
            <ColumnText>
              <AboutText data-aos="fade-up">
                Overhacks your go-to platform for hackathons focused on
                empowering enthusiastic individuals to unleash creativity and
                ace their skills and knowledge to drive innovation in{" "}
                <AboutTextB>WEB3</AboutTextB> world!
              </AboutText>
            </ColumnText>
          </RowAbout>
          <RowAbout>
            <ColumnTextLarge>
              <TextBlock>
                <TitleWrapper data-aos="fade-down">
                  <AnySizeTitle
                    text="OUR MISSOIN"
                    color="#E7FFB0"
                    alignSelf="left"
                  />
                </TitleWrapper>

                <AboutText data-aos="fade-right">
                  Our mission to empower and inspire enthusiastic individuals,
                  fostering their creativity and helping them excel in web3
                  technologies through immersive hackathons
                </AboutText>
              </TextBlock>
              <TextBlock>
                <TitleWrapper data-aos="fade-down">
                  <AnySizeTitle
                    text="VISION"
                    color="#E7FFB0"
                    alignSelf="left"
                  />
                </TitleWrapper>

                <AboutText data-aos="fade-right">
                  We envision a world where every developer on{" "}
                  <AboutTextB>OVERHACKS</AboutTextB> becomes a catalyst for
                  innovation, shaping the future of the web3 landscape with
                  their skills and knowledge
                </AboutText>
              </TextBlock>
            </ColumnTextLarge>
            <PhotoVertical imgSrc={About2} />
          </RowAbout>
        </AboutWrapper>

        <Spider data-aos="fade-up" src={SpiderPng} />
      </SectionWrapper>
    </>
  );
};

export default AboutSection;
