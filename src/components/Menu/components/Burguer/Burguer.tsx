import { Dispatch, SetStateAction } from 'react'
import { StyledBurguer } from './styled'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const Burguer: React.FC<Props> = ({ open, setOpen }) => {
  const aux = () => {
    setOpen(!open)
  }
  return (
    <StyledBurguer open={open} onClick={aux}>
      <div />
      <div />
      <div />
    </StyledBurguer>
  )
}

export default Burguer
