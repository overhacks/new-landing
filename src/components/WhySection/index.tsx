import React, { useEffect, useRef, useState } from "react";
import {
  Banner,
  BulletWrapper,
  CardsContainer,
  CenteredLine,
  LineCenter,
  LineLeft,
  LineLeftContainer,
  LineLeftMobileLast,
  LineLeftWrapper,
  PulseContainer,
  RowContainer,
  SubTitleContainer,
  TurnLineHalf,
  TurnLineHalfContainer,
  WhyCard,
  WhyCardWrapper,
  WhyCardsSection,
  WhyColumn,
  WhySubtitle,
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
  const [transform2, setTransform2] = useState("scaleY(0)");
  const [transform3, setTransform3] = useState("scaleY(0)");

  const lineHalfStartRef = useRef(null);
  const lineHalf2StartRef = useRef(null);
  const lineHalfInViewport = useIsInViewport(lineHalfStartRef);
  const lineHalf2InViewport = useIsInViewport(lineHalf2StartRef);

  const line1StartRef = useRef(null);
  const line2StartRef = useRef(null);
  const line3StartRef = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);
  const lineInViewport2 = useIsInViewport(line2StartRef);
  const lineInViewport3 = useIsInViewport(line3StartRef);

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

      <CardsContainer>
        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
           {isSmallScreen && <LineLeft transform={transform2} />}
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Easy to register"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize="30px"
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="10%" src={EasyImg} />}

            <WhyColumn ref={line2StartRef}>
              <SubTitle
                text="1. Choose your skills"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize="25px"
              />
              <SubTitle
                text="2. Create your project"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize="25px"
              />
              <SubTitle
                text="3. DONE"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize="25px"
                
              />
            </WhyColumn>

            {isSmallScreen && <Banner width="50%" src={EasyImg} />}
          </WhyCard>
        </WhyCardWrapper>

        { !isSmallScreen && <LineLeftWrapper>
          <LineLeftContainer>
            <LineLeft transform={transform2} />
          </LineLeftContainer>
        </LineLeftWrapper>}

        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
            {isSmallScreen && <LineLeft transform={transform3} />}
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Team matching"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize="30px"
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="10%" src={Puzzle} />}

            <WhyTextContainer ref={line3StartRef}>
              <SubTitle
                text="Matchmaking for skilled players to team up and complete bounties!"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize="25px"
              />
            </WhyTextContainer>

            {isSmallScreen && (
              <Banner width="45%" src={Puzzle} marginBottom="22px" />
            )}
          </WhyCard>
        </WhyCardWrapper>

        { !isSmallScreen && <LineLeftWrapper>
          <LineLeftContainer>
            <LineLeftMobileLast transform={transform3} />
          </LineLeftContainer>
        </LineLeftWrapper>}

        <WhyCardWrapper>
          <LineLeftContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
            {isSmallScreen && <LineLeft transform={transform3} />}
          </LineLeftContainer>
          <WhyCard data-aos="fade-right">
            <SubTitleContainer>
              <AnySizeTitle
                text="Project incubation"
                color={webColors.WhyCardText}
                alignSelf="left"
                fontSize="30px"
              />
            </SubTitleContainer>

            {!isSmallScreen && <Banner width="10%" src={Cash} />}

            <WhyTextContainer>
              <SubTitle
                text="As well as POST-HACKATHON support for the project and opportunity to work for a sponsor company"
                textAlign="left"
                color={webColors.WhyCardText}
                fontSize="25px"
              />
            </WhyTextContainer>
            {isSmallScreen && <Banner width="45%" src={Cash} />}
          </WhyCard>
        </WhyCardWrapper>
      </CardsContainer>

      <TurnLineHalfContainer>
        <TurnLineHalf ref={lineHalf2StartRef}>
          {lineHalf2InViewport ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 590 360"
              fill="none"
            >
              <path
                className="path"
                d="M589 360V291.056V232.112C589 212.23 572.882 196.112 553 196.112H37C17.1177 196.112 1 179.994 1 160.112L1 0"
                stroke="url(#paint0_linear_1501_536)"
                stroke-opacity="0.4"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1501_536"
                  x1="589.499"
                  y1="386"
                  x2="0.999976"
                  y2="29"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6100FF" />
                  <stop offset="0.505208" stop-color="#2622FA" />
                  <stop
                    offset="0.807292"
                    stop-color="#0117DD"
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
    </WhyCardsSection>
  );
};

export default WhySection;
