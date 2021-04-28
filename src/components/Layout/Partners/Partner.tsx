import { PartnerStyled } from './styled'

/**
 * @component
 * @name Partner
 * @description Defines the container for the layout of Partner.
 * @namespace components components/Layout/Partner
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Partner: React.FC = ({ children }) => {
  return <PartnerStyled>{children}</PartnerStyled>
}

export default Partner
