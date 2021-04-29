import { LinkStyled } from './styled'

type Props = {
  background: boolean
  border: boolean
  href: string
  margin: boolean
}

const defaultProps: Props = {
  background: false,
  border: false,
  href: '',
  margin: false
}

/**
 * @component
 * @name Link
 * @description Defines Link component.
 * @namespace components components/Link
 * @param  {element} children Defining the text from the Link.
 * @param  {boolean} background defines if background is transparent or not
 * @param  {boolean} border defines if link has border
 * @param  {string} href Responsible for the redirection of the page
 * @param  {boolean} margin Says if there is a margin left on the component
 *
 */
const Link: React.FC<Props> = ({
  background,
  border,
  children,
  href,
  margin
}) => (
  <LinkStyled
    background={background}
    border={border}
    href={href}
    margin={margin}
  >
    {children}
  </LinkStyled>
)

Link.defaultProps = defaultProps

export default Link
