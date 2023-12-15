import React, { useEffect, useState, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import {
  AnimatedBulletContainer,
  AnimatedBulletContainerRight,
  ApplyRow,
  BackgroundContainer,
  BackgroundStar,
  Bullet,
  BulletContainer,
  BulletWrapper,
  Button,
  ButtonMobile,
  ButtonText,
  ButtonWrapper,
  ButtonWrapperMobile,
  CenteredLine,
  ChooseSectionContainer,
  ChooseText,
  ChooseWrapper,
  ChooserContainer,
  Description,
  DescriptionB,
  DescriptionRight,
  EndLineContainer,
  HeroEndContainer,
  HeroSectionsWrapper,
  HeroSubTitle,
  Label,
  Line,
  LineEnd,
  LineWrapper,
  LongLineEnd,
  MobileButton,
  PromoText,
  PulseCircle,
  PulseContainer,
  RowContainer,
  RowContainerRight,
  SectionContent,
  TurnContainer,
  TurnLine,
  TurnLineHalf,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBulletSVG from "../../assets/img/heroBullet.svg";
import ApplyButtonSvg from "../../assets/img/applyHeroButton.svg";
import ApplyButtonMobileSvg from "../../assets/img/applyMobile.svg";
import ApplyButtonBackgroundSvg from "../../assets/img/applyheroBackgroubd.svg";

import LeftLight from "../../assets/img/LeftLight.png";
import RightLight from "../../assets/img/rightLight.png";
import useIsInViewport from "../../hooks/viewPort";

import HeroLight1 from "../../assets/img/HeroLight1.svg";
import HeroLight2 from "../../assets/img/HeroLight2.svg";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const HeroSection = () => {
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

  const [transform, setTransform] = useState("scaleY(0)");
  const [transform2, setTransform2] = useState("scaleY(0)");
  const [transform3, setTransform3] = useState("scaleY(0)");
  const [transform4, setTransform4] = useState("scaleY(0)");

  const [isDeveloper, setisDeveloper] = useState(true);

  const line1StartRef = useRef(null);
  const line2StartRef = useRef(null);
  const line3StartRef = useRef(null);
  const line4StartRef = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);
  const lineInViewport2 = useIsInViewport(line2StartRef);
  const lineInViewport3 = useIsInViewport(line3StartRef);
  const lineInViewport4 = useIsInViewport(line4StartRef);

  const lineTurnRef = useRef(null);
  const lineTurnRef2 = useRef(null);
  const lineTurnRef3 = useRef(null);

  const lineTurnInViewport1 = useIsInViewport(lineTurnRef);
  const lineTurnInViewport2 = useIsInViewport(lineTurnRef2);
  const lineTurnInViewport3 = useIsInViewport(lineTurnRef3);

  useEffect(() => {
    if (lineInViewport1) {
      setTransform("scaleY(1)");
    }
  }, [lineInViewport1]);

  useEffect(() => {
    if (lineInViewport2) {
      setTransform2("scaleY(1)");
    }
  }, [lineInViewport2]);

  useEffect(() => {
    if (lineInViewport3) {
      setTransform3("scaleY(1)");
    }
  }, [lineInViewport3]);

  useEffect(() => {
    if (lineInViewport4) {
      setTransform4("scaleY(1)");
    }
  }, [lineInViewport4]);

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);




  const phrases = ["developer", "manager", "designer"];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCharIndex(0);
          setPhraseIndex(
            (prevPhraseIndex) => (prevPhraseIndex + 1) % phrases.length
          );
          setText("");
        }, 2000); // Delay before erasing
      }
    }, 300); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [charIndex, phraseIndex]);

  return (
    <HeroSectionsWrapper>
      <ChooseSectionContainer>
        <LineWrapper>
          <Bullet />
          <Line transform={transform} />
        </LineWrapper>
        <SectionContent>
          <Label>Choose</Label>
          <ChooserContainer ref={line1StartRef}>
            {!isSmallScreen && (
              <>
                <ChooseWrapper
                  onClick={() => {
                    setisDeveloper(true);
                  }}
                >
                  {isDeveloper && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M11 1L1 7L11 13"
                        stroke="#419261"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <ChooseText color={isDeveloper ? "#2DC669" : "#A8A8A8"}>
                    I am a {text}
                  </ChooseText>
                  {isDeveloper && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M1 13L11 7L1 1"
                        stroke="#419261"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </ChooseWrapper>
                <ChooseWrapper
                  onClick={() => {
                    setisDeveloper(false);
                  }}
                >
                  {!isDeveloper && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M11 1L1 7L11 13"
                        stroke="#419261"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <ChooseText color={isDeveloper ? "#A8A8A8" : "#2DC669"}>
                    I am a company
                  </ChooseText>
                  {!isDeveloper && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M1 13L11 7L1 1"
                        stroke="#419261"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </ChooseWrapper>
              </>
            )}

            {isSmallScreen && (
              <>
                <MobileButton
                  onClick={() => {
                    setisDeveloper(true);
                  }}
                >
                  <ChooseText color={isDeveloper ? "#2DC669" : "#A8A8A8"}>
                    I am a {text}
                  </ChooseText>
                </MobileButton>
                <MobileButton
                  onClick={() => {
                    setisDeveloper(false);
                  }}
                >
                  <ChooseText color={isDeveloper ? "#A8A8A8" : "#2DC669"}>
                    I am a company
                  </ChooseText>
                </MobileButton>
              </>
            )}
          </ChooserContainer>
        </SectionContent>
      </ChooseSectionContainer>

      <TurnContainer>
        <RowContainer>
          <AnimatedBulletContainer backgroundImg={HeroLight1}>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <PulseCircle key={index} delay={index} size={300} />
              ))}
            </PulseContainer>
          </AnimatedBulletContainer>

          {isDeveloper ? (
            <Description data-aos="fade-right">
              Do you want to develop your skills and try yourself in{" "}
              <DescriptionB>web3</DescriptionB>?
            </Description>
          ) : (
            <Description data-aos="fade-right">
              Do you need to <DescriptionB>solve</DescriptionB> dev{" "}
              <DescriptionB>problems</DescriptionB>?
            </Description>
          )}
        </RowContainer>
        
        <TurnLine ref={lineTurnRef}>
          {lineTurnInViewport1 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1171 437"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                className="path"
                d="M1 0V170.508C1 190.391 17.1177 206.508 37 206.508H1131C1152.54 206.508 1170 223.969 1170 245.508V437"
                stroke="#6100FF"
                stroke-opacity="0.41"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1171 437"
              fill="none"
              preserveAspectRatio="none"
            ></svg>
          )}
        </TurnLine>
      </TurnContainer>

      <TurnContainer>
        <RowContainerRight>
          {isDeveloper ? (
            <DescriptionRight data-aos="fade-right">
              Find like-minded people and teammates for your future startup?
            </DescriptionRight>
          ) : (
            <DescriptionRight data-aos="fade-right">
              Attract enthusiast's attentionto build infrastructure on your
              Tech?
            </DescriptionRight>
          )}

          <AnimatedBulletContainerRight backgroundImg={HeroLight2}>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <PulseCircle key={index} delay={index} size={300} />
              ))}
            </PulseContainer>
          </AnimatedBulletContainerRight>
        </RowContainerRight>

        <TurnLine ref={lineTurnRef2}>
          {lineTurnInViewport2 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1172 330"
              fill="none"
            >
              <path
                className="path"
                d="M1171 0V157.226C1171 177.108 1154.88 193.226 1135 193.226H40C18.4609 193.226 0.999965 210.687 0.999965 232.226V330"
                stroke="url(#paint0_linear_1204_2651)"
                stroke-opacity="0.4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1204_2651"
                  x1="1171"
                  y1="32.1827"
                  x2="-7.73797"
                  y2="320.257"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6100FF" />
                  <stop offset="1" stop-color="#FA2270" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1172 330"
              fill="none"
            ></svg>
          )}
        </TurnLine>
      </TurnContainer>

      <TurnContainer>
        <RowContainer>
          <AnimatedBulletContainerRight backgroundImg={HeroLight1}>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <PulseCircle key={index} delay={index} size={300} />
              ))}
            </PulseContainer>
          </AnimatedBulletContainerRight>

          {isDeveloper ? (
            <Description data-aos="fade-right">
              Earn money and recognition?
            </Description>
          ) : (
            <Description data-aos="fade-right">
              Build a trusting community around your brand?
            </Description>
          )}
        </RowContainer>

        <TurnLineHalf ref={lineTurnRef3}>
          {lineTurnInViewport3 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 589 254"
              fill="none"
            >
              <path
                d="M1 1.19209e-06V119.26C1 140.799 18.4609 158.26 40 158.26L549 158.26C570.539 158.26 588 175.721 588 197.26V254"
                stroke="url(#paint0_linear_1204_2540)"
                className="path"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1204_2540"
                  x1="783.017"
                  y1="402.449"
                  x2="-20.7929"
                  y2="114.034"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#222BFA" stop-opacity="0" />
                  <stop offset="0.557292" stop-color="#4C00C8" />
                  <stop offset="1" stop-color="#C8004A" stop-opacity="0.41" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 589 254"
              fill="none"
            ></svg>
          )}
        </TurnLineHalf>
      </TurnContainer>

      <PromoText data-aos="fade-right">hackathon with overhacks</PromoText>

      <ApplyRow>
        {!isSmallScreen && (
          <ButtonWrapper>
            <Button
              href="https://t.me/OverhacksBot"
              backgroundImg={ApplyButtonSvg}
            >
              <ButtonText>Apply</ButtonText>
            </Button>
            <BackgroundStar backgroundImg={ApplyButtonBackgroundSvg} />
          </ButtonWrapper>
        )}

        {isSmallScreen && (
          <ButtonWrapperMobile>
            <ButtonMobile
              href="https://t.me/OverhacksBot"
              backgroundImg={ApplyButtonMobileSvg}
            >
              <ButtonText>Apply</ButtonText>
            </ButtonMobile>
          </ButtonWrapperMobile>
        )}
      </ApplyRow>

      <HeroSubTitle ref={line2StartRef} data-aos="fade-right">
        Hackathon’s organisation
      </HeroSubTitle>
      <CenteredLine>
        <LineEnd transform={transform2}></LineEnd>
      </CenteredLine>
      <BulletContainer>
        <BulletWrapper ref={line3StartRef} src={HeroBulletSVG} />
      </BulletContainer>

      <CenteredLine>
        <LineEnd transform={transform3}></LineEnd>
      </CenteredLine>

      <HeroSubTitle data-aos="fade-right">
        Post hackathon projects’ support
      </HeroSubTitle>

      <HeroEndContainer>
        <BackgroundContainer background={isSmallScreen ? undefined : LeftLight} />
        <EndLineContainer>
          <LongLineEnd ref={line4StartRef} transform={transform4} />
        </EndLineContainer>
        <BackgroundContainer background={isSmallScreen ? undefined : RightLight} />
      </HeroEndContainer>
    </HeroSectionsWrapper>
  );
};

export default HeroSection;
