import { createGlobalStyle } from "styled-components";


const Gstyles: any = createGlobalStyle<{ connectButtonColor: string }>`

* {
  font-family: "Play", sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'PF Videotext Pro';
  src: local('PF Videotext Pro'),
    url('../src/assets/fonts/PF\ Videotext\ Pro\ Regular.ttf') format('truetype');
  font-weight: bold;
}

::-webkit-scrollbar {
  width: 0;
}
`;


export default Gstyles;