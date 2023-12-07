import React, { useEffect, useState, useRef, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import {
  AnimatedBulletContainer,
  AnimatedBulletContainerRight,
  ApplyRow,
  BackgroundStar,
  Bullet,
  BulletContainer,
  BulletWrapper,
  Button,
  ButtonText,
  ButtonWrapper,
  CenteredLine,
  ChooseSectionContainer,
  ChooseText,
  ChooseWrapper,
  ChooserContainer,
  Description,
  DescriptionB,
  DescriptionRight,
  HeroSectionsWrapper,
  HeroSubTitle,
  Label,
  Line,
  LineWrapper,
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
import ApplyButtonBackgroundSvg from "../../assets/img/applyheroBackgroubd.svg";

const HeroSection = () => {
  const [transform, setTransform] = useState("scaleY(0)");

  const [isDeveloper, setisDeveloper] = useState(true);

  const line1StartRef = useRef(null);
  const lineTurnRef = useRef(null);

  const lineTurnRef2 = useRef(null);

  const lineTurnRef3 = useRef(null);

  const lineInViewport1 = useIsInViewport(line1StartRef);

  const lineTurnInViewport1 = useIsInViewport(lineTurnRef);
  const lineTurnInViewport2 = useIsInViewport(lineTurnRef2);
  const lineTurnInViewport3 = useIsInViewport(lineTurnRef3);

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
          <DescriptionRight data-aos="fade-right">
            Find like-minded people and teammates for your future startup?
          </DescriptionRight>

          <AnimatedBulletContainerRight>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
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
          <AnimatedBulletContainerRight>
            <PulseContainer>
              <BulletWrapper src={HeroBulletSVG} />
            </PulseContainer>
          </AnimatedBulletContainerRight>

          <Description data-aos="fade-right">
            Earn money and recognition?
          </Description>
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
        <ButtonWrapper>
          <Button
            href="https://t.me/OverhacksBot"
            backgroundImg={ApplyButtonSvg}
          >
            <ButtonText>Apply</ButtonText>
          </Button>
          <BackgroundStar backgroundImg={ApplyButtonBackgroundSvg} />
        </ButtonWrapper>
      </ApplyRow>

      <HeroSubTitle data-aos="fade-right">
        Hackathon’s organisation
      </HeroSubTitle>
      <CenteredLine>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="93"
          viewBox="0 0 2 93"
          fill="none"
        >
          <path
            className="path"
            d="M1 0L1 93"
            stroke="url(#paint0_linear_1204_2543)"
            stroke-opacity="0.4"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1204_2543"
              x1="1.5"
              y1="-2.73184e-10"
              x2="1.5"
              y2="93"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2238FA" stop-opacity="0.72" />
              <stop offset="0.505208" stop-color="#2622FA" />
              <stop offset="1" stop-color="#141A56" />
            </linearGradient>
          </defs>
        </svg>
      </CenteredLine>
      <BulletContainer>
        <BulletWrapper src={HeroBulletSVG} />
      </BulletContainer>
      
      <CenteredLine>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="110"
          viewBox="0 0 3 110"
          fill="none"
        >
          <path
            className="path"
            d="M2 0L1 110"
            stroke="url(#paint0_linear_1204_2544)"
            stroke-opacity="0.4"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1204_2544"
              x1="2.49998"
              y1="0.00454527"
              x2="1.49998"
              y2="110.005"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#111336" />
              <stop offset="0.505208" stop-color="#2622FA" />
              <stop
                offset="0.807292"
                stop-color="#0117DD"
                stop-opacity="0.63"
              />
            </linearGradient>
          </defs>
        </svg>
      </CenteredLine>

      <HeroSubTitle data-aos="fade-right">
        Post hackathon projects’ support
      </HeroSubTitle>
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
