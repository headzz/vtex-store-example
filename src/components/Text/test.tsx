import { render, screen } from '@testing-library/react'
import { colors } from 'configuration'

import Text from './Text'

describe('Text', () => {
  it('should render component that small text with no color defined', () => {
    const { container } = render(
      <Text text="small" title="">
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 1.2rem')
    expect(container.firstChild).toHaveStyle(`color: ${colors.BLACK}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render component that small text with no color defined', () => {
    const { container } = render(
      <Text text="small" title="">
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 1.2rem')
    expect(container.firstChild).toHaveStyle(`color: ${colors.BLACK}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render small title', () => {
    const { container } = render(
      <Text text="" title="small">
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 3.2rem')
    expect(container.firstChild).toHaveStyle(`color: ${colors.BLACK}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render normal title', () => {
    const { container } = render(
      <Text text="" title="normal">
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 6.4rem')
    expect(container.firstChild).toHaveStyle(`color: ${colors.BLACK}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render component with bold text', () => {
    const { container } = render(
      <Text text="small" title="" bold>
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 1.2rem')
    expect(container.firstChild).toHaveStyle('font-weight: 700')
    expect(container.firstChild).toHaveStyle(`color: ${colors.BLACK}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render text with green color', () => {
    const { container } = render(
      <Text text="" title="" color={colors.GREEN_JUSSI}>
        Teste
      </Text>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('font-size: 1.6rem')
    expect(container.firstChild).toHaveStyle(`color: ${colors.GREEN_JUSSI}`)
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
