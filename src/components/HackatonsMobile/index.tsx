import React, { useEffect, useRef, useState } from "react";
import {
  Banner,
  ButtonText,
  ButtonTextPopup,
  CancelBtn,
  CardContentWrapper,
  CardsBullet,
  CardsPoint,
  Description,
  HackatonCard,
  HackatonHeader,
  HackatonRow,
  HackatonRowMobile,
  HackatonsColumn,
  HackatonsMobileSection,
  InfoColumn,
  InfoData,
  InfoLabel,
  InfoRow,
  LargeApplyButton,
  LargeApplyWrapper,
  Popup,
  PopupContentWrapper,
  PopupStyledCross,
  PrizePoolWrapper,
  PrizeValue,
  SeeButtonWrapper,
  SeeMoreButton,
  TextWrapper,
  Topics,
} from "./styles";
import { Hackathon } from "../../api/client";

import SeeMoreBackground from "../../assets/img/seeMore.svg";
import MobileCrossSVG from "../../assets/img/MobileCross.svg";
import LargeApplyButtonSVG from "../../assets/img/largeApply.svg";

interface HackatonsMobileProps {
  hackatons: Hackathon[];
  isOngoing: boolean;
}

const HackatonsMobile: React.FC<HackatonsMobileProps> = ({
  hackatons,
  isOngoing,
}) => {
  const ColumnRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(1);

  const handleSeeMoreClick = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
  };

  const scrollToElement = (targetRef: React.RefObject<HTMLElement>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedHackatonIdMobile, setSelectedHackatonIdMobile] =
    useState(null);
  const [popupMobileOpen, setPopupMobileOpen] = useState(false);

  const handlePopupOpen = (id: any) => {
    if (popupMobileOpen) {
      setPopupMobileOpen(false);
      setSelectedHackatonIdMobile(null);
    } else if (!popupMobileOpen) {
      scrollToElement(ColumnRef);

      setPopupMobileOpen(true);
      setSelectedHackatonIdMobile(id);
    }
  };

  const [currentHackaton, setCurrentHackaton] = useState(hackatons[0]);

  useEffect(() => {
    const updatedCurrentHackaton =
      hackatons.find((hackaton) => hackaton.id === selectedHackatonIdMobile) ||
      hackatons[0];
    setCurrentHackaton(updatedCurrentHackaton);
  }, [selectedHackatonIdMobile, hackatons]);

  const [paragraphs, setParagraphs] = useState([""]);

  useEffect(() => {
    if (currentHackaton) {
      setParagraphs(currentHackaton?.description.split(/<\/p>\s*<p>/));
    } else {
      setParagraphs([""]);
    }
  }, [currentHackaton]);

  return (
    <HackatonsMobileSection>
      <HackatonsColumn ref={ColumnRef}>
        {hackatons.slice(0, visibleCards).map((hackathon, index) => (
          <HackatonCard
            key={hackathon.id}
            onClick={() => handlePopupOpen(hackathon.id)}
          >
            <CardContentWrapper>
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
            </CardContentWrapper>
          </HackatonCard>
        ))}

        {popupMobileOpen && (
          <Popup>
            <PopupContentWrapper>
              <HackatonRowMobile>
                <HackatonHeader>{currentHackaton.name}</HackatonHeader>
                <CancelBtn
                  onClick={() => {
                    setPopupMobileOpen(false);
                  }}
                >
                  <PopupStyledCross imgSrc={MobileCrossSVG} />
                </CancelBtn>
              </HackatonRowMobile>
              <HackatonRow>
                <Description>
                  {paragraphs &&
                    paragraphs.map((paragraph) => (
                      <TextWrapper
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></TextWrapper>
                    ))}
                </Description>
              </HackatonRow>
              <LargeApplyWrapper>
                <LargeApplyButton
                  backgroundImg={LargeApplyButtonSVG}
                  href="https://t.me/OverhacksBot"
                >
                  <ButtonTextPopup>Apply</ButtonTextPopup>
                </LargeApplyButton>
              </LargeApplyWrapper>
            </PopupContentWrapper>
          </Popup>
        )}
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
