import styled from "styled-components";

export const SubTitlecontainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const SectionSubTitle = styled.p`
  font-family: "PF Videotext Pro";
  letter-spacing: 0em;
  color: #CCFF5A;
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