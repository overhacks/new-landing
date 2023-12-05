import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 90%;
  height: 100vh;
  margin-top: 72px;

  z-index: 1;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LineWrapper = styled.div`
  width: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.div<{ transform: string }>`
  height: calc(100% - 52px);
  width: 1.5px;
  opacity: 0.4;
  background: linear-gradient(to bottom, #22fa5f, #6100ff);

  transform: ${(props) => props.transform};
  transition: transform 5s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const Bullet = styled.div`
  width: 13px;
  height: 13px;
  transform: rotate(45.966deg);
  border: 1px solid #b1b5b2;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 50%;

    background: radial-gradient(
      63.11% 63.11% at 50.82% 71.31%,
      rgba(34, 250, 95, 0) 0%,
      rgba(34, 250, 95, 0.95) 100%
    );

    filter: blur(20px);
    width: 24px;
    height: 24px;
  }
`;

export const SectionContent = styled.div`
  height: 100%;
  width: 93%;

  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  color: #b2b2b2;

  font-family: Silkscreen;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 11.52px;
  letter-spacing: 0.15px;
`;

export const ChooserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 53px;
`;

export const ChooseWrapper = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;

  text-decoration: none;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }


  transition: opacity 0.15s ease-in-out;
`;

export const ChooseText = styled.div<{ color: string }>`
  color: ${props => props.color};

  font-family: Orbitron;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 33.819px;
  letter-spacing: 7.5px;
`;
