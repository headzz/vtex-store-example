import Image from 'next/image'
import { partners } from './imageData'

const PartnersImage: React.FC = () => (
  <>
    {partners.map((item) => {
      const { height, name, src, width } = item
      return (
        <div key={name}>
          <Image
            alt={`logo da empresa ${name}`}
            height={height}
            src={src}
            width={width}
          />
        </div>
      )
    })}
  </>
)
export default PartnersImage
