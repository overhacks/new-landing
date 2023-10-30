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
} from "./styles";

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
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
        <AnySizeTitle color="white" text="Moto"/>
      </Moto>

      <RowContainer id="hackatons">
        <SubTitlecontainer>
          <SubTitle color="#22fa5f" text="Ongoing" />
        </SubTitlecontainer>
      </RowContainer>

      <StyledSwiper
        spaceBetween={80}
        slidesPerView={2}
        slidesPerGroupSkip={2}
        centeredSlides={false}
        grabCursor={true}
        loop
        speed={500}
        centeredSlidesBounds
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1.25,
        //   },
        //   768: {
        //     slidesPerView: 1.25,
        //   },
        //   1080: {
        //     slidesPerView: 2.5,
        //   },
        //   1280: {
        //     slidesPerView: 2.75,
        //   },
        // }}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent isActive={isActive}>
                <ImgAndDescription>
                  <Description>
                    <SubTitle
                      textAlign="left"
                      color="white"
                      text="Docker AI/ML Hackathon"
                    />

                    <Row>
                      <TagsFilled style={{ color: "#22fa5fa4" }} />

                      <Tag backgroundColor="#36f96d8c">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="DevOps"
                        />
                      </Tag>
                      <Tag backgroundColor="#36f96d8c">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="WEB"
                        />
                      </Tag>
                      
                      <Tag backgroundColor="rgba(54, 249, 109, 0.549)">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="Machine Learning/AI"
                        />
                      </Tag>
                    </Row>
                    { !isSmallScreen &&
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="rgba(170, 170, 170, 1)"
                        text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                        // overflow="hidden"
                        // textOverflow="ellipsis"
                        // whiteSpace="nowrap"
                      />
                    }
                  </Description>
                  <Banner src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png" />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row paddingLeft="16px">
                    <Tag backgroundColor="#36f96d8c">
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="1776 participants"
                      />
                    </Tag>
                    <Tag backgroundColor="#36f96d8c">
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="Offline"
                      />
                    </Tag>
                    <Tag backgroundColor="#36f96d8c">
                      <CalendarFilled
                        style={{ color: "white", fontSize: "12px" }}
                      />
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="Oct 03, 2023"
                      />
                    </Tag>
                  </Row>

                  <Button>
                    <SubTitle
                      fontSize="18px"
                      fontWeight="600"
                      textAlign="left"
                      color="#22fa5f"
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

      <StyledSwiper
        spaceBetween={80}
        slidesPerView={1.25}
        loop
        speed={500}
        centeredSlides
        centeredSlidesBounds
        breakpoints={{
          640: {
            slidesPerView: 1.25,
          },
          768: {
            slidesPerView: 1.25,
          },
          1080: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 2.75,
          },
        }}
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent isActive={isActive}>
                <ImgAndDescription>
                  <Description>
                    <SubTitle
                      textAlign="left"
                      color="white"
                      text="Docker AI/ML Hackathon"
                    />

                    <Row>
                      <TagsFilled style={{ color: "#22fa5fa4" }} />

                      <Tag backgroundColor="#36f96d8c">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="DevOps"
                        />
                      </Tag>
                      <Tag backgroundColor="#36f96d8c">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="WEB"
                        />
                      </Tag>
                      <Tag backgroundColor="#36f96d8c">
                        <SubTitle
                          fontSize="12px"
                          textAlign="left"
                          color="white"
                          text="Machine Learning/AI"
                        />
                      </Tag>
                    </Row>
                    { !isSmallScreen &&
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="rgba(170, 170, 170, 1)"
                        text="Use Docker to get inspired and be productive within this exciting new frontier of AI"
                        // overflow="hidden"
                        // textOverflow="ellipsis"
                        // whiteSpace="nowrap"
                      />
                    }
                  </Description>
                  <Banner src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png" />
                </ImgAndDescription>

                <Info borderTop="2px solid rgb(44, 44, 48)">
                  <Row paddingLeft="16px">
                    <Tag backgroundColor="#36f96d8c">
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="1776 participants"
                      />
                    </Tag>
                    <Tag backgroundColor="#36f96d8c">
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="Offline"
                      />
                    </Tag>
                    <Tag backgroundColor="#36f96d8c">
                      <CalendarFilled
                        style={{ color: "white", fontSize: "12px" }}
                      />
                      <SubTitle
                        fontSize="12px"
                        textAlign="left"
                        color="white"
                        text="Oct 03, 2023"
                      />
                    </Tag>
                  </Row>

                  <Button>
                    <SubTitle
                      fontSize="18px"
                      fontWeight="600"
                      textAlign="left"
                      color="#22fa5f"
                      text="Apply"
                    />
                  </Button>
                </Info>
              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>

      <Footer/>
    </Container>
  );
}

export default Hackatons;
