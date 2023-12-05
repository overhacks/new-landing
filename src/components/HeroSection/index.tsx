import React, { useEffect, useState, useRef, useMemo } from "react";
import { Line, LineWrapper, SectionContainer, SectionContent } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [transform, setTransform] = useState("scaleY(0)");
 
  const lineRef = useRef(null);
  const lineInViewport1 = useIsInViewport(lineRef);


  useEffect(() => {
    if(lineInViewport1) {
       setTransform("scaleY(1)") 
    } else if (!lineInViewport1) {
        setTransform("scaleY(0)") 
    }
    
  }, [lineInViewport1])

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);

  return (
    <SectionContainer>
      <LineWrapper>
        <Line ref={lineRef} transform={transform} />
      </LineWrapper>
      <SectionContent></SectionContent>
    </SectionContainer>
  );
};

export default HeroSection;



function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }