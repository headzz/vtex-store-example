import { NavigationStyled } from './styled'

/**
 * @component
 * @name Navigation
 * @description Defines the container for the layout of navbar  .
 * @namespace components components/Layout/Navigation
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Navigation: React.FC = ({ children }) => {
  return <NavigationStyled>{children}</NavigationStyled>
}

export default Navigation
