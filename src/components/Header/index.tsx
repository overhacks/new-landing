import React, { useEffect, useState } from "react";
import { Headercontainer, Logo, OverhacksName } from "./styles";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import LogoHacks from '../../assets/img/LOGOHACK.png'


function Header() {
  

  return (
    <Headercontainer>
    <Logo background={LogoHacks}/>
    <OverhacksName>
        Overhacks
    </OverhacksName>
    </Headercontainer>
  );
}

export default Header;
