import styled, { keyframes } from "styled-components";

export const HeroSectionsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TurnContainer = styled.div`
  width: 90%;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const PromoText = styled.h1`
  width: 90%;
  margin-top: 47px;
  text-align: center;

  color: #d9dddb;

  font-family: Silkscreen;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  @media (max-width: 576px) {
    font-size: 30px;
    letter-spacing: 0.15px;
  }
  @media (min-width: 577px) {
    font-size: 30px;
    letter-spacing: 0.15px;
  }
  @media (min-width: 769px) {
    font-size: 30px;
    letter-spacing: 0.15px;
  }
  @media (min-width: 993px) {
    font-size: 50px;
    letter-spacing: 0.25px;
  }
  @media (min-width: 1201px) {
    font-size: 50px;
    letter-spacing: 0.25px;
  }
  @media (min-width: 1401px) {
    font-size: 50px;
    letter-spacing: 0.25px;
  }
`;

export const HeroEndContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  @media (max-width: 576px) {
    height: 30vh;
  }
  @media (min-width: 577px) {
    height: 30vh;
  }
  @media (min-width: 769px) {
    height: 30vh;
  }
  @media (min-width: 993px) {
    height: 70vh;
  }
  @media (min-width: 1201px) {
    height: 70vh;
  }
  @media (min-width: 1401px) {
    height: 70vh;
  }
`;

export const EndLineContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  @media (max-width: 576px) {
    height: 100%;
  }
  @media (min-width: 577px) {
    height: 100%;
  }
  @media (min-width: 769px) {
    height: 100%;
  }
  @media (min-width: 993px) {
    height: 70%;
  }
  @media (min-width: 1201px) {
    height: 70%;
  }
  @media (min-width: 1401px) {
    height: 70%;
  }
`;

export const LongLineEnd = styled.div<{ transform: string }>`
  width: 1.5px;
  height: 100%;
  opacity: 0.4;
  background: linear-gradient(to bottom, #0b1042, #2622fa, #0d0f23);

  transform: ${(props) => props.transform};
  transition: transform 2.5s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const BackgroundContainer = styled.div<{ background: any }>`
  width: 45%;
  height: 100%;

  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const HeroSubTitle = styled.h2`
  width: 90%;
  text-align: center;
  margin-top: 53px;
  color: #c0c0c0;

  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  line-height: 162.73%;

  @media (max-width: 576px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
    letter-spacing: 7.5px;
  }
  @media (min-width: 1201px) {
    font-size: 30px;
    letter-spacing: 7.5px;
  }
  @media (min-width: 1401px) {
    font-size: 30px;
    letter-spacing: 7.5px;
  }
`;

export const CenteredLine = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ApplyRow = styled.div`
  width: 90%;
  max-height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  @media (max-width: 576px) {
    margin-top: 25px;
    margin-bottom: 0;
  }
  @media (min-width: 577px) {
    margin-top: 25px;
    margin-bottom: 0;
  }
  @media (min-width: 769px) {
    margin-top: 25px;
    margin-bottom: 0;
  }
  @media (min-width: 993px) {
    margin-top: 135px;
    margin-bottom: 72px;
  }
  @media (min-width: 1201px) {
    margin-top: 135px;
    margin-bottom: 72px;
  }
  @media (min-width: 1401px) {
    margin-top: 135px;
    margin-bottom: 72px;
  }
`;

export const ButtonText = styled.div`
  color: #dddbdb;

  font-family: Orbitron;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.45px;
  z-index: 5;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 15px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 15px;
  }
  @media (min-width: 1201px) {
    font-size: 15px;
  }
  @media (min-width: 1401px) {
    font-size: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const ButtonWrapperMobile = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const BackgroundStar = styled.div<{ backgroundImg: any }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});

  width: 184.5px;
  height: 211.5px;
`;

export const Button = styled.a<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: none;
  box-shadow: none;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.15s ease-in-out;

  @media (max-width: 576px) {
    padding: 9px 90px 10px 90px;
  }
  @media (min-width: 577px) {
    padding: 9px 90px 10px 90px;
  }
  @media (min-width: 769px) {
    padding: 9px 90px 10px 90px;
  }
  @media (min-width: 993px) {
    padding: 9px 90px 10px 90px;
  }
  @media (min-width: 1201px) {
    padding: 9px 90px 10px 90px;
  }
  @media (min-width: 1401px) {
    padding: 9px 90px 10px 90px;
  }
`;

export const LineLeftContainer = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 576px) {
    justify-content: space-between;
  }
  @media (min-width: 577px) {
    justify-content: space-between;
  }
  @media (min-width: 769px) {
    justify-content: space-between;
  }
  @media (min-width: 993px) {
    justify-content: center;
  }
  @media (min-width: 1201px) {
    justify-content: center;
  }
  @media (min-width: 1401px) {
    justify-content: center;
  }
`;

export const ButtonMobile = styled.a<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: none;
  box-shadow: none;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 5;

  width: 100%;
  aspect-ratio: 6.5/1;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  transition: opacity 0.15s ease-in-out;
`;

export const RowContainer = styled.div<{ justify: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: center;
  width: 100%;
  gap: 32px;
`;

export const RowContainerRight = styled.div<{ justify: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  align-items: center;
  width: 100%;
  gap: 32px;
`;

export const AnimatedBulletContainer = styled.div<{ backgroundImg: any }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    background-image: url(${(props) => props.backgroundImg});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;

    filter: blur(119px);
    width: 290px;
    height: 500px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: radial-gradient(
      63.11% 63.11% at 50.82% 71.31%,
      rgba(97, 0, 255, 0) 0%,
      rgba(97, 0, 255, 1) 100%
    );

    filter: blur(20px);
    width: 24px;
    height: 24px;
  }
