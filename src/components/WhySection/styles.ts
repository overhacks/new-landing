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
  padding-bottom: 110px;
  position: relative;
  z-index: 2;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 576px) {
    width: 90%;
    justify-content: flex-start;
  }
  @media (min-width: 577px) {
    width: 90%;
    justify-content: flex-start;
  }
  @media (min-width: 769px) {
    width: 90%;
    justify-content: flex-start;
  }
  @media (min-width: 993px) {
    width: 25%;
    justify-content: center;
  }
  @media (min-width: 1201px) {
    width: 25%;
    justify-content: center;
  }
  @media (min-width: 1401px) {
    width: 25%;
    justify-content: center;
  }
`;

export const WhyTextContainer = styled.div`
  @media (max-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 577px) {
    max-width: 90%;
  }
  @media (min-width: 769px) {
    max-width: 90%;
  }
  @media (min-width: 993px) {
    max-width: 30%;
  }
  @media (min-width: 1201px) {
    max-width: 30%;
  }
  @media (min-width: 1401px) {
    max-width: 30%;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  z-index: 4;
`;

export const WhyColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    width: 90%;
    gap: 16px;
  }
  @media (min-width: 577px) {
    width: 90%;
    gap: 16px;
  }
  @media (min-width: 769px) {
    width: 90%;
    gap: 16px;
  }
  @media (min-width: 993px) {
    width: 30%;
    gap: 0;
  }
  @media (min-width: 1201px) {
    width: 30%;
    gap: 0;
  }
  @media (min-width: 1401px) {
    width: 30%;
    gap: 0;
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

export const LineLeftContainer = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BulletWrapper = styled.img`
  border: none;
  background-color: transparent;
  width: 36px;
  height: 36px;
  z-index: 5;
  object-fit: contain;
`;

export const PulseContainer = styled.div`
  width: 36px;
  height: 36px;


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
    width: 24px;
    height: 24px;
  }
`;

export const LineCenter = styled.div<{ transform: string }>`
  width: 1.5px;
  height: 201px;
  opacity: 0.4;
  /* background: rgba(34, 56, 250, 0.72); */
  background: linear-gradient(to bottom, #111336, #2622FA, #111336);

  transform: ${(props) => props.transform};
  transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const BooferLineWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const WhyCardWrapper = styled.div`
  display: flex;
  flex-direction: row;

@media (max-width: 576px) {
    width: 67%;
    padding: 24px;
  }
  @media (min-width: 577px) {
    width: 55%;
    padding: 24px;
  }
  @media (min-width: 769px) {
    width: 50%;
    padding: 24px;
  }
  @media (min-width: 993px) {
    width: 90%;
    padding: 24px 32px 24px;
  }
  @media (min-width: 1201px) {
    width: 90%;
    padding: 24px 32px 24px;
  }
  @media (min-width: 1401px) {
    width: 90%;
    padding: 24px 32px 24px;
  }
`

export const WhyCard = styled.div`
  z-index: 4;
  border-radius: 21px;
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 93%;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
  }
  @media (min-width: 577px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
  }
  @media (min-width: 769px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
  }
  @media (min-width: 993px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }
  @media (min-width: 1201px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }
  @media (min-width: 1401px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }
`;
export const Banner = styled.img<{
  width: string;
  marginBottom?: string;
}>`
  width: ${(props) => props.width};
  object-fit: contain;
  object-position: center;
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;
