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
} from "./styles";
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

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
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

  return (
    <Container>
      {/* <RowContainer>
            <AnySizeTitle text="Filters" color="white" />
        </RowContainer>
        <Checks>
        <Checkbox onChange={onChange}>
            <SubTitle text="Checkbox" color="rgba(170, 170, 170, 1)"/>
        </Checkbox>
        </Checks> */}

      <RowContainer>
        <SubTitlecontainer>
          <SubTitle color="#22fa5f" text="Ongoing" />
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
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
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
                  <Banner src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png" />
                  <Description>
                    <SubTitle
                      textAlign="right"
                      color="white"
                      text="Docker AI/ML Hackathon"
                    />
                    <SubTitle
                      fontSize="12px"
                      textAlign="right"
                      color="rgba(170, 170, 170, 1)"
                      text="19 days left"
                    />
                    <SubTitle
                      fontSize="12px"
                      textAlign="right"
                      color="rgba(170, 170, 170, 1)"
                      text="$20,000 in prizes"
                    />
                  </Description>
                </ImgAndDescription>

                <Info>
                  <SubTitle
                    textAlign="center"
                    color="white"
                    text="ABOUT THE CHALLENGE"
                  />
                  <SubTitle
                    fontSize="12px"
                    textAlign="left"
                    color="rgba(170, 170, 170, 1)"
                    text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."
                  />
                </Info>
              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>

      <RowContainer>
          <SubTitlecontainer>
            <SubTitle color="#22fa5f" text="Finished"/>
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
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
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
                  <Banner src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png" />
                  <Description>
                    <SubTitle
                      textAlign="right"
                      color="white"
                      text="Docker AI/ML Hackathon"
                    />
                    <SubTitle
                      fontSize="12px"
                      textAlign="right"
                      color="rgba(170, 170, 170, 1)"
                      text="19 days left"
                    />
                    <SubTitle
                      fontSize="12px"
                      textAlign="right"
                      color="rgba(170, 170, 170, 1)"
                      text="$20,000 in prizes"
                    />
                  </Description>
                </ImgAndDescription>

                <Info>
                  <SubTitle
                    textAlign="center"
                    color="white"
                    text="ABOUT THE CHALLENGE"
                  />
                  <SubTitle
                    fontSize="12px"
                    textAlign="left"
                    color="rgba(170, 170, 170, 1)"
                    text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."
                  />
                </Info>
              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>

    </Container>
  );
}

export default Hackatons;
