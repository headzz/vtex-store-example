import { FooterStyled } from './styled'

/**
 * @component
 * @name Footer
 * @description Defines the container for the layout of footer section.
 * @namespace components components/Layout/Footer
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Footer: React.FC = ({ children }) => {
  return <FooterStyled>{children}</FooterStyled>
}

export default Footer
