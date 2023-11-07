import { useEffect, useState } from "react";
// import { useStores } from "stores";
// import WebAppSDK from '@twa-dev/sdk'
// import { useStore as useStoreNanoStores } from '@nanostores/react'
import backgroundImage from "assets/img/backgroundImage.png";
import backgroundImageLightTheme from "assets/img/lightThemeBackgroundImage.png"
export const useColorTheme = () => {
    
    const darkThemeColors = {
        
      
      };
            
      const twaColors = {
      };

      const [designColors, setDesignColors] = useState(darkThemeColors)
  
    return {
      designColors
    };
  };