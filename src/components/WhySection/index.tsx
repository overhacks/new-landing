import {
  Banner,
  CardsContainer,
  CardsLight,
  RowContainer,
  WhyCard,
  WhyCardsSection,
  WhyColumn,
} from "./styles";
import React, { useEffect, useRef } from "react";
import SubTitleRow from "../SubTitleRow";
import { useColorTheme } from "../../hooks/useColorTheme";
import AnySizeTitle from "../Title";
import EasyImg from "../../assets/img/Easy.png";
import Puzzle from "../../assets/img/puzzle.png";
import Cash from "../../assets/img/cash.png";
import SubTitle from "../SubTitle";

const WhySection = () => {
  const { webColors } = useColorTheme();
  return (
    <WhyCardsSection>
      <RowContainer>
        <SubTitleRow text="Why do people choose Overhacks?" />
      </RowContainer>
      <CardsContainer>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
        >
          <AnySizeTitle
            text="Easy to register"
            maxWidth="25%"
            color={webColors.WhyCardText}
            alignSelf="left"
          />

          <Banner width="25%" imgSrc={EasyImg} />

          <WhyColumn>
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
        >
          <AnySizeTitle
            text="Team matching"
            maxWidth="25%"
            color={webColors.WhyCardText}
            alignSelf="left"
          />

          <Banner width="25%" imgSrc={Puzzle} />

          <SubTitle
              text="Matchmaking for skilled players to team up and complete bounties!"
              textAlign="left"
              maxWidth="30%"
              color={webColors.WhyCardText}
            />

        </WhyCard>
        <WhyCard
          backgroundColor={webColors.whyCardBackground}
          border={webColors.whyCardBorder}
        >
          <AnySizeTitle
            text="Project incubation"
            maxWidth="25%"
            color={webColors.WhyCardText}
            alignSelf="left"
          />

          <Banner width="25%" imgSrc={Cash} />

          <SubTitle
              text="As well as POST-HACKATHON support for the project and opportunity to work for a sponsor company"
              textAlign="left"
              maxWidth="30%"
              color={webColors.WhyCardText}
            />

        </WhyCard>
        <CardsLight />
      </CardsContainer>
    </WhyCardsSection>
  );
};

export default WhySection;
