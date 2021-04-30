import Link from 'components/Link'
import Text from 'components/Text'
import { colors } from 'configuration'
import { AreaContainer } from './styled'

const LeftArea: React.FC = () => (
  <AreaContainer>
    <Text text="" title="small" color={colors.BLACK} bold>
      OLÁ, SOMOS A JÜSSI
    </Text>
    <Text text="normal" title="" color={colors.BLACK}>
      A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos
      consolidando o pensamento voltado para produtos e resolução de problemas.
      Nosso área dedicada exclusivamente para Produtos Digitais é organizada em
      6 especialidades: Product Managamenet, User Experience Design, SEO,
      Tecnologia, Agile e User Behavior Analytics.
    </Text>
    <Link
      background={false}
      border
      href="https://jussi.com.br/about.html"
      margin={false}
    >
      Conheça a Jüssi
    </Link>
  </AreaContainer>
)

export default LeftArea
