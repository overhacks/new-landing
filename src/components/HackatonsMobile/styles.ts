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

  position: relative;
`;

export const PopupContentWrapper = styled.div`
  width: calc(90% - 12px);
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  max-height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #445144;
    border-radius: 3px;
    width: 9px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #445144a8;
  }

  @media (max-width: 576px) {
    gap: 18px;
  }
  @media (min-width: 577px) {
    gap: 24px;
  }
  @media (min-width: 769px) {
    gap: 28px;
  }
  @media (min-width: 993px) {
    gap: 30px;
  }
  @media (min-width: 1201px) {
    gap: 30px;
  }
  @media (min-width: 1401px) {
    gap: 30px;
  }
`;

export const CardContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 576px) {
    gap: 18px;
  }
  @media (min-width: 577px) {
    gap: 24px;
  }
  @media (min-width: 769px) {
    gap: 28px;
  }
  @media (min-width: 993px) {
    gap: 30px;
  }
  @media (min-width: 1201px) {
    gap: 30px;
  }
  @media (min-width: 1401px) {
    gap: 30px;
  }
`;


export const ButtonTextPopup = styled.p`
  color: #dddbdb;
  font-family: Orbitron;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.45px;

  @media (max-width: 576px) {
    font-size: 17px;
  }
  @media (min-width: 577px) {
    font-size: 20px;
  }

  @media (min-width: 769px) {
    font-size: 25px;
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

export const LargeApplyButton = styled.a<{
  backgroundImg: any;
}>`
  background-color: transparent;
  background-image: url(${(props) => props.backgroundImg});
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 6.5 / 1;

  cursor: pointer;


  &:hover {
    opacity: 0.6;
  }

  
`;


export const LargeApplyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const Popup = styled.div`
  z-index: 999999999;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  padding-top: 17px;
  padding-bottom: 28px;
  max-height: calc(100% - 45px);

  background-color: rgb(18, 23, 24);
  box-shadow: 0px 66px 100px 0px rgba(41, 151, 84, 0.25) inset,
    0px 4px 18px 0px #299754 inset, 0px 0px 20px 0px rgba(0,0,0,0.75);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;

  @media (max-width: 576px) {
    gap: 18px;
  }
  @media (min-width: 577px) {
    gap: 24px;
  }
  @media (min-width: 769px) {
    gap: 28px;
  }
  @media (min-width: 993px) {
    gap: 30px;
  }
  @media (min-width: 1201px) {
    gap: 30px;
  }
  @media (min-width: 1401px) {
    gap: 30px;
  }
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

export const HackatonRowMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CancelBtn = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const PopupStyledCross = styled.button<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-color: transparent;
  border: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 2;

  width: 30px;
  height: 24px;
  cursor: pointer;
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

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
`;

export const TextWrapper = styled.div`
  gap: 18px;
  background: transparent;
  border-radius: 24px;
  border: 1px solid #353535;

  padding: 25px;
  width: calc(100% - 50px);

  color: #cde6f1;

  font-family: PF Videotext Pro;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

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

export const HackatonCard = styled.div`
  width: 100%;

  background-color: rgba(196, 196, 196, 0.01);

  box-shadow: 0px 66px 100px 0px rgba(45, 198, 105, 0.25) inset,
    0px 4px 18px 0px #2dc669 inset;
  backdrop-filter: blur(50px);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;

  @media (max-width: 576px) {
    gap: 18px;
    padding-top: 17px;
    padding-bottom: 28px;
  }
  @media (min-width: 577px) {
    gap: 24px;
    padding-top: 22px;
    padding-bottom: 33px;
  }
  @media (min-width: 769px) {
    gap: 28px;
    padding-top: 27px;
    padding-bottom: 38px;
  }
  @media (min-width: 993px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
  }
  @media (min-width: 1201px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
  }
  @media (min-width: 1401px) {
    gap: 30px;
    padding-top: 27px;
    padding-bottom: 38px;
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
