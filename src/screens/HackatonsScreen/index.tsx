import SubTitle from "../../components/SubTitle";
import { Container, RowContainer } from "./styles";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhySection from "../../components/WhySection";
import SubTitleRow from "../../components/SubTitleRow";
import PartnersSection from "../../components/PartnersSection";
import AboutSection from "../../components/AboutSection";
import HackatonsSwiper from "../../components/HackatonsSwiper";
import { Hackathon, getHackathons } from "../../api/client";

function Hackatons() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [finishedPopupOpen, setFinishedPopupOpen] = useState(false);
  const [selectedSlideIdOngoing, setSelectedSlideIdOngoing] = useState(null);
  const [selectedSlideIdFinished, setSelectedSlideIdFinished] = useState(null);

  const handlePopupOpen = (id: any) => {
    if (popupOpen) {
      setPopupOpen(false);
      setSelectedSlideIdOngoing(null);
    } else if (!popupOpen) {
      setPopupOpen(true);
      setSelectedSlideIdOngoing(id);
    }
  };
  const handleFinishedPopupOpen = (id: any) => {
    if (finishedPopupOpen) {
      setFinishedPopupOpen(false);
      setSelectedSlideIdFinished(null);
    } else if (!finishedPopupOpen) {
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
    const currentDate = new Date().toISOString();

    const ongoing = hackathons.filter(
      (hackathon) => hackathon.startDate >= currentDate
    );
    const finished = hackathons.filter(
      (hackathon) => hackathon.startDate < currentDate
    );

    setOngoingHackatons(ongoing);
    setFinishedHackatons(finished);
  }, [hackathons]);

  console.log("hackathons", hackathons);
  console.log("ongoingHackatons", ongoingHackatons);
  console.log("finishedHackatons", finishedHackatons);

  return (
    <Container>
      <Header />

      <RowContainer id="hackatons">
        <SubTitleRow text="Ongoing" />
      </RowContainer>

      <HackatonsSwiper
        selectedHackatonId={selectedSlideIdOngoing}
        hackatons={ongoingHackatons}
        popupOpen={popupOpen}
        handlePopupOpen={handlePopupOpen}
        isOngoin={true}
      />

      <RowContainer>
        <SubTitleRow text="Finished" />
      </RowContainer>

      <HackatonsSwiper
        selectedHackatonId={selectedSlideIdFinished}
        hackatons={finishedHackatons}
        popupOpen={finishedPopupOpen}
        handlePopupOpen={handleFinishedPopupOpen}
        isOngoin={false}
      />

      <WhySection />

      <PartnersSection />

      <AboutSection />

      <Footer />
    </Container>
  );
}

export default Hackatons;
