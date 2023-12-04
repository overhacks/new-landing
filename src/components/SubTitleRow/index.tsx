import React from 'react'
import { SectionSubTitle, SubTitlecontainer } from './styles'
import SubTitle from '../SubTitle'


interface SubTitleRowProps {
  text: string
}

const SubTitleRow: React.FC<SubTitleRowProps> = ({
  text
}) => {
  return (
    <SubTitlecontainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="35"
            viewBox="0 0 15 35"
            fill="none"
          >
            <path d="M14.5 0.5H1V34.5H14.5" stroke="#CCFF5A" />
          </svg>
          <SectionSubTitle>{text}</SectionSubTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="36"
            viewBox="0 0 15 36"
            fill="none"
          >
            <path d="M0.5 35H14L14 1H0.5" stroke="#CCFF5A" />
          </svg>
        </SubTitlecontainer>
  )
}

export default SubTitleRow
