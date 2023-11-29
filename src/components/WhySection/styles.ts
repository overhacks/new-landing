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
  max-width: 25%;
`

export const WhyTextContainer = styled.div`
  max-width: 30%;
`


export const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  z-index: 4;

  &::before {
    content: '';
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 65%;
  z-index: 3;

  border-radius: 50%;
  background: #22fa5f;

  filter: blur(200px);

  @media (max-width: 576px) {
    width: 50%;
  }
  @media (min-width: 577px) {
    width: 50%;
  }
  @media (min-width: 769px) {
    width: 40%;
  }
  @media (min-width: 993px) {
    width: 30%;
  }
  @media (min-width: 1201px) {
    width: 30%;
  }
  @media (min-width: 1401px) {
    width: 20%;
  }

  }

`;

export const WhyColumn = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
export const WhyCard = styled.div<{ backgroundColor: string; border: string }>`
  z-index: 4;
  padding: 24px 32px 24px;
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
    width: 70%;
  }
  @media (min-width: 769px) {
    width: 60%;
  }
  @media (min-width: 993px) {
    width: 50%;
  }
  @media (min-width: 1201px) {
    width: 50%;
  }
  @media (min-width: 1401px) {
    width: 40%;
  }
`;
export const Banner = styled.div<{ imgSrc: string; width: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  width: ${(props) => props.width};
  aspect-ratio: 1 / 1;
  border-radius: 32px;
`;
