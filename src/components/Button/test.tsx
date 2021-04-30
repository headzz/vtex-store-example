import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { colors } from 'configuration'
import Button from './Button'
describe('Button', () => {
  it('should render component button icon', () => {
    const handleClick = jest.fn()
    render(
      <Button
        color={colors.BLACK}
        clickHandler={handleClick}
        round={false}
        icon=""
      >
        Teste
      </Button>
    )

    expect(screen.getByRole('button', { name: /teste/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /teste/i })).toMatchSnapshot()
  })

  it('should click the button and execute function once', () => {
    const handleClick = jest.fn()
    render(
      <Button
        color={colors.BLACK}
        clickHandler={handleClick}
        round={false}
        icon=""
      >
        Teste
      </Button>
    )

    userEvent.click(screen.getByRole('button', { name: /teste/i }))

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button', { name: /teste/i })).toMatchSnapshot()
  })

  it('should render button with icon', () => {
    const handleClick = jest.fn()
    render(
      <Button
        color={colors.BLACK}
        clickHandler={handleClick}
        round={true}
        icon="search"
      >
        Teste
      </Button>
    )

    expect(screen.getByAltText('ícone de pesquisa')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('button')).toMatchSnapshot()
  })
})
