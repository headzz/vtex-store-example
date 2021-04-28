import { ContactStyled } from './styled'

/**
 * @component
 * @name Contact
 * @description Defines the container for the layout of contact section.
 * @namespace components components/Layout/Contact
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Contact: React.FC = ({ children }) => {
  return <ContactStyled>{children}</ContactStyled>
}

export default Contact
