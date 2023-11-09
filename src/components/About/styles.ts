
import { Controller, Scene } from "react-scrollmagic";
import styled from 'styled-components';

// export const Container = styled.div`
//   perspective: 1000px;
//   overflow: hidden;
//   height: 100vh;
// `;

// export const Tunnel = styled.div`
//   width: 100%;
//   height: 100%;
//   transform-style: preserve-3d;
// `;

// export const TunnelLayer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-size: cover;
//   background:radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
//   opacity: 0.9;
// `;

// export const TunnelLayer2 = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   /* background: url('your-image.jpg') no-repeat center center; */
//   background-size: cover;
//   background-color: pink;
//   opacity: 0.9;
// `;

export const Container = styled.div`
  perspective: 1000px;
  overflow: hidden;
  height: 100vh;
`;

export const Tunnel = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  
`;

export const TunnelLayer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
  opacity: 0.9;
  /* transform: translateZ(-5000px);  */
  /* transition: transform 1s ease-in-out; */
`;