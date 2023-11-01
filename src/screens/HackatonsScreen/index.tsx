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
} from "./styles";

import ApplyButton from "../../assets/img/applyButton.png";

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
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10",
    "Slide 11",
    "Slide 12",
    "Slide 13",
    "Slide 14",
    "Slide 15",
    "Slide 16",
    "Slide 17",
    "Slide 18",
    "Slide 19",
    "Slide 20",
  ];
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
  return (
    <Container>
      <Moto>
        <AnySizeTitle color="white" text="Moto" />
      </Moto>

      <RowContainer id="hackatons">
        <SubTitlecontainer>
          <SubTitle color="#22fa5f" text="Ongoing" />
        </SubTitlecontainer>
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
        modules={[
          // Autoplay,
          Pagination,
          Navigation,
        ]}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
      >
        {/* <PopupWrapper>
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
                  <Banner imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)" />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row>
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
        </PopupWrapper>
         */}
        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent isActive={isActive}>
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
                  <Banner imgSrc="url(https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png)" />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row>
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
        <SubTitlecontainer>
          <SubTitle color="#22fa5f" text="Finished" />
        </SubTitlecontainer>
      </RowContainer>

      <Footer />
    </Container>
  );
}

export default Hackatons;
