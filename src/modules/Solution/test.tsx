import { render } from '@testing-library/react'

import Solution from './Solution'

describe('Solution', () => {
  it('match snapshot', () => {
    const { container } = render(<Solution />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
