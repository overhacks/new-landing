import React, { useEffect, useState, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import {
  AnimatedBulletContainer,
  Bullet,
  BulletWrapper,
  ChooseSectionContainer,
  ChooseText,
  ChooseWrapper,
  ChooserContainer,
  Description,
  DescriptionB,
  HeroSectionsWrapper,
  Label,
  Line,
  LineWrapper,
  PulseCircle,
  PulseContainer,
  RowContainer,
  SectionContent,
  TurnContainer,
  TurnLine,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBulletSVG from "../../assets/img/heroBullet.svg";

const HeroSection = () => {
  const [transform, setTransform] = useState("scaleY(0)");
  const [animationTurn, setAnimationTurn] = useState("none");

  const [isDeveloper, setisDeveloper] = useState(true);

  const line1StartRef = useRef(null);
  const lineTurnRef = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);
  const lineTurnInViewport1 = useIsInViewport(lineTurnRef);

  useEffect(() => {
    if (lineInViewport1) {
      setTransform("scaleY(1)");
    }
    // else if (!lineInViewport1) {
    //   setTransform("scaleY(0)");
    // }
  }, [lineInViewport1]);

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

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
                I am a developer
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
          </ChooserContainer>
        </SectionContent>
      </ChooseSectionContainer>

      <TurnContainer>
        <RowContainer>
          <AnimatedBulletContainer>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
              {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <PulseCircle key={index} delay={index} size={300}/>
              ))} */}
            </PulseContainer>
          </AnimatedBulletContainer>

          <Description data-aos="fade-right">
            Do you want to develop your skills and try yourself in{" "}
            <DescriptionB>web3</DescriptionB>?
          </Description>
        </RowContainer>
        <TurnLine ref={lineTurnRef}>
          {lineTurnInViewport1 && (
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
          )}
        </TurnLine>
      </TurnContainer>
    </HeroSectionsWrapper>
  );
};

export default HeroSection;

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
