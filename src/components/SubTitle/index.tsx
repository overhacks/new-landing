import React from 'react'
import { Text } from './styles'


interface SubTitleProps {
  cursor?: string
  text: string
  lineHeight?: string
  marginTop?: string
  marginBottom?: string
  marginRight?: string
  color?: string
  fontSize?: string
  textAlign?: string
  hoverColor?: string
  onClick?: () => void
  maxWidth?: string
  width?: string
  overflow?: string
  whiteSpace?: string
  textOverflow?: string
  alignSelf?: string
}

const SubTitle: React.FC<SubTitleProps> = ({
  alignSelf,
  maxWidth,
  width,
  overflow,
  whiteSpace,
  textOverflow,
  cursor,
  text,
  lineHeight,
  marginTop = '0',
  marginBottom = '0',
  marginRight = '0',
  color,
  fontSize,
  textAlign,
  onClick,
  hoverColor,
}) => {
  return (
    <Text
      alignSelf={alignSelf}
      maxWidth={maxWidth}
      width={width}
      overflow={overflow}
      whiteSpace={whiteSpace}
      textOverflow={textOverflow}
      textAlign={textAlign}
      fontSize={fontSize}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
      lineHeight={lineHeight}
      cursor={cursor}
      onClick={onClick}
      hoverColor={hoverColor}>
      {text}
    </Text>
  )
}

export default SubTitle
