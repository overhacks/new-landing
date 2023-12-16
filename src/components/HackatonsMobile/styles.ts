import styled from "styled-components";

export const HackatonsMobileSection = styled.section`
  width: 100%;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const HackatonsColumn = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const HackatonHeader = styled.h1`
  text-align: left;
  color: #fff;

  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.45px;

  @media (max-width: 576px) {
    font-size: 17px;
  }
  @media (min-width: 577px) {
    font-size: 22px;
  }
  @media (min-width: 769px) {
    font-size: 26px;
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

export const HackatonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoRow = styled.div`
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10%;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
`;

export const InfoLabel = styled.h3`
  text-align: left;
  color: #6c6d6c;

  font-family: PF Videotext Pro;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.3px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 24px;
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

export const InfoData = styled.h3`
  text-align: left;
  color: #fff;

  font-family: PF Videotext Pro;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.3px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 24px;
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

export const CardsPoint = styled.p`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #e2e2e2;
  text-align: left;

  @media (max-width: 576px) {
    font-size: 17px;
  }
  @media (min-width: 577px) {
    font-size: 22px;
  }
  @media (min-width: 769px) {
    font-size: 26px;
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

export const CardsBullet = styled.b`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #22fa5f;
  text-align: left;

  @media (max-width: 576px) {
    font-size: 17px;
  }
  @media (min-width: 577px) {
    font-size: 22px;
  }
  @media (min-width: 769px) {
    font-size: 26px;
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

export const Topics = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 576px) {
    gap: 11px;
  }
  @media (min-width: 577px) {
    gap: 17px;
  }
  @media (min-width: 769px) {
    gap: 24px;
  }
  @media (min-width: 993px) {
    gap: 25px;
  }
  @media (min-width: 1201px) {
    gap: 25px;
  }
  @media (min-width: 1401px) {
    gap: 25px;
  }
`;

export const Banner = styled.div<{ imgSrc: string; width: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: fit-content;
  width: ${(props) => props.width};
  aspect-ratio: 1.3617 / 1;
  border-radius: 24px;
`;

export const HackatonCard = styled.div`
  width: calc(100% - 56px);

  background-color: rgba(196, 196, 196, 0.01);
  box-shadow: 0px 66px 100px 0px rgba(13, 36, 245, 0.25) inset,
    0px 4px 18px 0px #580df5 inset;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;

  @media (max-width: 576px) {
    gap: 18px;
    padding-top: 17px;
    padding-bottom: 28px;
    padding-left: 28px;
    padding-right: 28px;
  }
  @media (min-width: 577px) {
    gap: 24px;
    padding-top: 22px;
    padding-bottom: 33px;
    padding-left: 33px;
    padding-right: 33px;
  }
  @media (min-width: 769px) {
    gap: 28px;
    padding-top: 27px;
    padding-bottom: 38px;
    padding-left: 38px;
    padding-right: 38px;
  }
  @media (min-width: 993px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
    padding-left: 38px;
    padding-right: 38px;
  }
  @media (min-width: 1201px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
    padding-left: 38px;
    padding-right: 38px;
  }
  @media (min-width: 1401px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
    padding-left: 38px;
    padding-right: 38px;
  }
`;

export const PrizePoolWrapper = styled.div`
  width: 45%;
`;

export const PrizeValue = styled.div`
  color: #22fa5f;

  font-family: PF Videotext Pro;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.75px;

  @media (max-width: 576px) {
    font-size: 25px;
  }
  @media (min-width: 577px) {
    font-size: 32px;
  }
  @media (min-width: 769px) {
    font-size: 40px;
  }
  @media (min-width: 993px) {
    font-size: 40px;
  }
  @media (min-width: 1201px) {
    font-size: 34px;
  }
  @media (min-width: 1401px) {
    font-size: 34px;
  }
`;

export const SeeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-height: 150px;
`;

export const SeeMoreButton = styled.button<{ backgroundImg: any }>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 7.413/1;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  transition: opacity 0.15s ease-in-out;
`;

export const ButtonText = styled.p`
  color: #22fa5f;

  font-family: Orbitron;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.45px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }
  @media (min-width: 769px) {
    font-size: 24px;
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
