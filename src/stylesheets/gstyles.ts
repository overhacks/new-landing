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


@import url(https://db.onlinewebfonts.com/c/5867a44d7af9038f2d931de87ff53d58?family=Hanson);

@font-face {
    font-family: "Hanson";
    src: url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.eot");
    src: url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/5867a44d7af9038f2d931de87ff53d58.svg#Hanson")format("svg");
}






::-webkit-scrollbar {
  width: 0;
}
`;



export default Gstyles;
