import { WhoWeAreStyled } from './styled'

/**
 * @component
 * @name WhoWeAre
 * @description Defines the container for the layout of who we are section.
 * @namespace components components/Layout/WhoWeAre
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const WhoWeAre: React.FC = ({ children }) => {
  return <WhoWeAreStyled>{children}</WhoWeAreStyled>
}

export default WhoWeAre
