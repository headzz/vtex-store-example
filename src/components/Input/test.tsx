import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

describe('Input', () => {
  it('should render component input', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Input clickHandler={handleClick} setParentValue={handleClick} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text after typing', () => {
    const handleClick = jest.fn()
    render(<Input clickHandler={handleClick} setParentValue={handleClick} />)

    userEvent.type(screen.getByPlaceholderText('Buscar'), 'Hello, World!')
    expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')

    expect(screen.getByAltText('ícone de pesquisa')).toBeInTheDocument()
  })
})
