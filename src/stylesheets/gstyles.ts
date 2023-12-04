import { createGlobalStyle } from "styled-components";

const Gstyles: any = createGlobalStyle<{ connectButtonColor: string }>`

* {
  font-weight: 400;
  margin: 0;
  padding: 0;
}



@font-face {
  font-family: 'PF Videotext Pro';
  src: local('PF Videotext Pro'),
    url('/src/assets/fonts/PFVideotextPro-Regular.ttf') format('truetype'), /* TTF */
    url('/src/assets/fonts/PFVideotextPro-Regular.woff') format('woff'), /* WOFF */
    url('/src/assets/fonts/PFVideotextPro-Regular.woff2') format('woff2'); /* WOFF2 */
  font-weight: bold;
  font-style: bold;
}


&::-webkit-scrollbar {
    width: 9px;
    background-color: rgb(14, 14, 14);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #445144;
    border-radius: 3px;
    width: 9px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #445144a8;
  }


/* 

::-webkit-scrollbar {
  width: 0;
} */


`;



export default Gstyles;
