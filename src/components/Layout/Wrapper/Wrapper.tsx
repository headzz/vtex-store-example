import { WrapperStyled } from './styled'

/**
 * @component
 * @name Wrapper
 * @description Defines the container for the layout.
 * @namespace components components/Layout/Wrapper
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Wrapper: React.FC = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>
}

export default Wrapper
