import { Container, RowContainer, RowContainerFirst } from "./styles";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhySection from "../../components/WhySection";
import SubTitleRow from "../../components/SubTitleRow";
import PartnersSection from "../../components/PartnersSection";
import AboutSection from "../../components/AboutSection";
import HackatonsSwiper from "../../components/HackatonsSwiper";
import { Hackathon, getHackathons } from "../../api/client";
import HeroSection from "../../components/HeroSection";
import HackatonsMobile from "../../components/HackatonsMobile";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

// interface ScrollProps {
//   targetRef: React.RefObject<HTMLElement>;
// }

function Hackatons() {
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

  const [popupOpen, setPopupOpen] = useState(false);
  const [finishedPopupOpen, setFinishedPopupOpen] = useState(false);
  const [selectedSlideIdOngoing, setSelectedSlideIdOngoing] = useState(null);
  const [selectedSlideIdFinished, setSelectedSlideIdFinished] = useState(null);

  const scrollToElement = (targetRef: React.RefObject<HTMLElement>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePopupOpen = (
      id: any,
      swiperRef: React.RefObject<HTMLElement>
  ) => {
    if (popupOpen) {
      setPopupOpen(false);
      setSelectedSlideIdOngoing(null);
    } else if (!popupOpen) {
      scrollToElement(swiperRef);

      setPopupOpen(true);
      setSelectedSlideIdOngoing(id);
    }
  };

  const handleFinishedPopupOpen = (
      id: any,
      swiperRef: React.RefObject<HTMLElement>
  ) => {
    if (finishedPopupOpen) {
      setFinishedPopupOpen(false);
      setSelectedSlideIdFinished(null);
    } else if (!finishedPopupOpen) {
      scrollToElement(swiperRef);
      setFinishedPopupOpen(true);
      setSelectedSlideIdFinished(id);
    }
  };

  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [ongoingHackatons, setOngoingHackatons] = useState<Hackathon[]>([]);
  const [finishedHackatons, setFinishedHackatons] = useState<Hackathon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hackathonsData = await getHackathons();
        setHackathons(hackathonsData);
      } catch (error) {
        console.error("Error fetching hackathons:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currentDate = new Date(); // Получаем текущую дату и время

    // Приводим текущую дату к началу дня (00:00:00)
    const currentDayStart = new Date(currentDate);
    currentDayStart.setHours(0, 0, 0, 0);

    const ongoing = hackathons.filter(
        (hackathon) => new Date(hackathon.endDate) >= currentDayStart
    );
    console.log(hackathons.map(h => {
        return  new Date(h.startDate);
    }));
    const finished = hackathons.filter(
        (hackathon) => new Date(hackathon.endDate) < currentDayStart
    );

    // if (ongoing.length < 4) {
    //   const duplicateOngoing = [
    //     ...ongoing,
    //     ...ongoing.slice(0, ongoing.length),
    //   ];
    //   setOngoingHackatons(duplicateOngoing);
    // } else {
    //   setOngoingHackatons(ongoing);
    // }

    // if (finished.length < 4) {
    //   const duplicateFinished = [
    //     ...finished,
    //     ...finished.slice(0, finished.length),
    //   ];
    //   setFinishedHackatons(duplicateFinished);
    // } else {
    //   setFinishedHackatons(finished);
    // }

    setOngoingHackatons(ongoing);
    setFinishedHackatons(finished);
  }, [hackathons]);

// console.log("hackathons", hackathons);
  // console.log("ongoingHackatons", ongoingHackatons);
  // console.log("finishedHackatons", finishedHackatons);

  return (
      <Container>
        <Header />

        <HeroSection></HeroSection>

        <RowContainerFirst id="hackatons">
          <SubTitleRow text="Ongoing" />
        </RowContainerFirst>

        {!isSmallScreen ? (
            <HackatonsSwiper
                selectedHackatonId={selectedSlideIdOngoing}
                hackatons={ongoingHackatons}
                popupOpen={popupOpen}
                handlePopupOpen={handlePopupOpen}
                isOngoin={true}
            />
        ) : (
            <HackatonsMobile hackatons={ongoingHackatons} isOngoing={true} />
        )}

        <RowContainer>
          <SubTitleRow text="Finished" />
        </RowContainer>

        {!isSmallScreen ? (
            <HackatonsSwiper
                selectedHackatonId={selectedSlideIdFinished}
                hackatons={finishedHackatons}
                popupOpen={finishedPopupOpen}
                handlePopupOpen={handleFinishedPopupOpen}
                isOngoin={false}
            />
        ) : (
            <HackatonsMobile hackatons={finishedHackatons} isOngoing={false} />
        )}

        <WhySection />

        <PartnersSection />

        <AboutSection />

        <Footer />
      </Container>
  );
}

export default Hackatons;
