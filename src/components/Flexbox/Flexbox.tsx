import { FlexStyled } from './styled'
import React from 'react'

type Props = {
  alignContent: 'center' | 'right' | 'spaceBetween' | 'flexStart'
  column?: boolean
}

/**
 * @component
 * @name Flexbox
 * @deion Gives flex display for components.
 * @namespace components components/Flexbox
 * @param {string} alignContent Justify content based on required parameter.
 * @param {element} children Component(s) that may appear inside the layout.
 * @param {boolean} column Changes flex type to column.
 *
 */

const Flexbox: React.FC<Props> = ({ children, column, alignContent }) => {
  return (
    <FlexStyled alignContent={alignContent} column={column}>
      {children}
    </FlexStyled>
  )
}

export default Flexbox
