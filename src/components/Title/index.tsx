import React from 'react'
import { Title } from './styles'



interface AnySizeTitleProps {
  text: string
  lineHeight?: string
  marginTop?: string
  marginBottom?: string
  marginRight?: string
  color?: string
  hoverColor?: string
  fontSize?: string
  onClick?: () => void
  maxWidth?: string
  overflow?: string
  whiteSpace?: string
  textOverflow?: string
  alignSelf?: string
}

const AnySizeTitle: React.FC<AnySizeTitleProps> = ({
  alignSelf,
  maxWidth,
  overflow,
  whiteSpace,
  textOverflow,
  text,
  lineHeight,
  marginTop = '0',
  marginBottom = '0',
  marginRight = '0',
  color,
  fontSize,
  onClick,
  hoverColor,
}) => {
  return (
    <Title
      maxWidth={maxWidth}
      overflow={overflow}
      whiteSpace={whiteSpace}
      textOverflow={textOverflow}
      fontSize={fontSize}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
      lineHeight={lineHeight}
      onClick={onClick}
      hoverColor={hoverColor}
      alignSelf={alignSelf}>
      {text}
    </Title>
  )
}

export default AnySizeTitle
