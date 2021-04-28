import { SolutionStyled } from './styled'

/**
 * @component
 * @name Solution
 * @description Defines the container for the layout of Solution.
 * @namespace components components/Layout/Solution
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Solution: React.FC = ({ children }) => {
  return <SolutionStyled>{children}</SolutionStyled>
}

export default Solution
