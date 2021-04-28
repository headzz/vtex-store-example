import { NewsletterStyled } from './styled'

/**
 * @component
 * @name Newsletter
 * @description Defines the container for the layout of newsletter section.
 * @namespace components components/Layout/Newsletter
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Newsletter: React.FC = ({ children }) => {
  return <NewsletterStyled>{children}</NewsletterStyled>
}

export default Newsletter
