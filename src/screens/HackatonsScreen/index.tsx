import SubTitle from "../../components/SubTitle"
import { Banner, Container, Description, ImgAndDescription, Info, SlideContent, StyledSlide, StyledSwiper } from "./styles"
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";



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
        <StyledSwiper
        spaceBetween={80}
        slidesPerView={1.5}
        loop
        speed={500}
        centeredSlides
        centeredSlidesBounds
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1080: {
            slidesPerView: 2.5,
          },
          1280: {
            slidesPerView: 3.5,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
      }}
        
      >
        {slides.map((slideContent, index) => (
          <StyledSlide key={slideContent} virtualIndex={index}>
            {({ isActive }) => (
              <SlideContent isActive={isActive}>
                <ImgAndDescription>
                  <Banner src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/597/511/datas/medium_square.png" />
                  <Description>
                    <SubTitle textAlign="right" color="white" text="Docker AI/ML Hackathon"/>
                    <SubTitle fontSize="12px" textAlign="right" color="rgba(170, 170, 170, 1)" text="19 days left"/>
                    <SubTitle fontSize="12px" textAlign="right" color="rgba(170, 170, 170, 1)" text="$20,000 in prizes"/>
                  </Description>
                </ImgAndDescription>

                <Info>
                  <SubTitle textAlign="center"  color="white" text="ABOUT THE CHALLENGE"/>
                  <SubTitle fontSize="12px" textAlign="left" color="rgba(170, 170, 170, 1)" text="Docker and Docker Hub are the starting point for practitioners to start their AI/ML journey and distribute their applications or models. We’re looking for hacks that use Docker products to help both beginners and advanced users get inspired, get started, and be productive within this exciting new frontier."/>
                </Info>

              </SlideContent>
            )}
          </StyledSlide>
        ))}
      </StyledSwiper>
      </Container>
    )
  }
  
  export default Hackatons