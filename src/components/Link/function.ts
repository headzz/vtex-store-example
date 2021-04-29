import { colors } from 'configuration'

export const checkDecoration = (
  border: boolean,
  background: boolean
): string => {
  if (border || background) {
    return ''
  }
  return `text-decoration: underline;
  -webkit-text-decoration-color: ${colors.PINK_JUSSI};
  text-decoration-color: ${colors.PINK_JUSSI};`
}
