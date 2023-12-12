import styled from "styled-components";

export const SubTitlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const SectionSubTitle = styled.p`
  color: #2dc669;
  font-family: Silkscreen;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 112.73%; /* 33.819px */
  letter-spacing: 4.5px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 16px;
  }
  @media (min-width: 577px) {
    font-size: 26px;
  }
  @media (min-width: 769px) {
    font-size: 30px;
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
