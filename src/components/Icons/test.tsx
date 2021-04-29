import { render, screen } from '@testing-library/react'

import Cart from './Cart'
import Search from './Search'

describe('Icons', () => {
  it('should render component Cart icon', () => {
    render(<Cart />)

    expect(
      screen.getByAltText('ícone verificação de itens no carrinho')
    ).toMatchSnapshot()
    expect(
      screen.getByAltText('ícone verificação de itens no carrinho')
    ).toHaveAttribute('alt', 'ícone verificação de itens no carrinho')
  })

  it('should render component Search icon', () => {
    render(<Search />)

    expect(screen.getByAltText('ícone de pesquisa')).toMatchSnapshot()
    expect(screen.getByAltText('ícone de pesquisa')).toHaveAttribute(
      'alt',
      'ícone de pesquisa'
    )
  })
})
