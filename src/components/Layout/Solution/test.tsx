import { render } from '@testing-library/react'

import Solution from './Solution'

describe('<Solution />', () => {
  it('should render component that wraps Solution on page', () => {
    const { container } = render(<Solution />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
