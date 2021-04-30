import Image from 'next/image'
import { ImageContainer } from './styled'

const RightArea: React.FC = () => (
  <ImageContainer>
    <Image alt="banner" height={520} width={676} src="/img/jussi.png" />
  </ImageContainer>
)

export default RightArea
