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

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const AnimatedBulletContainer = styled.div`
  width: 7%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

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
export const TurnLine = styled.div`
  width: 93%;

  padding-left: 3.5%;
  padding-right: 3.5%;

  .svg {
    width: 100%;
    height: 40vh;
  }

  .path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: dash 3s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
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
`;


const pulseAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.6;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }

`;


export const PulseCircle = styled.div<{ delay: number; size: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid rgba(97, 0, 255, 0.3);
  animation: ${pulseAnimation} 7s ease-in-out infinite;
  animation-delay: ${(props) => `${props.delay}s`};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  
`;

export const Description = styled.h2`
  width: 60%;

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
  height: calc(100% - 52px);
  width: 1.5px;
  opacity: 0.4;
  background: linear-gradient(to bottom, #22fa5f, #6100ff);

  transform: ${(props) => props.transform};
  transition: transform 5s cubic-bezier(0.16, 1, 0.3, 1);

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
  width: 93%;

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

export const ChooserContainer = styled.div`
  width: calc(100% - 22px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 53px;
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

export const ChooseText = styled.div<{ color: string }>`
  color: ${(props) => props.color};

  font-family: Orbitron;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.819px;
  letter-spacing: 7.5px;
`;
