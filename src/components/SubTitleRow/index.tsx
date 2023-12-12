import React from "react";
import { SectionSubTitle, SubTitlecontainer } from "./styles";
import SubTitle from "../SubTitle";

interface SubTitleRowProps {
  text: string;
}

const SubTitleRow: React.FC<SubTitleRowProps> = ({ text }) => {
  return (
    <SubTitlecontainer>
      <SectionSubTitle>{text}</SectionSubTitle>
    </SubTitlecontainer>
  );
};

export default SubTitleRow;
