import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  Bullet,
  ChooseText,
  ChooseWrapper,
  ChooserContainer,
  Label,
  Line,
  LineWrapper,
  SectionContainer,
  SectionContent,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [transform, setTransform] = useState("scaleY(0)");
  const [isDeveloper, setisDeveloper] = useState(true);

  const lineRef = useRef(null);
  const lineInViewport1 = useIsInViewport(lineRef);

  useEffect(() => {
    if (lineInViewport1) {
      setTransform("scaleY(1)");
    } else if (!lineInViewport1) {
      setTransform("scaleY(0)");
    }
  }, [lineInViewport1]);

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  return (
    <SectionContainer>
      <LineWrapper>
        <Bullet />
        <Line ref={lineRef} transform={transform} />
      </LineWrapper>
      <SectionContent>
        <Label>Choose</Label>
        <ChooserContainer>
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
    </SectionContainer>
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
