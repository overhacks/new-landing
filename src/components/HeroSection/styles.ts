import styled from "styled-components";


export const SectionContainer = styled.section`
  width: 90%;
  height: 100vh;
  margin-top: 32px;

 
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
`

export const Line = styled.div<{ transform: string }>`
  height: 90%;
  width: 1px;
  opacity: 0.4;
  background: linear-gradient(to bottom, #22FA5F, #6100FF);

  transform: ${(props) => props.transform};

  transition: transform 3s cubic-bezier(0.16, 1, 0.3, 1);

  transform-origin: 0 0;
`;

export const SectionContent = styled.div`
    height: 100%;
    width: 93%;
`
