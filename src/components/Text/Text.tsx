import { colors } from 'configuration'
import React from 'react'
import { TextStyled } from './styled'

type FontSize = 'small' | 'normal' | ''

type Font = {
  text: FontSize
  title: FontSize
  color?: string
  bold?: boolean
}

const defaultProps: Font = {
  bold: false,
  color: colors.BLACK,
  text: 'normal',
  title: ''
}

/**
 * @component
 * @name Text
 * @description creates text component to use on screen.
 * @namespace components components/Text
 * @param {FontSize} text Sets the size for text.
 * @param {FontSize} title Sets the size for title.
 * @param {element} children Component(s) that may appear inside the layout.
 * @param {string} color Specifies the desired color for the text.
 * @param {boolean} bold Sets the font weight to bold.
 *
 */
const Text: React.FC<Font> = ({ bold, children, color, text, title }) => {
  return (
    <TextStyled title={title} text={text} color={color} bold={bold}>
      {children}
    </TextStyled>
  )
}

Text.defaultProps = defaultProps
export default Text
