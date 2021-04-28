import { BannerStyled } from './styled'

/**
 * @component
 * @name Banner
 * @description Defines the container for the layout of banner.
 * @namespace components components/Layout/Banner
 * @param {element} children Component(s) that may appear inside the layout.
 *
 */

const Banner: React.FC = ({ children }) => {
  return <BannerStyled>{children}</BannerStyled>
}

export default Banner
