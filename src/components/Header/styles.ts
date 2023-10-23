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
export const DefaultHeadercontainer = styled.header`
  border-bottom: 2px solid rgb(44, 44, 48);

  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 16px;
  padding-top: 16px;
`;

export const Headercontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const LogoAndName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Logo = styled.div<{ background: any }>`
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center center;
  width: 52px;
  height: 52px;
  background-size: cover;
`;

export const SearchImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    fill: ${(props) => props.fill};
  }
  :hover {
    fill: ${(props) => props.fillHover};
  }
`;

export const CancelImg = styled.div<{ fill: string; fillHover: string }>`
  background-color: transparent;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  & line {
    stroke: ${(props) => props.fill};
  }
  svg:hover line {
    stroke: ${(props) => props.fillHover};
  }
`;

export const Input = styled.input<{
  placeholderColor: string;
  defaultColor: string;
}>`
  flex: 1;
  appearance: unset;
  outline: none;
  border: none;
  background: transparent;
  color: ${(props) => props.defaultColor};

  input[type="search"]:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  input[type="search"]::placeholder {
    color: ${(props) => props.placeholder};
  }
  input[type="search"]::-webkit-search-cancel-button {
    display: none;
    opacity: 0;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
  @media (min-width: 577px) {
    font-size: 15px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 993px) {
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    font-size: 20px;
  }
  @media (min-width: 1401px) {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 57px;
  border-bottom: 1px solid #22fa5f;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
