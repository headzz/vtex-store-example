import { render, screen } from '@testing-library/react'

import Flexbox from './Flexbox'

describe('Flexbox', () => {
  it('should render component that represents display flex on page', () => {
    const { container } = render(
      <Flexbox alignContent="flexStart">
        <div>Teste</div>
      </Flexbox>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('justify-content: flex-start')
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render component that represents display flex on page with content to the right', () => {
    const { container } = render(
      <Flexbox alignContent="right">
        <div>Teste</div>
      </Flexbox>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('justify-content: flex-end')
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render component that represents display flex on page with content centered', () => {
    const { container } = render(
      <Flexbox alignContent="center">
        <div>Teste</div>
      </Flexbox>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('justify-content: center')
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('should render component that represents display flex on page with space-between content', () => {
    const { container } = render(
      <Flexbox alignContent="spaceBetween">
        <div>Teste</div>
        <div>Teste2</div>
      </Flexbox>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle('justify-content: space-between')
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
