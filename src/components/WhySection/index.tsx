import React, { useEffect, useRef, useState } from "react";
import {
  Banner,
  BulletWrapper,
  CardsContainer,
  CenteredLine,
  LineCenter,
  LineLeftContainer,
  PulseContainer,
  RowContainer,
  SubTitleContainer,
  WhyCard,
  WhyCardWrapper,
  WhyCardsSection,
  WhyColumn,
  WhyTextContainer,
} from "./styles";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import EasyImg from "../../assets/img/Easy.png";

import Puzzle from "../../assets/img/puzzle.png";

import Cash from "../../assets/img/evro.png";
import SubTitle from "../SubTitle";
import HeroBulletSVG from "../../assets/img/heroBullet.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import useIsInViewport from "../../hooks/viewPort";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const WhySection = () => {
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
    <WhyCardsSection>
      <CenteredLine ref={line1StartRef}>
        <LineCenter transform={transform} />
      </CenteredLine>

      <RowContainer data-aos="fade-right">
        <SubTitleRow text="Why do people choose Overhacks?" />
      </RowContainer>

      <CardsContainer>
        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Easy to register"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize={isSmallScreen ? "30px" : ""}
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="15%" src={EasyImg} />}

            <WhyColumn>
              <SubTitle
                text="1. Choose your skills"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize={isSmallScreen ? "22px" : ""}
              />
              <SubTitle
                text="2. Create your project"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize={isSmallScreen ? "22px" : ""}
              />
              <SubTitle
                text="3. DONE"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize={isSmallScreen ? "22px" : ""}
              />
            </WhyColumn>

            {isSmallScreen && <Banner width="65%" src={EasyImg} />}
          </WhyCard>
        </WhyCardWrapper>
        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Team matching"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize={isSmallScreen ? "30px" : ""}
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="15%" src={Puzzle} />}

            <WhyTextContainer>
              <SubTitle
                text="Matchmaking for skilled players to team up and complete bounties!"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize={isSmallScreen ? "22px" : ""}
              />
            </WhyTextContainer>

            {isSmallScreen && (
              <Banner width="55%" src={Puzzle} marginBottom="22px" />
            )}
          </WhyCard>
        </WhyCardWrapper>
        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Project incubation"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize={isSmallScreen ? "30px" : ""}
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="15%" src={Cash} />}

            <WhyTextContainer>
              <SubTitle
                text="As well as POST-HACKATHON support for the project and opportunity to work for a sponsor company"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize={isSmallScreen ? "22px" : ""}
              />
            </WhyTextContainer>
            {isSmallScreen && <Banner width="55%" src={Cash} />}
          </WhyCard>
        </WhyCardWrapper>
      </CardsContainer>
    </WhyCardsSection>
  );
};

export default WhySection;
