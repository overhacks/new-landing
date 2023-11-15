import { Controller, Scene } from "react-scrollmagic";
import styled from "styled-components";

export const RowContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 32px;
  margin-bottom: 80px;
`;
export const WhyCardsSection = styled.section`
  width: 100%;
  margin-bottom: 338px;
`;
export const CardsLight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 90%;
  z-index: 1;

  border-radius: 50%;
  background: #22fa5f;

  filter: blur(200px);
`;

export const CardsContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const WhyColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
export const WhyCard = styled.div<{ backgroundColor: string; border: string }>`
  z-index: 2;
  padding: 48px 32px 48px;
  border-radius: 21px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    width: 80%;
  }
  @media (min-width: 577px) {
    width: 80%;
  }
  @media (min-width: 769px) {
    width: 70%;
  }
  @media (min-width: 993px) {
    width: 60%;
  }
  @media (min-width: 1201px) {
    width: 60%;
  }
  @media (min-width: 1401px) {
    width: 50%;
  }
`;
export const Banner = styled.div<{ imgSrc: string; width: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;

  max-width: 50%;
  width: ${(props) => props.width};
  aspect-ratio: 1 / 1;
  border-radius: 32px;
`;
