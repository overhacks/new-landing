import React, { useEffect } from "react";
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

const WhySection = () => {
  const { webColors } = useColorTheme();

  useEffect(() => {
    AOS.init({
      duration : 500
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
          <SubTitleContainer data-aos="fade-right">
            <AnySizeTitle
              text="Easy to register"
              maxWidth="25%"
              color={webColors.WhyCardText}
              alignSelf="left"
            />
          </SubTitleContainer>

          <Banner width="25%" imgSrc={EasyImg} />

          <WhyColumn data-aos="fade-right">
            <SubTitle
              text="1. Choose your skills"
              textAlign="left"
              color={webColors.WhyCardText}
            />
            <SubTitle
              text="2. Create your project"
              textAlign="left"
              color={webColors.WhyCardText}
            />
            <SubTitle
              text="3. DONE"
              textAlign="left"
              color={webColors.WhyCardText}
            />
          </WhyColumn>
        </WhyCard>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
          data-aos="fade-right"
        >
          <SubTitleContainer data-aos="fade-right">
            <AnySizeTitle
              text="Team matching"
              color={webColors.WhyCardText}
              alignSelf="left"
            />
          </SubTitleContainer>

          <Banner width="25%" imgSrc={Puzzle} />

          <WhyTextContainer data-aos="fade-right">
            <SubTitle
            text="Matchmaking for skilled players to team up and complete bounties!"
            textAlign="left"
            color={webColors.WhyCardText}
          />
          </WhyTextContainer>
          
        </WhyCard>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
          data-aos="fade-right"
        >
          <SubTitleContainer data-aos="fade-right">
            <AnySizeTitle
              text="Project incubation"
              color={webColors.WhyCardText}
              alignSelf="left"
            />
          </SubTitleContainer>

          <Banner width="25%" imgSrc={Cash} />

          <WhyTextContainer data-aos="fade-right">

            <SubTitle
            text="As well as POST-HACKATHON support for the project and opportunity to work for a sponsor company"
            textAlign="left"
            color={webColors.WhyCardText}
          />
          </WhyTextContainer>
          
        </WhyCard>
      </CardsContainer>
    </WhyCardsSection>
  );
};

export default WhySection;
