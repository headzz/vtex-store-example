import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from './Input'

describe('Input', () => {
  it('should render component input', () => {
    const { container } = render(<Input />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text after typing', () => {
    render(<Input />)

    userEvent.type(screen.getByPlaceholderText('Buscar'), 'Hello, World!')
    expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
