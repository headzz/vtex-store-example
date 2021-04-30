import { render } from '@testing-library/react'

import Header from './Header'

describe('Header', () => {
  it('match snapshot', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
