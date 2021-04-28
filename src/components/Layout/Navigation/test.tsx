import { render } from '@testing-library/react'

import Navigation from './Navigation'

describe('<Navigation />', () => {
  it('should render component that wraps navigation on page', () => {
    const { container } = render(<Navigation />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
