import styled from "styled-components";

export const StyledAppScreen = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: rgb(14, 14, 14);

  &::-webkit-scrollbar {
  width: 0;
}


`;
