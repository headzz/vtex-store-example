import { render } from '@testing-library/react'

import Footer from './Footer'

describe('<Footer />', () => {
  it('should render component that wraps Footer on page', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
