import React, { useEffect, useState } from "react";
import {
  Banner,
  ButtonText,
  CardsBullet,
  CardsPoint,
  HackatonCard,
  HackatonHeader,
  HackatonRow,
  HackatonsColumn,
  HackatonsMobileSection,
  InfoColumn,
  InfoData,
  InfoLabel,
  InfoRow,
  PrizePoolWrapper,
  PrizeValue,
  SeeButtonWrapper,
  SeeMoreButton,
  Topics,
} from "./styles";
import { Hackathon } from "../../api/client";

import SeeMoreBackground from "../../assets/img/seeMore.svg";

interface HackatonsMobileProps {
  hackatons: Hackathon[];
  isOngoing: boolean;
}

const HackatonsMobile: React.FC<HackatonsMobileProps> = ({
  hackatons,
  isOngoing,
}) => {
  const [visibleCards, setVisibleCards] = useState(1);

  const handleSeeMoreClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
  };

  return (
    <HackatonsMobileSection>
      <HackatonsColumn>
        {hackatons.slice(0, visibleCards).map((hackathon, index) => (
          <HackatonCard key={hackathon.id}>
            <HackatonHeader>{hackathon.name}</HackatonHeader>
            <HackatonRow>
              <Banner imgSrc={hackathon.imageUrl} width="45%" />
              <Topics>
                {hackathon.topics.slice(0, 3).map((topic) => (
                  <CardsPoint>
                    {" "}
                    <CardsBullet>// </CardsBullet> {topic}
                  </CardsPoint>
                ))}
              </Topics>
            </HackatonRow>

            <HackatonRow>
              <InfoRow>
                <InfoColumn>
                  <InfoLabel>Format</InfoLabel>
                  <InfoData>{hackathon.format ?? "Online"}</InfoData>
                </InfoColumn>
                <InfoColumn>
                  <InfoLabel>Start Date</InfoLabel>
                  <InfoData>
                    {new Date(hackathon.startDate)
                      .toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, ".")}
                  </InfoData>
                </InfoColumn>
              </InfoRow>

              <PrizePoolWrapper>
                <PrizeValue>{hackathon.prize}</PrizeValue>
              </PrizePoolWrapper>
            </HackatonRow>
          </HackatonCard>
        ))}
      </HackatonsColumn>

      {visibleCards < hackatons.length && (
        <SeeButtonWrapper>
          <SeeMoreButton
            onClick={handleSeeMoreClick}
            backgroundImg={SeeMoreBackground}
          >
            <ButtonText>See more</ButtonText>
          </SeeMoreButton>
        </SeeButtonWrapper>
      )}
    </HackatonsMobileSection>
  );
};

export default HackatonsMobile;
