import { render } from '@testing-library/react'

import Wrapper from './Wrapper'

describe('<Wrapper />', () => {
  it('should render component that wraps everything on page', () => {
    const { container } = render(<Wrapper />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
