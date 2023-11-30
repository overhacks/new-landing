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

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    border-radius: 50%;
    background: #22fa5f;

    filter: blur(200px);

    @media (max-width: 576px) {
      width: 50%;
      opacity: 0.4;
      height: 80%;
    }
    @media (min-width: 577px) {
      width: 50%;
      opacity: 0.4;
      height: 80%;
    }
    @media (min-width: 769px) {
      width: 40%;
      opacity: 0.4;
      height: 80%;
    }
    @media (min-width: 993px) {
      width: 30%;
      opacity: 0.9;
      height: 65%;
    }
    @media (min-width: 1201px) {
      width: 30%;
      opacity: 0.9;
      height: 65%;
    }
    @media (min-width: 1401px) {
      width: 20%;
      opacity: 0.9;
      height: 65%;
    }
  }
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
export const WhyCard = styled.div<{ backgroundColor: string; border: string }>`
  z-index: 4;
  border-radius: 21px;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    width: 67%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    padding: 24px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset,
      0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset,
      0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 577px) {
    width: 55%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    padding: 24px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset,
      0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset,
      0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 769px) {
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    padding: 24px;
    box-shadow: 0px 98px 100px 0px rgba(0, 0, 0, 0.12) inset,
      0px 4px 18px 0px rgba(0, 0, 0, 0.57) inset,
      0px 1px 18px 0px rgba(0, 0, 0, 0.23) inset;
  }
  @media (min-width: 993px) {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: 24px 32px 24px;
    box-shadow: none;
  }
  @media (min-width: 1201px) {
    width: 50%;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: 24px 32px 24px;
    box-shadow: none;
  }
  @media (min-width: 1401px) {
    width: 40%;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: 24px 32px 24px;
    box-shadow: none;
  }
`;
export const Banner = styled.div<{
  imgSrc: string;
  width: string;
  marginBottom?: string;
}>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: contain;
  width: ${(props) => props.width};
  aspect-ratio: 1 / 1;
  border-radius: 32px;
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;
