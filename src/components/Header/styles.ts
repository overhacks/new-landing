import styled from "styled-components";

export const OverhacksName = styled.h1`
  color: #22fa5f;
  font-family: PF Videotext Pro;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 3px;
  width: max-content;
`;
export const Headercontainer = styled.header`
  /* background-color: rgb(61, 60, 60); */
  border-bottom: 2px solid rgb(44, 44, 48);

  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  justify-content: start;
  gap: 16px;
  flex-wrap: wrap;

  padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 16px;
    padding-top: 16px;
`;

export const Logo = styled.div<{ background: any }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  width: 52px;
  height: 52px;
  background-size: cover;
`;