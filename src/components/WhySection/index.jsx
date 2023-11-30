import React, { useEffect, useState } from "react";
import {
  Banner,
  CardsContainer,
  RowContainer,
  SubTitleContainer,
  WhyCard,
  WhyCardsSection,
  WhyColumn,
  WhyTextContainer,
} from "./styles";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import EasyImg from "../../assets/img/Easy.png";
import Puzzle from "../../assets/img/puzzle.png";
import Cash from "../../assets/img/cash.png";
import SubTitle from "../SubTitle";

import AOS from "aos";
import "aos/dist/aos.css";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

const WhySection = () => {
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
      duration : 200,
      once: true,
    });
  }, []);

  return (
    <WhyCardsSection>
      
      <RowContainer data-aos="fade-right">
        <SubTitleRow text="Why do people choose Overhacks?" />
      </RowContainer>

      <CardsContainer>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
          data-aos="fade-right"
        >
          <SubTitleContainer>
            <AnySizeTitle
              text="Easy to register"
              color={webColors.WhyCardText}
              alignSelf="left"
              fontSize={isSmallScreen ? "30px" : ""}
            />
          </SubTitleContainer>

          {!isSmallScreen && <Banner width="25%" imgSrc={EasyImg} />}

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

          {isSmallScreen && <Banner width="65%" imgSrc={EasyImg} />}
        </WhyCard>
        
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
          data-aos="fade-right"
        >
          <SubTitleContainer>
            <AnySizeTitle
              text="Team matching"
              color={webColors.WhyCardText}
              alignSelf="left"
              fontSize={isSmallScreen ? "30px" : ""}
            />
          </SubTitleContainer>

          { !isSmallScreen && <Banner width="25%" imgSrc={Puzzle} />}

          <WhyTextContainer>
            <SubTitle
            text="Matchmaking for skilled players to team up and complete bounties!"
            textAlign="left"
            color={webColors.WhyCardText}
            fontSize={isSmallScreen ? "22px" : ""}
          />
          </WhyTextContainer>
          
          { isSmallScreen && <Banner width="55%" imgSrc={Puzzle} marginBottom="22px"/>}
        </WhyCard>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
          data-aos="fade-right"
        >
          <SubTitleContainer>
            <AnySizeTitle
              text="Project incubation"
              color={webColors.WhyCardText}
              alignSelf="left"
              fontSize={isSmallScreen ? "30px" : ""}
            />
          </SubTitleContainer>

          { !isSmallScreen && <Banner width="25%" imgSrc={Cash} />}

          <WhyTextContainer >

            <SubTitle
            text="As well as POST-HACKATHON support for the project and opportunity to work for a sponsor company"
            textAlign="left"
            color={webColors.WhyCardText}
            fontSize={isSmallScreen ? "22px" : ""}
          />
          </WhyTextContainer>
          { isSmallScreen && <Banner width="55%" imgSrc={Cash} />}
        </WhyCard>
      </CardsContainer>
    </WhyCardsSection>
  );
};

export default WhySection;
