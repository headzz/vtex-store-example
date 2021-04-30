import { render } from '@testing-library/react'

import Homepage from './Homepage'

describe('Homepage', () => {
  it('match snapshot', () => {
    const { container } = render(<Homepage />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
