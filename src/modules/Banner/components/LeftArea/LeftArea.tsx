import Link from 'components/Link'
import Text from 'components/Text'
import { colors } from 'configuration'
import { AreaContainer } from './styled'

const LeftArea: React.FC = () => (
  <AreaContainer>
    <Text text="" title="normal" color={colors.WHITE}>
      {'//'}
    </Text>
    <Text text="" title="normal" color={colors.BLACK}>
      CRIAMOS LOJAS QUE VENDEM MAIS.
    </Text>
    <Text text="normal" title="" color={colors.BLACK}>
      A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
      Precisa criar sua loja ou migrar de plataforma?
    </Text>
    <Link
      background
      border
      href="https://jussi.com.br/services.html"
      margin={false}
    >
      Veja nossas Soluções
    </Link>
  </AreaContainer>
)

export default LeftArea
