import React, { useEffect, useRef } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import About1 from "../../assets/img/about1.png";
import About2 from "../../assets/img/about2.png";

import SubTitle from "../SubTitle";
import {
  AboutWrapper,
  ColumnText,
  ColumnTextLarge,
  PhotoHorizontal,
  PhotoVertical,
  Row,
  RowAbout,
  SectionWrapper,
  TextBlock,
} from "./styles";

const AboutSection = () => {
  const { webColors } = useColorTheme();
  return (
    <SectionWrapper id="about">
      <Row>
        <AnySizeTitle
          text="About"
          color="#E7FFB0"
          fontSize="100px"
          alignSelf="left"
        />
      </Row>

      <AboutWrapper>
        <RowAbout>
          <PhotoHorizontal imgSrc={About1} />
          <ColumnText>
            <SubTitle
              text="Overhacks    your go-to platform for hackathons focused on empowering enthusiastic individuals to unleash creativity and ace their skills and knowledge to drive innovation in WEB3 world!"
              color="#E7FFB0"
              textAlign="left"
              maxWidth="100%"
              fontSize="25px"
            />
          </ColumnText>
        </RowAbout>
        <RowAbout>
          <ColumnTextLarge>
            <TextBlock>
              <AnySizeTitle
                text="OUR MISSOIN"
                color="#E7FFB0"
                alignSelf="left"
              />
              <SubTitle
                text="Our mission    to empower and inspire enthusiastic individuals, fostering their creativity and helping them excel in web3 technologies through immersive hackathons"
                color="#E7FFB0"
                textAlign="left"
                maxWidth="100%"
                fontSize="25px"
              />
            </TextBlock>
            <TextBlock>
              <AnySizeTitle
                text="VISION"
                color="#E7FFB0"
                alignSelf="left"
              />
              <SubTitle
                text="We envision a world where every developer on OVERHACKS becomes a catalyst for innovation, shaping the future of the web3 landscape with their skills and knowledge"
                color="#E7FFB0"
                textAlign="left"
                maxWidth="100%"
                fontSize="25px"
              />
            </TextBlock>
          </ColumnTextLarge>
          <PhotoVertical imgSrc={About2}/>
        </RowAbout>
      </AboutWrapper>
    </SectionWrapper>
  );
};

export default AboutSection;
