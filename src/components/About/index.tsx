import { Container, Tunnel, TunnelLayer } from "./styles";
import React, { useEffect, useRef } from "react";
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const AboutTunnel = () => {
  return (
    
       
      
       
          <Scene
            duration={800}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
            triggerElement=".tunnel-layer"
          >
            {(progress: any) => (
              <Timeline totalProgress={progress} paused>
                <Timeline target={<Container className="timeline"><Tunnel><TunnelLayer className="tunnel-layer" /></Tunnel></Container>}>
                  
                  <Tween
                    from={{ z: 0 }}
                    to={{ z: -5000}}
                  />
                  {/* <Tween from={{ x: -1000 }} to={{ x: 250 }} /> */}
                </Timeline>
              </Timeline>
            )}
          </Scene>
          
        
    
  );
};

export default AboutTunnel;
