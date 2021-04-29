import { render, screen } from '@testing-library/react'
import { colors } from 'configuration'

import Link from './Link'

describe('Link', () => {
  it('should render component with redirect link', () => {
    render(
      <Link href="localhost" margin={false} background={false} border={false}>
        Teste
      </Link>
    )

    expect(screen.getByRole('link', { name: /Teste/i })).toMatchSnapshot()
    expect(screen.getByRole('link', { name: /Teste/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Teste/i })).toHaveAttribute(
      'href',
      'localhost'
    )
  })

  it('should render component link with margin', () => {
    render(
      <Link href="localhost" margin background={false} border={false}>
        Teste
      </Link>
    )

    expect(screen.getByRole('link', { name: /Teste/i })).toMatchSnapshot()
    expect(screen.getByRole('link', { name: /Teste/i })).toHaveStyle(
      'margin-left: 3.2rem'
    )
  })

  it('should render component link background color', () => {
    render(
      <Link href="localhost" margin={false} background border={false}>
        Teste
      </Link>
    )

    expect(screen.getByRole('link', { name: /Teste/i })).toMatchSnapshot()
    expect(screen.getByRole('link', { name: /Teste/i })).toHaveStyle(
      `background-color: ${colors.GREEN_JUSSI}`
    )
  })

  it('should render component link with border', () => {
    render(
      <Link href="localhost" margin={false} background={false} border>
        Teste
      </Link>
    )

    expect(screen.getByRole('link', { name: /Teste/i })).toMatchSnapshot()
    expect(screen.getByRole('link', { name: /Teste/i })).toHaveStyle(
      `border: 1px solid ${colors.BLACK}`
    )
  })
})
