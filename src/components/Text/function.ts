import { fontSize } from 'configuration'

type FontSize = 'small' | 'normal' | ''

const textSize = {
  small: fontSize.SIZE_TEXT_SMALL,
  normal: fontSize.SIZE_TEXT_NORMAL
}

const titleSize = {
  normal: fontSize.SIZE_TITLE_NORMAL,
  small: fontSize.SIZE_TITLE_SMALL
}

/**
 * @function
 * @name checkFontSize
 * @param {FontSize} text defines the size for normal text.
 * @param {FontSize} title defines the size for title text.
 * @returns {string} size of desired text
 */

export const checkFontSize = (text: FontSize, title: FontSize): string => {
  if (title !== '') {
    return titleSize[title]
  }
  if (text !== '') {
    return textSize[text]
  }
  return textSize.normal
}
