import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Menu from './Menu'

describe('Menu', () => {
  it('should render Menu', () => {
    const { container } = render(<Menu />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show option', () => {
    render(<Menu />)
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
