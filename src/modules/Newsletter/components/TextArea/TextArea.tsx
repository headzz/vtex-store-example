import Button from 'components/Button'
import Text from 'components/Text'
import { colors } from 'configuration'
import { EmailInput, InputContainer, TextContainer } from './styled'

const TextArea: React.FC = () => (
  <TextContainer>
    <Text text="" title="small" color={colors.GREEN_JUSSI} bold>
      {'//'}
    </Text>
    <Text text="normal" title="small" color={colors.WHITE} bold>
      RECEBA NOVIDADES DA NOSSA ÁREA DE PRODUTOS DIGITAIS.
    </Text>
    <InputContainer>
      <EmailInput type="text" />
      <Button
        clickHandler={() => {
          console.log('teste')
        }}
        color={colors.GREEN_JUSSI}
        round={false}
        icon=""
      >
        CADASTRAR
      </Button>
    </InputContainer>
  </TextContainer>
)

export default TextArea
