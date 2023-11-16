import SubTitle from "../../components/SubTitle";
import {
  Container,
  RowContainer,
} from "./styles";


import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhySection from "../../components/WhySection";
import SubTitleRow from "../../components/SubTitleRow";
import PartnersSection from "../../components/PartnersSection";
import AboutSection from "../../components/AboutSection";
import HackatonsSwiper from "../../components/HackatonsSwiper";


function Hackatons() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [finishedPopupOpen, setFinishedPopupOpen] = useState(false);
  const [selectedSlideId, setSelectedSlideId] = useState(null);

  const handlePopupOpen = (id: any) => {
    setPopupOpen(!popupOpen);
    setSelectedSlideId(id);
  };
  const handleFinishedPopupOpen = (id: any) => {
    setFinishedPopupOpen(!finishedPopupOpen);
    setSelectedSlideId(id);
  };

  return (
    <Container>
      <Header />

      <RowContainer id="hackatons">
        <SubTitleRow text="Ongoing"/>
      </RowContainer>

      <HackatonsSwiper popupOpen={popupOpen} handlePopupOpen={handlePopupOpen} isOngoin={true}/>

      <RowContainer>
        <SubTitleRow text="Finished"/>
      </RowContainer>

      <HackatonsSwiper popupOpen={finishedPopupOpen} handlePopupOpen={handleFinishedPopupOpen} isOngoin={false}/>

      <WhySection/>

      <PartnersSection/>

      <AboutSection/>

      <Footer />

    </Container>
  );
}

export default Hackatons;