`;

export const AnimatedBulletContainerRight = styled.div<{ backgroundImg: any }>`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    background-image: url(${(props) => props.backgroundImg});
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;

    filter: blur(119px);
    width: 500px;
    height: 500px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: radial-gradient(
      63.11% 63.11% at 50.82% 71.31%,
      rgba(219, 0, 255, 0) 0%,
      rgba(219, 0, 255, 1) 100%
    );

    filter: blur(20px);
    width: 24px;
    height: 24px;
  }
`;

export const LineLeft = styled.div<{ transform: string }>`
  width: 1.5px;
  opacity: 0.4;

  transform: ${(props) => props.transform};
  transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
  background: #6100ff;
  height: 350px;
`;

export const TurnLine = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  width: 93%;
  margin-top: 32px;

  padding-left: 3.5%;
  padding-right: 3.5%;
  .svg {
    width: 100%;
    height: 40vh;
  }

  .path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: dash 2s linear forwards;
    stroke-width: 1.5px;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const TurnLineHalf = styled.div <{ isDev: boolean }>`
  width: 46.5%;

  padding-left: ${props => {
    if (props.isDev) {
      return("3.5%")
    }
    return("50%")
  }};
  padding-right:${props => {
    if (props.isDev) {
      return("50%")
    }
    return("3.5%")
  }};
  margin-top: 32px;
  .svg {
    width: 100%;
    height: 40vh;
  }

  .path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: dash 3.5s linear forwards;
    stroke-width: 1.5px;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const BulletContainer = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: rgba(18, 21, 255, 0.6);

    filter: blur(17.5px);
    width: 43px;
    height: 43px;
  }
`;

export const BulletWrapper = styled.img`
  border: none;
  background-color: transparent;
  width: 36px;
  height: 36px;
  z-index: 5;
  object-fit: contain;
`;

export const PulseContainer = styled.div`
  position: relative;
  width: 36px;
  height: 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const pulseAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }

`;

export const PulseCircle = styled.div<{ delay: number; size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid rgba(97, 0, 255, 0.3);
  animation: ${pulseAnimation} 7s ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay}s`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;

export const Description = styled.h2<{ textAligh: string }>`
  text-align: ${props => props.textAligh};
  color: #d9dddb;
  font-family: Orbitron;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48.819px;
  letter-spacing: 7.5px;

  @media (max-width: 576px) {
    width: 90%;
  }
  @media (min-width: 577px) {
    width: 90%;
  }
  @media (min-width: 769px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 85%;
  }
  @media (min-width: 1201px) {
    width: 85%;
  }
  @media (min-width: 1401px) {
    width: 85%;
  }
`;

export const DescriptionRight = styled.h2<{ textAligh: string }>`
  text-align: ${props => props.textAligh};
  width: 75%;

  color: #d9dddb;
  font-family: Orbitron;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48.819px;
  letter-spacing: 7.5px;
`;

export const DescriptionB = styled.b`
  width: 93%;

  color: #493ec0;
  font-family: Orbitron;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 48.819px;
  letter-spacing: 7.5px;
`;

export const ChooseSectionContainer = styled.div`
  width: 90%;
  height: 60vh;
  margin-top: 72px;

  z-index: 1;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LineWrapper = styled.div`
  width: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div<{ transform: string }>`
  height: calc(100% - 76px);
  width: 1.5px;
  opacity: 0.4;
  background: linear-gradient(to bottom, #22fa5f, #6100ff);

  transform: ${(props) => props.transform};
  transition: transform 5s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const LineEnd = styled.div<{ transform: string }>`
  width: 1.5px;
  height: 93px;
  opacity: 0.4;
  /* background: rgba(34, 56, 250, 0.72); */
  background: linear-gradient(to bottom, #111336, #2622fa, #111336);

  transform: ${(props) => props.transform};
  transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const Bullet = styled.div`
  width: 13px;
  height: 13px;
  transform: rotate(45.966deg);
  border: 1px solid #b1b5b2;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: radial-gradient(
      63.11% 63.11% at 50.82% 71.31%,
      rgba(34, 250, 95, 0) 0%,
      rgba(34, 250, 95, 0.95) 100%
    );

    filter: blur(20px);
    width: 24px;
    height: 24px;
  }
`;

export const SectionContent = styled.div`
  height: 100%;
  width: 86%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.div`
  color: #b2b2b2;
  align-self: flex-start;
  font-family: Silkscreen;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 11.52px;
  letter-spacing: 0.15px;
`;

export const MobileButton = styled.button`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 40px;
  padding-left: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  text-decoration: none;
  box-shadow: none;

  border-radius: 56px;
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

export const ChooserContainer = styled.div`
  width: calc(100% - 22px);
  display: flex;
  align-items: center;

  margin-top: 53px;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 36px;
  }
  @media (min-width: 577px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 36px;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 36px;
  }
  @media (min-width: 993px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media (min-width: 1201px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const ChooseWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* width: 45%; */
  gap: 10px;

  position: relative;

  text-decoration: none;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  transition: opacity 0.15s ease-in-out;
`;

export const ChooseText = styled.p<{ color: string }>`
  color: ${(props) => props.color};

  font-family: Orbitron;
  font-style: normal;
  font-weight: 600;
  line-height: 112.73%;
  letter-spacing: 7.5px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
  @media (min-width: 577px) {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
  }
  @media (min-width: 1201px) {
    font-size: 30px;
  }
  @media (min-width: 1401px) {
    font-size: 30px;
  }
`;
