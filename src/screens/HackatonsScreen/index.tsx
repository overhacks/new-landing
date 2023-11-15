import SubTitle from "../../components/SubTitle";
import {
  Banner,
  Block,
  Checks,
  Container,
  Description,
  ImgAndDescription,
  Info,
  RowContainer,
  SlideContent,
  StyledSlide,
  StyledSwiper,
  SubTitlecontainer,
  Tag,
  Row,
  Button,
  Moto,
  PopupWrapper,
  InfoColumn,
  TextWrapper,
  RowPopup,
  PopupButton,
  Projects,
  Project,
} from "./styles";

import ApplyButton from "../../assets/img/button.svg";

import { CalendarFilled, TagsFilled } from "@ant-design/icons";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import AnySizeTitle from "../../components/Title";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhySection from "../../components/About";
import SubTitleRow from "../../components/SubTitleRow";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Hackatons() {
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
  ];
  const projects = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
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

      <StyledSwiper
        
        spaceBetween={80}
        slidesPerView={1}
        slidesPerGroupSkip={1}
        centeredSlides={false}
        grabCursor={true}
        loop
        speed={500}
        centeredSlidesBounds
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroupSkip: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroupSkip: 1,
            centeredSlides: true,
          },
          1080: {
            slidesPerView: 2,
            slidesPerGroupSkip: 2,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroupSkip: 2,
            centeredSlides: false,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {popupOpen && (
          <PopupWrapper
            boxShadow="0px 98px 100px 0px rgba(88, 13, 245, 0.38) inset,
          0px 4px 18px 0px #580df5 inset, 0px 1px 18px 0px #580df5 inset"
          >
            <AnySizeTitle
              text="Docker AI/ML Hackathon"
              color="#CCFF5A"
              alignSelf="left"
            />
            <ImgAndDescription>
              <Description>
                <TextWrapper backgroundColor="#170540">
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                  />
                </TextWrapper>

                <TextWrapper backgroundColor="#170540">
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."
                  />
                </TextWrapper>
              </Description>
              <Banner
                width="40%"
                imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
              />
            </ImgAndDescription>

            <RowPopup>
              <PopupButton backgroundColor="#56DF53" width="50%">
                <SubTitle
                  fontSize="25px"
                  fontWeight="600"
                  textAlign="left"
                  color="#000"
                  text="Apply"
                />
              </PopupButton>

              <Row justifyContent="space-between" width="40%">
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Offline"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="Offline"
                  />
                </InfoColumn>
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Participants"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="1436"
                  />
                </InfoColumn>
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Start Date"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="28.11.2023"
                  />
                </InfoColumn>
              </Row>
            </RowPopup>

            <AnySizeTitle
              text="Projects"
              color="#CCFF5A"
              alignSelf="left"
              marginTop="60px"
            />

            <Projects>
              {projects.map((project) => (
                <Project backgroundColor="#170540">
                  <SubTitle
                    text="Some Project"
                    color="#CCFF5A"
                    alignSelf="left"
                    fontSize="25px"
                  />
                  <SubTitle
                    text="project description project description project description"
                    color="#CCFF5A"
                    alignSelf="left"
                    maxWidth="33%"
                  />

                  <PopupButton backgroundColor="#79C777" width="128px">
                    <SubTitle
                      fontSize="25px"
                      fontWeight="600"
                      textAlign="left"
                      color="#000"
                      text="link"
                    />
                  </PopupButton>
                </Project>
              ))}
            </Projects>
          </PopupWrapper>
        )}

        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent
                boxShadow="0px 98px 100px 0px rgba(88, 13, 245, 0.38) inset,
              0px 4px 18px 0px #580df5 inset, 0px 1px 18px 0px #580df5 inset"
                opacity={popupOpen ? "0.2" : "1"}
                onClick={() => handlePopupOpen("1")}
                isActive={isActive}
              >
                <AnySizeTitle
                  text="Docker AI/ML Hackathon"
                  color="#CCFF5A"
                  alignSelf="left"
                />
                <ImgAndDescription>
                  <Description>
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                    />
                  </Description>
                  <Banner
                    width="40%"
                    imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
                  />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row justifyContent="flex-start" width="60%">
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Offline"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Offline"
                      />
                    </InfoColumn>
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Participants"
                      />
                      <SubTitle textAlign="left" color="#E7FFB0" text="1436" />
                    </InfoColumn>
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Start Date"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="28.11.2023"
                      />
                    </InfoColumn>
                  </Row>

                  <Button backgroundImg={ApplyButton}>
                    <SubTitle
                      fontSize="25px"
                      fontWeight="600"
                      textAlign="left"
                      color="#000"
                      text="Apply"
                    />
                  </Button>
                </Info>
              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>

      <RowContainer>
        <SubTitleRow text="Finished"/>
      </RowContainer>

      <StyledSwiper
        spaceBetween={80}
        slidesPerView={1}
        slidesPerGroupSkip={1}
        centeredSlides={false}
        grabCursor={true}
        loop
        speed={500}
        centeredSlidesBounds
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroupSkip: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroupSkip: 1,
            centeredSlides: true,
          },
          1080: {
            slidesPerView: 2,
            slidesPerGroupSkip: 2,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 2,
            slidesPerGroupSkip: 2,
            centeredSlides: false,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
      >
        {finishedPopupOpen && (
          <PopupWrapper boxShadow="0px 98px 100px 0px rgba(30, 144, 62, 0.12) inset, 0px 4px 18px 0px rgba(30, 120, 82, 0.57) inset, 0px 1px 18px 0px rgba(185, 255, 168, 0.23) inset">
            <AnySizeTitle
              text="Docker AI/ML Hackathon"
              color="#CCFF5A"
              alignSelf="left"
            />
            <ImgAndDescription>
              <Description>
                <TextWrapper backgroundColor="#083911">
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                  />
                </TextWrapper>

                <TextWrapper backgroundColor="#083911">
                  <SubTitle
                    textAlign="left"
                    color="#E7FFB0"
                    text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."
                  />
                </TextWrapper>
              </Description>
              <Banner
                width="40%"
                imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
              />
            </ImgAndDescription>

            <RowPopup>
              <PopupButton backgroundColor="#56DF53" width="50%">
                <SubTitle
                  fontSize="25px"
                  fontWeight="600"
                  textAlign="left"
                  color="#000"
                  text="Apply"
                />
              </PopupButton>

              <Row justifyContent="space-between" width="40%">
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Offline"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="Offline"
                  />
                </InfoColumn>
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Participants"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="1436"
                  />
                </InfoColumn>
                <InfoColumn>
                  <SubTitle
                    textAlign="left"
                    color="rgba(231, 255, 176, 0.51)"
                    text="Start Date"
                  />
                  <SubTitle
                    marginTop="18px"
                    textAlign="left"
                    color="#E7FFB0"
                    text="28.11.2023"
                  />
                </InfoColumn>
              </Row>
            </RowPopup>

            <AnySizeTitle
              text="Projects"
              color="#CCFF5A"
              alignSelf="left"
              marginTop="60px"
            />

            <Projects>
              {projects.map((project) => (
                <Project backgroundColor="#083911">
                  <SubTitle
                    text="Some Project"
                    color="#CCFF5A"
                    alignSelf="left"
                    fontSize="25px"
                  />
                  <SubTitle
                    text="project description project description project description"
                    color="#CCFF5A"
                    alignSelf="left"
                    maxWidth="33%"
                  />

                  <PopupButton backgroundColor="#79C777" width="128px">
                    <SubTitle
                      fontSize="25px"
                      fontWeight="600"
                      textAlign="left"
                      color="#000"
                      text="link"
                    />
                  </PopupButton>
                </Project>
              ))}
            </Projects>
          </PopupWrapper>
        )}

        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent
                boxShadow="0px 98px 100px 0px rgba(30, 144, 62, 0.12) inset, 0px 4px 18px 0px rgba(30, 120, 82, 0.57) inset, 0px 1px 18px 0px rgba(185, 255, 168, 0.23) inset"
                opacity={finishedPopupOpen ? "0.2" : "1"}
                onClick={() => handleFinishedPopupOpen("1")}
                isActive={isActive}
              >
                <AnySizeTitle
                  text="Docker AI/ML Hackathon"
                  color="#CCFF5A"
                  alignSelf="left"
                />
                <ImgAndDescription>
                  <Description>
                    <SubTitle
                      textAlign="left"
                      color="#E7FFB0"
                      text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                    />
                  </Description>
                  <Banner
                    width="40%"
                    imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)"
                  />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row justifyContent="flex-start" width="60%">
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Offline"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Offline"
                      />
                    </InfoColumn>
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Participants"
                      />
                      <SubTitle textAlign="left" color="#E7FFB0" text="1436" />
                    </InfoColumn>
                    <InfoColumn>
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="Start Date"
                      />
                      <SubTitle
                        textAlign="left"
                        color="#E7FFB0"
                        text="28.11.2023"
                      />
                    </InfoColumn>
                  </Row>

                  <Button backgroundImg={ApplyButton}>
                    <SubTitle
                      fontSize="25px"
                      fontWeight="600"
                      textAlign="left"
                      color="#000"
                      text="Apply"
                    />
                  </Button>
                </Info>
              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>


      <WhySection/>

      <Footer />
    </Container>
  );
}

export default Hackatons;
