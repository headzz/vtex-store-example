import CardLayout from '../CardLayout/CardLayout'
import { cardData } from './data'

const Card: React.FC = () => (
  <>
    {cardData.map((item) => {
      const { description, features, name } = item
      return (
        <CardLayout
          description={description}
          features={features}
          name={name}
          key={name}
        />
      )
    })}
  </>
)

export default Card
