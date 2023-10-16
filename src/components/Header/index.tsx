import React, { useEffect, useState } from "react";
import { Headercontainer, Logo, OverhacksName } from "./styles";
// import InvitePopup from 'components/newDesignComponents/invitePopup'
import Cat from '../../assets/img/logoCat.png'


function Header() {
  

  return (
    <Headercontainer>
    <OverhacksName>
        Overhacks
    </OverhacksName>
    </Headercontainer>
  );
}

export default Header;
